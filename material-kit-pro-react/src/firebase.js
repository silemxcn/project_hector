import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

createUserWithEmailAndPassword(auth, email, password);

const app = initializeApp(firebaseConfig);

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

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();

	function signup(email, password) {
		return auth.createUserWithEmailAndPassword(email, password);
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
		});

		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		signup,
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
