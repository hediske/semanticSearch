import { Book } from "@/utils/types";
import { useReducer, createContext, ReactNode, useState } from "react";

export interface BookContextInterface  {
    book : Book,
    setBook:(book:Book)=>void
}

export const BookContext = createContext<BookContextInterface | undefined>(undefined);


export const BookProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [book, setBook] = useState<Book>({} as Book);
    return (
        <BookContext.Provider value={{ book, setBook }}>
            {children}
        </BookContext.Provider>
    );
}
