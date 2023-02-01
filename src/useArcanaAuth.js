import { AuthProvider } from "@arcana/auth";
import { useEffect, useState } from "react";

//Config
const appAdd = "ABe93EFD6F66676fc6e863e4c32965e66b84c50B";

let auth = new AuthProvider(appAdd);

function useArcanaAuth() {
  const [initialized, setInitialized] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const initializeAuth = async () => {
    await auth.init({ position: "right" });
    setInitialized(true);
  };

  //Social Login

  const login = async (socialType) => {
    if (initialized) {
      await auth.loginWithSocial(socialType);
      setLoggedIn(true);
    }
  };

  //Email Link/ Passwordless login
  const loginWithLink = async (email) => {
    if (initialized) {
      await auth.loginWithLink(email);
      setLoggedIn(true);
    }
  };

  const isLoggedIn = async () => {
    if (initialized) {
      return await auth.isLoggedIn();
    }
  };

  //Getting user Accounts
  const getAccounts = async () => {
    if (initialized) {
      //   console.log("bishnutest", initialized);
      console.log(
        auth.provider.request({ method: "eth_accounts" }),
        "bishnutestlater"
      );
      return await auth.provider.request({ method: "eth_accounts" });
    }
  };

  //Logout
  const logout = async () => {
    if (initialized && loggedIn) {
      await auth.logout();
      setLoggedIn(false);
    }
  };

  useEffect(() => {
    const checkLogin = async () => {
      await auth.init();
      if (await auth.isLoggedIn()) {
        setLoggedIn(true);
      }
    };
    checkLogin();
  }, []);

  return {
    initializeAuth,
    loggedIn,
    login,
    loginWithLink,
    getAccounts,
    logout,
    initialized,
    isLoggedIn,
  };
}

export default useArcanaAuth;
