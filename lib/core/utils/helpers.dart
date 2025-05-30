import 'package:intl/intl.dart';

class Helpers {
  static String formatCurrency(double amount) {
    final formatter = NumberFormat.currency(
      locale: 'es_EC',
      symbol: '\$',
      decimalDigits: 2,
    );
    return formatter.format(amount);
  }

  static String formatDate(DateTime date) {
    final formatter = DateFormat('dd/MM/yyyy', 'es_ES');
    return formatter.format(date);
  }

  static String formatTime(DateTime time) {
    final formatter = DateFormat('HH:mm', 'es_ES');
    return formatter.format(time);
  }

  static String formatDateTime(DateTime dateTime) {
    final formatter = DateFormat('dd/MM/yyyy HH:mm', 'es_ES');
    return formatter.format(dateTime);
  }

  static String getTimeAgo(DateTime dateTime) {
    final now = DateTime.now();
    final difference = now.difference(dateTime);

    if (difference.inDays > 0) {
      return 'hace ${difference.inDays} día${difference.inDays > 1 ? 's' : ''}';
    } else if (difference.inHours > 0) {
      return 'hace ${difference.inHours} hora${difference.inHours > 1 ? 's' : ''}';
    } else if (difference.inMinutes > 0) {
      return 'hace ${difference.inMinutes} minuto${difference.inMinutes > 1 ? 's' : ''}';
    } else {
      return 'hace un momento';
    }
  }

  static String capitalizeFirst(String text) {
    if (text.isEmpty) return text;
    return text[0].toUpperCase() + text.substring(1).toLowerCase();
  }

  static String getServiceCategoryName(ServiceCategory category) {
    switch (category) {
      case ServiceCategory.cleaning:
        return 'Limpieza';
      case ServiceCategory.plumbing:
        return 'Plomería';
      case ServiceCategory.carpentry:
        return 'Carpintería';
      case ServiceCategory.electricity:
        return 'Electricidad';
      case ServiceCategory.gardening:
        return 'Jardinería';
      case ServiceCategory.housework:
        return 'Menaje';
      case ServiceCategory.wasteDisposal:
        return 'Desechos';
      case ServiceCategory.other:
        return 'Otros';
    }
  }

  static String getBookingStatusName(BookingStatus status) {
    switch (status) {
      case BookingStatus.pending:
        return 'Pendiente';
      case BookingStatus.confirmed:
        return 'Confirmado';
      case BookingStatus.inProgress:
        return 'En Progreso';
      case BookingStatus.completed:
        return 'Completado';
      case BookingStatus.cancelled:
        return 'Cancelado';
    }
  }
}

// Enums necesarios
enum ServiceCategory {
  cleaning,
  plumbing,
  carpentry,
  electricity,
  gardening,
  housework,
  wasteDisposal,
  other
}

enum BookingStatus {
  pending,
  confirmed,
  inProgress,
  completed,
  cancelled
}
