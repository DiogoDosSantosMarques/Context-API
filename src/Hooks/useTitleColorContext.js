import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

export const useTitleColorContext = () => {

    const context = useContext(TitleColorContext)

    if(!context) { // Se não tiver contexto
        console.log("Tem nada aqui")
    }
    
    return context

}