import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:firebase_messaging/firebase_messaging.dart';

class FirebaseService {
  static FirebaseAuth get auth => FirebaseAuth.instance;
  static FirebaseFirestore get firestore => FirebaseFirestore.instance;
  static FirebaseStorage get storage => FirebaseStorage.instance;
  static FirebaseMessaging get messaging => FirebaseMessaging.instance;

  static Future<void> initialize() async {
    await Firebase.initializeApp();
    await _initializeMessaging();
  }

  static Future<void> _initializeMessaging() async {
    // Solicitar permisos para notificaciones
    NotificationSettings settings = await messaging.requestPermission(
      alert: true,
      announcement: false,
      badge: true,
      carPlay: false,
      criticalAlert: false,
      provisional: false,
      sound: true,
    );

    if (settings.authorizationStatus == AuthorizationStatus.authorized) {
      print('Usuario autorizó las notificaciones');
    } else if (settings.authorizationStatus == AuthorizationStatus.provisional) {
      print('Usuario autorizó las notificaciones provisionales');
    } else {
      print('Usuario denegó las notificaciones');
    }

    // Obtener token FCM
    String? token = await messaging.getToken();
    print('FCM Token: $token');

    // Configurar manejo de mensajes en primer plano
    FirebaseMessaging.onMessage.listen((RemoteMessage message) {
      print('Mensaje recibido en primer plano: ${message.notification?.title}');
    });
  }

  // Colecciones de Firestore
  static CollectionReference get usersCollection => 
      firestore.collection('users');
  
  static CollectionReference get servicesCollection => 
      firestore.collection('services');
  
  static CollectionReference get bookingsCollection => 
      firestore.collection('bookings');
  
  static CollectionReference get reviewsCollection => 
      firestore.collection('reviews');
  
  static CollectionReference get chatsCollection => 
      firestore.collection('chats');
}
