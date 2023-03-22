import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IDefaultProviderProps,
  ILoginValues,
  IRegisterValues,
  IUser,
  IUserContext,
} from "./@types";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const UserContexts = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  const loginRequest = async (formData: ILoginValues) => {
    try {
      const response = await api.post(`/login`, formData);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      navigate("/shop");
      toast.success("Login efetuado");
    } catch (error) {
      toast.error("Não foi possível fazer o login");
    }
  };

  const registerRequest = async (formData: IRegisterValues) => {
    try {
      await api.post(`/users`, formData);
      navigate("/");
      toast.success("Conta criada com sucesso");
    } catch (error) {
      toast.error("Não foi possível criar a conta");
    }
  };

  const logOut = () => {
    setUser(null);
    navigate("/");
    localStorage.removeItem("@TOKEN");
    toast("Usuário deslogado");
  };

  return (
    <UserContexts.Provider
      value={{ user, loginRequest, registerRequest, logOut }}
    >
      {children}
    </UserContexts.Provider>
  );
};
