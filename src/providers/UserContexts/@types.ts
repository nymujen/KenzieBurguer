export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface ILoginValues {
  email: string;
  password: string;
}

export interface IRegisterValues {
  email: string;
  password: string;
  name: string;
  confirmPass: string
}

export interface IUserContext {
  user: IUser | null;
  loginRequest: (formData: ILoginValues) => Promise<void>;
  registerRequest: (formData: IRegisterValues) => Promise<void>;
  logOut: () => void;
}

export interface ICartProducts {
  id: number;
  name: string;
  img: string;
}

export interface IProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
