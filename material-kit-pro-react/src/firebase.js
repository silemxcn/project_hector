// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// import {
// 	getAuth,
// 	createUserWithEmailAndPassword,
// 	signInWithEmailAndPassword,
// 	signOut,
// } from 'firebase/auth';
// import { getFirestore, addDoc, collection } from 'firebase/firestore';
// const db = getFirestore();
// const auth = getAuth();

// const firebaseConfig = {
// 	apiKey: 'AIzaSyDRqrFqY1o9N-v63C6yW42NQmoRgcyRxXM',
// 	authDomain: 'project-hector-6eaf1.firebaseapp.com',
// 	projectId: 'project-hector-6eaf1',
// 	storageBucket: 'project-hector-6eaf1.appspot.com',
// 	messagingSenderId: '647720117738',
// 	appId: '1:647720117738:web:0f3feba82c3e8dba687e93',
// 	measurementId: 'G-1WEND8S3QK',
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const signUp = async (email, password) => {
// 	try {
// 		const userCredential = await createUserWithEmailAndPassword(
// 			auth,
// 			email,
// 			password
// 		);
// 		const user = userCredential.user;
// 		await addDoc(collection(db, 'users'), {
// 			uid: user.uid,
// 			email: user.email,
// 		});
// 		return true;
// 	} catch (error) {
// 		return { error: error.message };
// 	}
// };

// const signIn = async (email, password) => {
// 	try {
// 		const userCredential = await signInWithEmailAndPassword(
// 			auth,
// 			email,
// 			password
// 		);
// 		const user = userCredential.user;
// 		return true;
// 	} catch (error) {
// 		return { error: error.message };
// 	}
// };

// const signOut = async () => {
// 	try {
// 		await signOut(auth);
// 		return true;
// 	} catch (error) {
// 		return false;
// 	}
// };
