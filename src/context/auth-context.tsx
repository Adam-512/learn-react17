import React, { ReactNode, useContext, useState } from "react";
import { api_login, LoginParam } from "../http";

type User = {
    name: string,
    token: string
}

//provider注册的功能或者全局变量
type ContextValue = {
    user: User | null,
    login: (params: LoginParam) => void
}

const AuthContext = React.createContext<ContextValue | undefined>(undefined);

//定义user,登录，注册，退出
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const login = async (params: LoginParam) => {
        let { token } = await api_login(params)
        localStorage.setItem('token', token)
    }
    return <AuthContext.Provider children={children} value={{ user, login }} />
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('需在auth provider中使用')
    }
    return context;
}