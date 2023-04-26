import React, { createContext } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';

const AuthContext = createContext();
const auth = getAuth();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		console.log('user', user);
		// if (user) {

		// }
	}, [user]);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			setUser(user);
		});
	}, []);
	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
};

export default AuthContext;
