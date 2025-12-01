import { createContext, useState, type ReactNode } from "react";

type ContextType = {
    name: string;
    setName: (n:string) => void;
    email: string;
    setEmail: (e:string) => void;
    senha: string;
    setSenha: (s:string) => void;
}

export const UsuarioLogadoContext = createContext <ContextType | null>(null);

export const UsuarioLogadoProvider = ({children}: {children: ReactNode}) => {

    const[name, setName] = useState ('');
    const[email,setEmail] = useState ('');
    const[senha, setSenha] = useState ('');
    return (
        <UsuarioLogadoContext.Provider value={{name, setName,email, setEmail, senha, setSenha}}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}