import { useReducer } from "react";
import { GlobalContext } from "./context";
import { ProceduresState } from "../interfaces";
import { ProceduresReducer } from "./reducer";
import { Procedures } from "../API";

const INITIAL_STATE:ProceduresState = {
    procedures: [],
    showDialog: false
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GlobalProvider = ({ children }: Props) => {
    const [proceduresState, dispatch] = useReducer(ProceduresReducer, INITIAL_STATE)

    const showDialog = () => {
        dispatch({type:'toggleDialog'})
    }

    const addProcedure = (procedure:Procedures) =>{
        dispatch({type:"addProcedure", payload: procedure})
    }

    const setProcedures = (procedure:Procedures[]) =>{
        dispatch({type:"setProcedures", payload: procedure})
    }
    
    return (
        <GlobalContext.Provider value={{
            proceduresState,
            showDialog,
            addProcedure,
            setProcedures
        }}>
            {children}
        </GlobalContext.Provider>
    );
};