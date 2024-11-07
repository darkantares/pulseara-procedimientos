import { createContext } from "react";
import { ProceduresState } from "../interfaces";
import { Procedures } from "../API";

export type ProceduresContextProps = {
    proceduresState:ProceduresState;
    showDialog: () => void;
    addProcedure: (procedure: Procedures) => void;
    setProcedures: (procedure: Procedures[]) => void;
}

export const GlobalContext = createContext<ProceduresContextProps>({} as ProceduresContextProps);
