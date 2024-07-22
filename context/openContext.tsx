import {  createContext, ReactNode, useState } from "react";

export interface OpenContextInterface  {
    open : boolean,
    setOpen:(open:boolean)=>void
}

export const OpenContext = createContext<OpenContextInterface | undefined>(undefined);


export const OpenProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <OpenContext.Provider value={{ open, setOpen }}>
            {children}
        </OpenContext.Provider>
    );
}
