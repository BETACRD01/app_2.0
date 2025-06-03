import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_routes.dart';
import '../../core/widgets/loading_widget.dart';
import '../../core/widgets/error_widget.dart';
import '../../core/utils/helpers.dart';
import '../../providers/auth_provider.dart';
import '../../providers/booking_provider.dart';
import '../../models/booking_model.dart';

class BookingListScreen extends StatefulWidget {
  const BookingListScreen({Key? key}) : super(key: key);

  @override
  State<BookingListScreen> createState() => _BookingListScreenState();
}

class _BookingListScreenState extends State<BookingListScreen>
    with SingleTickerProviderStateMixin {
  late TabController _tabController;

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 4, vsync: this);
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _loadBookings();
    });
  }

  void _loadBookings() {
    final authProvider = Provider.of<AuthProvider>(context, listen: false);
    final bookingProvider = Provider.of<BookingProvider>(context, listen: false);
    final user = authProvider.currentUser;
    
    if (user != null) {
      bookingProvider.loadUserBookings(
        user.id,
        isProvider: user.userType == UserType.provider,
      );
    }
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Mis Reservas'),
        bottom: TabBar(
          controller: _tabController,
          isScrollable: true,
          labelColor: AppColors.primary,
          unselectedLabelColor: AppColors.textSecondary,
          indicatorColor: AppColors.primary,
          tabs: const [
            Tab(text: 'Todas'),
            Tab(text: 'Pendientes'),
            Tab(text: 'Confirmadas'),
            Tab(text: 'Completadas'),
          ],
        ),
      ),
      body: Consumer<BookingProvider>(
        builder: (context, bookingProvider, child) {
          if (bookingProvider.isLoading) {
            return const LoadingWidget(message: 'Cargando reservas...');
          }

          if (bookingProvider.errorMessage != null) {
            return CustomErrorWidget(
              message: bookingProvider.errorMessage!,
              onRetry: _loadBookings,
            );
          }

          return TabBarView(
            controller: _tabController,
            children: [
              _buildBookingList(bookingProvider.bookings),
              _buildBookingList(bookingProvider.getBookingsByStatus(BookingStatus.pending)),
              _buildBookingList(bookingProvider.getBookingsByStatus(BookingStatus.confirmed)),
              _buildBookingList(bookingProvider.getCompletedBookings()),
            ],
          );
        },
      ),
    );
  }

  Widget _buildBookingList(List<BookingModel> bookings) {
    if (bookings.isEmpty) {
      return const Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              Icons.calendar_today_outlined,
              size: 64,
              color: AppColors.textHint,
            ),
            SizedBox(height: 16),
            Text(
              'No hay reservas',
              style: TextStyle(
                fontSize: 18,
                color: AppColors.textSecondary,
              ),
            ),
            SizedBox(height: 8),
            Text(
              'Tus reservas aparecerán aquí',
              style: TextStyle(
                fontSize: 14,
                color: AppColors.textHint,
              ),
            ),
          ],
        ),
      );
    }

    return RefreshIndicator(
      onRefresh: () async => _loadBookings(),
      child: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: bookings.length,
        itemBuilder: (context, index) {
          return _buildBookingCard(bookings[index]);
        },
      ),
    );
  }

  Widget _buildBookingCard(BookingModel booking) {
    return Container(
      margin: const EdgeInsets.only(bottom: 16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(12),
        boxShadow: [
          BoxShadow(
            color: AppColors.shadow,
            blurRadius: 8,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: InkWell(
        onTap: () {
          Navigator.pushNamed(
            context,
            AppRoutes.bookingDetail,
            arguments: booking,
          );
        },
        borderRadius: BorderRadius.circular(12),
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Header con estado
              Row(
                children: [
                  Expanded(
                    child: Text(
                      booking.serviceName,
                      style: const TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                        color: AppColors.textPrimary,
                      ),
                    ),
                  ),
                  _buildStatusChip(booking.status),
                ],
              ),
              const SizedBox(height: 8),
              
              // Información del proveedor/cliente
              Text(
                booking.providerName,
                style: const TextStyle(
                  fontSize: 14,
                  color: AppColors.textSecondary,
                ),
              ),
              const SizedBox(height: 12),
              
              // Fecha y hora
              Row(
                children: [
                  const Icon(
                    Icons.calendar_today,
                    size: 16,
                    color: AppColors.textSecondary,
                  ),
                  const SizedBox(width: 8),
                  Text(
                    Helpers.formatDate(booking.scheduledDate),
                    style: const TextStyle(
                      fontSize: 14,
                      color: AppColors.textPrimary,
                    ),
                  ),
                  const SizedBox(width: 16),
                  const Icon(
                    Icons.access_time,
                    size: 16,
                    color: AppColors.textSecondary,
                  ),
                  const SizedBox(width: 8),
                  Text(
                    booking.scheduledTime,
                    style: const TextStyle(
                      fontSize: 14,
                      color: AppColors.textPrimary,
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 12),
              
              // Precio y acciones
              Row(
                children: [
                  Text(
                    Helpers.formatCurrency(booking.totalPrice),
                    style: const TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                      color: AppColors.primary,
                    ),
                  ),
                  const Spacer(),
                  if (booking.status == BookingStatus.pending) ...[
                    TextButton(
                      onPressed: () => _cancelBooking(booking),
                      child: const Text(
                        'Cancelar',
                        style: TextStyle(color: AppColors.error),
                      ),
                    ),
                  ] else if (booking.status == BookingStatus.completed && booking.rating == null) ...[
                    TextButton(
                      onPressed: () => _rateService(booking),
                      child: const Text('Calificar'),
                    ),
                  ],
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildStatusChip(BookingStatus status) {
    Color backgroundColor;
    Color textColor;
    String text = Helpers.getBookingStatusName(status);

    switch (status) {
      case BookingStatus.pending:
        backgroundColor = AppColors.warning.withOpacity(0.1);
        textColor = AppColors.warning;
        break;
      case BookingStatus.confirmed:
        backgroundColor = AppColors.info.withOpacity(0.1);
        textColor = AppColors.info;
        break;
      case BookingStatus.inProgress:
        backgroundColor = AppColors.primary.withOpacity(0.1);
        textColor = AppColors.primary;
        break;
      case BookingStatus.completed:
        backgroundColor = AppColors.success.withOpacity(0.1);
        textColor = AppColors.success;
        break;
      case BookingStatus.cancelled:
        backgroundColor = AppColors.error.withOpacity(0.1);
        textColor = AppColors.error;
        break;
    }

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
      decoration: BoxDecoration(
        color: backgroundColor,
        borderRadius: BorderRadius.circular(16),
      ),
      child: Text(
        text,
        style: TextStyle(
          fontSize: 12,
          fontWeight: FontWeight.w600,
          color: textColor,
        ),
      ),
    );
  }

  void _cancelBooking(BookingModel booking) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Cancelar Reserva'),
        content: const Text('¿Estás seguro de que quieres cancelar esta reserva?'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('No'),
          ),
          TextButton(
            onPressed: () async {
              Navigator.pop(context);
              final bookingProvider = Provider.of<BookingProvider>(context, listen: false);
              bool success = await bookingProvider.cancelBooking(
                booking.id,
                'Cancelado por el usuario',
              );
              
              if (success && mounted) {
                ScaffoldMessenger.of(context).showSnackBar(
                  const SnackBar(
                    content: Text('Reserva cancelada'),
                    backgroundColor: AppColors.success,
                  ),
                );
              }
            },
            child: const Text(
              'Sí, cancelar',
              style: TextStyle(color: AppColors.error),
            ),
          ),
        ],
      ),
    );
  }

  void _rateService(BookingModel booking) {
    double rating = 5.0;
    final reviewController = TextEditingController();

    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Calificar Servicio'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Text('¿Cómo fue tu experiencia?'),
            const SizedBox(height: 16),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: List.generate(5, (index) {
                return IconButton(
                  icon: Icon(
                    index < rating ? Icons.star : Icons.star_border,
                    color: Colors.amber,
                  ),
                  onPressed: () {
                    rating = index + 1.0;
                    (context as Element).markNeedsBuild();
                  },
                );
              }),
            ),
            const SizedBox(height: 16),
            TextField(
              controller: reviewController,
              decoration: const InputDecoration(
                hintText: 'Escribe tu reseña (opcional)',
                border: OutlineInputBorder(),
              ),
              maxLines: 3,
            ),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Cancelar'),
          ),
          TextButton(
            onPressed: () async {
              Navigator.pop(context);
              final bookingProvider = Provider.of<BookingProvider>(context, listen: false);
              bool success = await bookingProvider.rateBooking(
                booking.id,
                rating,
                reviewController.text.trim().isEmpty ? null : reviewController.text.trim(),
              );
              
              if (success && mounted) {
                ScaffoldMessenger.of(context).showSnackBar(
                  const SnackBar(
                    content: Text('Calificación enviada'),
                    backgroundColor: AppColors.success,
                  ),
                );
              }
            },
            child: const Text('Enviar'),
          ),
        ],
      ),
    );
  }
}
