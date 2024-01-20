import { useContext } from 'react';
import { decodeToken } from 'react-jwt';
import { AuthContext } from './context';
import { UserProfile } from './types/user';

export const useAuth = () => {
  const TOKEN_MAGIC_STRING = 'token';
  const [auth, setAuth] = useContext(AuthContext);

  const authorizeFromSession = () => {
    // const s_id = sessionStorage.getItem('userId');
    // const s_capabilities = sessionStorage.getItem('userCapabilities');
    // if (s_id && s_capabilities) {
    //   const id = parseInt(s_id);
    //   const capabilities = s_capabilities.split(',').map((cap) => parseInt(cap));
    //
    //   const user: UserProfile = { id, capabilities };
    //   setAuth(user);
    // }
  };

  const saveAuth = (userToken: string) => {
    const user: UserProfile | null | undefined = decodeToken(userToken);
    if (!user) return;
    console.warn(user);
    // save in memo
    setAuth(user);
    // save in session store
    sessionStorage.setItem(TOKEN_MAGIC_STRING, userToken);
  };

  const unauthorize = () => {
    setAuth(null);
    sessionStorage.removeItem(TOKEN_MAGIC_STRING);
  };

  return { auth, saveAuth, unauthorize, authorizeFromSession };
};
