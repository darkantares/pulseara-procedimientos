import { Procedures } from "../API";
import { ProceduresState } from "../interfaces";

type  ProceduresAction = { type: 'addProcedure', payload: Procedures} |
                         { type: 'setProcedures', payload: Procedures[]} |
                         { type: 'toggleDialog'}

export  const ProceduresReducer = (state:ProceduresState, action:ProceduresAction) =>{
    switch (action.type) {
        case "addProcedure":
            return {
                ...state,
                procedures: [...state.procedures, action.payload]
            }

        case "setProcedures":
            return {
                ...state,
                procedures: [...action.payload]
            }

        case "toggleDialog":
            return {
                ...state,
                showDialog: !state.showDialog
            }    

        default:
            return state;
}
}