import { BookContext } from "@/context/bookContext";
import { useContext } from "react";

const useBook = () => {
        const context = useContext(BookContext);
        if(!context) throw new Error("Error ! Please use the BookProvider to wrap the page")
        return context

    }
export default useBook
