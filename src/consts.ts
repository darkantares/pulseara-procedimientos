import { CreateProceduresInput } from "./API";
export interface InitialProcedureDataState extends CreateProceduresInput {
    isNew: boolean,
    isModified: boolean,
    isDeleted: boolean,
}

export const initialProcedureDataState: InitialProcedureDataState = { 
    procedure: 'sdfsdf', 
    authorized: 3434, 
    claimed: 3434, 
    code: '2323', 
    difference: 3434,
    isNew: false,
    isModified: false,
    isDeleted: false
};