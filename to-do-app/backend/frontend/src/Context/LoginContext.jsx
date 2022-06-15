import React, { createContext, useState } from "react";

const LoginContext = createContext({
	user_id: "",
	isLoggedIn: false,
});

export const LoginContextProvider = ({ children }) => {
	const [login, setIsLoggedIn] = useState(false);
	const [userId, setUserID] = useState("628240e5319d87467b67f71c");

	return (
		<LoginContext.Provider value={{ user_id: userId, isLoggedIn: login }}>
			{children}
		</LoginContext.Provider>
	);
};

export default LoginContext;
