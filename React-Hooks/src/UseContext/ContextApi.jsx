import { createContext } from "react";

export const context = createContext();

const ContextProvider = (props) => {
    const phone = "+91 1234567901";
    const name = "Mern Stack"
    return(
        <context.Provider value={{phone,name}}>
            {props.children}
        </context.Provider>
    )
}

export default ContextProvider;