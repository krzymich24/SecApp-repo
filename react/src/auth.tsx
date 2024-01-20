import { useContext } from "react";
import { AuthContext } from "../context.tsx";
import { UserProfile } from "../types/user";


export const useAuth = () => {
  const [auth, setAuth] = useContext(AuthContext);

  const authorizeFromSession = () => {
    const s_id = sessionStorage.getItem("userId");
    const s_capabilities = sessionStorage.getItem("userCapabilities");

    if (s_id && s_capabilities) {
      const id = parseInt(s_id);
      const capabilities = s_capabilities
        .split(",")
        .map((cap) => parseInt(cap));

      const user: UserProfile = { id, capabilities };
      setAuth(user);
    }
  };

  const authorize = (user: UserProfile) => {
    setAuth(user);
    const str_uid = `${user.id}`;
    const str_capabilities = user.capabilities.map((cap) => `${cap}`).join(",");

    sessionStorage.setItem("userId", str_uid);
    sessionStorage.setItem("userCapabilities", str_capabilities);
  };

  const unauthorize = () => {
    setAuth(null);

    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userCapabilities");
  };

  return { auth, authorize, unauthorize, authorizeFromSession };
};
