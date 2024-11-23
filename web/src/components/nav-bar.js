import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const NavBar = () => {
    const { isAuthenticated } = useAuth0();
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();

    const handleLogout = () => {
        logout({
        logoutParams: {
            returnTo: window.location.origin,
        },
        });
    };

    const handleLogin = async () => {
        await loginWithRedirect({
        appState: {
            returnTo: "/profile",
        },
        });
    };
    const handleSignUp = async () => {
        await loginWithRedirect({
          appState: {
            returnTo: "/profile",
          },
          authorizationParams: {
            screen_hint: "signup",
          },
        });
      };
    return (
        <div className="navbar">
            {isAuthenticated && ( 
                <>
                    <button className="authButtons logout" onClick={handleLogout}>Log Out</button>
                </>
            )}
            {!isAuthenticated && ( 
                <>
                    <button className="authButtons sign in" onClick={handleLogin}>Sign In</button>
                    <button className="authButtons sign up" onClick={handleSignUp}>Sign Up</button>
                </>
            )}
        </div>
    );
};