import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../core/constants/app_colors.dart';
import '../../core/widgets/custom_button.dart';
import '../../core/widgets/loading_widget.dart';
import '../../core/widgets/error_widget.dart';
import '../../core/utils/helpers.dart';
import '../../providers/auth_provider.dart';
import '../../providers/service_provider.dart';
import '../../models/service_model.dart';

class ProviderServices extends StatefulWidget {
  const ProviderServices({Key? key}) : super(key: key);

  @override
  State<ProviderServices> createState() => _ProviderServicesState();
}

class _ProviderServicesState extends State<ProviderServices> {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _loadServices();
    });
  }

  void _loadServices() {
    final authProvider = Provider.of<AuthProvider>(context, listen: false);
    final user = authProvider.currentUser;
    
    if (user != null) {
      Provider.of<ServiceProvider>(context, listen: false)
          .loadServicesByProvider(user.id);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Mis Servicios'),
        actions: [
          IconButton(
            icon: const Icon(Icons.add),
            onPressed: _showAddServiceDialog,
          ),
        ],
      ),
      body: Consumer<ServiceProvider>(
        builder: (context, serviceProvider, child) {
          if (serviceProvider.isLoading) {
            return const LoadingWidget(message: 'Cargando servicios...');
          }

          if (serviceProvider.errorMessage != null) {
            return CustomErrorWidget(
              message: serviceProvider.errorMessage!,
              onRetry: _loadServices,
            );
          }

          final services = serviceProvider.services;

          if (services.isEmpty) {
            return Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(
                    Icons.home_repair_service_outlined,
                    size: 64,
                    color: AppColors.textHint,
                  ),
                  const SizedBox(height: 16),
                  const Text(
                    'No tienes servicios registrados',
                    style: TextStyle(
                      fontSize: 18,
                      color: AppColors.textSecondary,
                    ),
                  ),
                  const SizedBox(height: 8),
                  const Text(
                    'Agrega tu primer servicio para comenzar',
                    style: TextStyle(
                      fontSize: 14,
                      color: AppColors.textHint,
                    ),
                  ),
                  const SizedBox(height: 24),
                  CustomButton(
                    text: 'Agregar Servicio',
                    onPressed: _showAddServiceDialog,
                    icon: Icons.add,
                    width: 200,
                  ),
                ],
              ),
            );
          }

          return ListView.builder(
            padding: const EdgeInsets.all(16),
            itemCount: services.length,
            itemBuilder: (context, index) {
              return _buildServiceCard(services[index]);
            },
          );
        },
      ),
    );
  }

  Widget _buildServiceCard(ServiceModel service) {
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
                    service.name,
                    style: const TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                      color: AppColors.textPrimary,
                    ),
                  ),
                ),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                  decoration: BoxDecoration(
                    color: service.isActive 
                        ? AppColors.success.withOpacity(0.1)
                        : AppColors.error.withOpacity(0.1),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Text(
                    service.isActive ? 'Activo' : 'Inactivo',
                    style: TextStyle(
                      fontSize: 12,
                      fontWeight: FontWeight.w600,
                      color: service.isActive ? AppColors.success : AppColors.error,
                    ),
                  ),
                ),
                PopupMenuButton<String>(
                  onSelected: (value) => _handleMenuAction(value, service),
                  itemBuilder: (context) => [
                    const PopupMenuItem(
                      value: 'edit',
                      child: Row(
                        children: [
                          Icon(Icons.edit, size: 16),
                          SizedBox(width: 8),
                          Text('Editar'),
                        ],
                      ),
                    ),
                    PopupMenuItem(
                      value: service.isActive ? 'deactivate' : 'activate',
                      child: Row(
                        children: [
                          Icon(
                            service.isActive ? Icons.visibility_off : Icons.visibility,
                            size: 16,
                          ),
                          const SizedBox(width: 8),
                          Text(service.isActive ? 'Desactivar' : 'Activar'),
                        ],
                      ),
                    ),
                    const PopupMenuItem(
                      value: 'delete',
                      child: Row(
                        children: [
                          Icon(Icons.delete, size: 16, color: AppColors.error),
                          SizedBox(width: 8),
                          Text('Eliminar', style: TextStyle(color: AppColors.error)),
                        ],
                      ),
                    ),
                  ],
                ),
              ],
            ),
            const SizedBox(height: 12),
            
            // Descripción
            Text(
              service.description,
              style: const TextStyle(
                fontSize: 14,
                color: AppColors.textSecondary,
                height: 1.4,
              ),
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
            ),
            const SizedBox(height: 12),
            
            // Categoría y precio
            Row(
              children: [
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                  decoration: BoxDecoration(
                    color: AppColors.primary.withOpacity(0.1),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Text(
                    Helpers.getServiceCategoryName(service.category),
                    style: const TextStyle(
                      fontSize: 12,
                      color: AppColors.primary,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
                const Spacer(),
                Text(
                  '\$${service.pricePerHour.toStringAsFixed(0)}/hora',
                  style: const TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                    color: AppColors.primary,
                  ),
                ),
              ],
            ),
            const SizedBox(height: 12),
            
            // Estadísticas
            Row(
              children: [
                _buildStatItem(Icons.star, service.rating.toStringAsFixed(1)),
                const SizedBox(width: 16),
                _buildStatItem(Icons.reviews, '${service.totalRatings} reseñas'),
                const Spacer(),
                Text(
                  'Creado: ${Helpers.formatDate(service.createdAt)}',
                  style: const TextStyle(
                    fontSize: 12,
                    color: AppColors.textHint,
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildStatItem(IconData icon, String text) {
    return Row(
      children: [
        Icon(icon, size: 16, color: AppColors.textSecondary),
        const SizedBox(width: 4),
        Text(
          text,
          style: const TextStyle(
            fontSize: 12,
            color: AppColors.textSecondary,
          ),
        ),
      ],
    );
  }

  void _handleMenuAction(String action, ServiceModel service) {
    switch (action) {
      case 'edit':
        _showEditServiceDialog(service);
        break;
      case 'activate':
      case 'deactivate':
        _toggleServiceStatus(service);
        break;
      case 'delete':
        _showDeleteConfirmation(service);
        break;
    }
  }

  void _showAddServiceDialog() {
    // Implementar diálogo para agregar servicio
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Agregar Servicio'),
        content: const Text('Funcionalidad en desarrollo'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Cerrar'),
          ),
        ],
      ),
    );
  }

  void _showEditServiceDialog(ServiceModel service) {
    // Implementar diálogo para editar servicio
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Editar Servicio'),
        content: Text('Editar: ${service.name}'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Cerrar'),
          ),
        ],
      ),
    );
  }

  void _toggleServiceStatus(ServiceModel service) async {
    final serviceProvider = Provider.of<ServiceProvider>(context, listen: false);
    final updatedService = service.copyWith(
      isActive: !service.isActive,
      updatedAt: DateTime.now(),
    );
    
    bool success = await serviceProvider.updateService(updatedService);
    
    if (success && mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            service.isActive 
                ? 'Servicio desactivado' 
                : 'Servicio activado',
          ),
          backgroundColor: AppColors.success,
        ),
      );
    }
  }

  void _showDeleteConfirmation(ServiceModel service) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Eliminar Servicio'),
        content: Text('¿Estás seguro de que quieres eliminar "${service.name}"?'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Cancelar'),
          ),
          TextButton(
            onPressed: () async {
              Navigator.pop(context);
              final serviceProvider = Provider.of<ServiceProvider>(context, listen: false);
              bool success = await serviceProvider.deleteService(service.id);
              
              if (success && mounted) {
                ScaffoldMessenger.of(context).showSnackBar(
                  const SnackBar(
                    content: Text('Servicio eliminado'),
                    backgroundColor: AppColors.success,
                  ),
                );
              }
            },
            child: const Text(
              'Eliminar',
              style: TextStyle(color: AppColors.error),
            ),
          ),
        ],
      ),
    );
  }
}
