import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

export const auth = firebase
	.initializeApp({
		apiKey: 'AIzaSyDRqrFqY1o9N-v63C6yW42NQmoRgcyRxXM',
		authDomain: 'project-hector-6eaf1.firebaseapp.com',
		projectId: 'project-hector-6eaf1',
		storageBucket: 'project-hector-6eaf1.appspot.com',
		messagingSenderId: '647720117738',
		appId: '1:647720117738:web:0f3feba82c3e8dba687e93',
		measurementId: 'G-1WEND8S3QK',
	})
	.auth();
