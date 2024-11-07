import { CreateProceduresInput } from "./API";
export interface InitialProcedureDataState extends CreateProceduresInput {
    isNew: boolean,
    isModified: boolean,
    isDeleted: boolean,
}

export const initialProcedureDataState: InitialProcedureDataState = { 
    procedure: '', 
    authorized: 0, 
    claimed: 0, 
    code: null, 
    difference: 0,
    isNew: false,
    isModified: false,
    isDeleted: false
};