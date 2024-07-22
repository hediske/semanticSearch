import { OpenContext } from "@/context/openContext";
import { useContext } from "react";

const useOpen = () => {
        const context = useContext(OpenContext);
        if(!context) throw new Error("Error ! Please use the OpenProvider to wrap the page")
        return context

    }
export default useOpen
