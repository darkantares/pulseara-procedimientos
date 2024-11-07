import { InputText } from '../../InputText/InputText.styled'
import { Wrapper } from '../List/List.styled'
import { Image, SubTitleICon, TrashICon } from '../NoProcedures/NoProcedures.styled'
import { OverlayDialog, DialogTitleWrapper, AddNewProcedureButton, DialogBody, DialogStyledComponent, DialogTitle, CloseButton, DialogTable } from './Dialog.styled'
import { Button } from '../Button/ButtonComponent.styled'
import { colors } from '../../constants/colors'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/context'

import './FormTable.css';
import { InitialProcedureDataState, initialProcedureDataState } from '../../consts';
import { CreateProceduresInput, DeleteProceduresInput, UpdateProceduresInput } from '../../API';
import { generateClient } from 'aws-amplify/api'
import { createProcedures, deleteProcedures, updateProcedures } from '../../graphql/mutations'

const client = generateClient();

export const DialogComponent = () => {

    const [newProcedures, setNewProcedures] = useState<InitialProcedureDataState[]>([]);

    const {showDialog, proceduresState, setProcedures} = useContext(GlobalContext); 
    const {procedures} = proceduresState;
       
    useEffect(() => {
        const fetchInitialData = async () => {  
            const newProcedures:InitialProcedureDataState[] = procedures.map(procedure =>({...procedure, isNew: false, isModified: false, isDeleted: false }));                         
            setNewProcedures(newProcedures);
        };

        fetchInitialData();
    }, []);
    
    const addNewProcedure = () => {
        setNewProcedures([
            ...newProcedures, 
            { ...initialProcedureDataState, isNew: true }
        ]);
    };

    const handleChange = (index: number, field: string, value: string) => {
        const updatedProcedures = [...newProcedures];
        updatedProcedures[index] = {
            ...updatedProcedures[index],
            [field]: value,
            isModified: !updatedProcedures[index].isNew,
        };
        setNewProcedures(updatedProcedures);
    };

    const removeProcedure = (index: number) => {
        const updatedProcedures = [...newProcedures];
        updatedProcedures[index].isDeleted = true;
        setNewProcedures(updatedProcedures);
    };
    
    // const cancel = () => {
    //     showDialog()
    // }

    const proceduresToSave = async (e:any) => {
        e.preventDefault()
        const newItems: CreateProceduresInput[] = newProcedures.filter(
            item => item.isNew && !item.isDeleted
        ).map(item => ({
            // id: item.id || null,
            authorized: item.authorized,
            claimed: item.claimed,
            code: item.code,
            difference: item.difference,
            procedure: item.procedure
        }));
           
        const modifiedItems: UpdateProceduresInput[] = newProcedures.filter(
            item => item.isModified && !item.isDeleted && item.id
        ).map(item => ({
            id: item.id as string,
            authorized: item.authorized,
            claimed: item.claimed,
            code: item.code,
            difference: item.difference,
            procedure: item.procedure
        }));
           
        const deletedItems: DeleteProceduresInput[] = newProcedures.filter(
            item => item.isDeleted && item.id
        ).map(item => ({
            id: item.id as string,
        }));

        try {            
            const createPromises = newItems.map(procedure =>
                client.graphql({
                    query: createProcedures,
                    variables: { input: procedure },
                })
            );
    
            const updatePromises = modifiedItems.map(procedure =>
                client.graphql({
                    query: updateProcedures,
                    variables: { input: procedure },
                })
            );
    
            const deletePromises = deletedItems.map(procedure =>
                client.graphql({
                    query: deleteProcedures,
                    variables: { input: { id: procedure.id } },
                })
            );
            
            const [createResults, updateResults, deleteResults] = await Promise.all([
                Promise.allSettled(createPromises),
                Promise.allSettled(updatePromises),
                Promise.allSettled(deletePromises)
            ]);
        
            const successfulCreates = createResults.filter(result => result.status === 'fulfilled')
                                                   .map(res => ((res as PromiseFulfilledResult<any>).value.data.createProcedures));

            const successfulUpdates = updateResults.filter(result => result.status === 'fulfilled')
                                                   .map(res => ((res as PromiseFulfilledResult<any>).value.data.updateProcedures));

            const successfulDeletes = deleteResults.filter(result => result.status === 'fulfilled')
                                                   .map(res => ((res as PromiseFulfilledResult<any>).value.data.deleteProcedures));

            let updatedProcedures = [...procedures, ...successfulCreates];

            updatedProcedures = updatedProcedures.map(proc =>
                successfulUpdates.find(updatedProc => updatedProc.id === proc.id) || proc
            );

            updatedProcedures = updatedProcedures.filter(
                proc => !successfulDeletes.some(deletedProc => deletedProc.id === proc.id)
            );

            setProcedures(updatedProcedures);
        } catch (err) {
            console.log('Error saving procedures:', err);
        }
    };
    

    return (
        <OverlayDialog>
            <DialogStyledComponent>
                <DialogTitleWrapper>
                    <CloseButton onClick={()=>showDialog()}>
                        <img src="./imgs/close.svg" alt='' />
                    </CloseButton>
                    <DialogTitle>Procedimientos</DialogTitle>  
                    <AddNewProcedureButton onClick={addNewProcedure}>
                        <SubTitleICon src="./imgs/plus.svg" />
                        Añadir procedimiento
                    </AddNewProcedureButton>
                </DialogTitleWrapper>
                <DialogBody>
                    <form onSubmit={proceduresToSave}>
                        <DialogTable>
                            {
                                newProcedures.map((procedure, index) =>(
                                    !procedure.isDeleted && (
                                        <div key={index} className="table-field">
                                            <div className="table-cell">
                                                <div className="table-icon">
                                                    <TrashICon onClick={()=>removeProcedure(index)} src="./imgs/trash.svg" />
                                                </div>
                                                <label className="table-cell-label">Procedimiento 01</label>
                                                <InputText 
                                                    style={{marginTop: '8px'}}
                                                    placeholder="Ej: 4563523"
                                                    value={procedure.procedure || ''}
                                                    onChange={(e) => handleChange(index, 'procedure', e.target.value)}
                                                />
                                            </div>
                                            <div className="table-cell">
                                                <label className="table-cell-label">Código</label>
                                                <InputText
                                                    style={{marginTop: '8px'}} 
                                                    placeholder="Ej: 4563523" 
                                                    value={procedure.code || ''}
                                                    onChange={(e) => handleChange(index, 'code', e.target.value)}
                                                />
                                            </div>
                                            <div className="table-cell">
                                                <label className="table-cell-label">Reclamado RD$</label>
                                                <InputText
                                                    style={{marginTop: '8px'}} 
                                                    placeholder="Ej: 4563523" 
                                                    value={procedure.claimed || ''}
                                                    onChange={(e) => handleChange(index, 'claimed', e.target.value)}
                                                />
                                            </div>
                                            <div className="table-cell">
                                                <label className="table-cell-label">Diferencia RD$</label>
                                                <InputText
                                                    style={{marginTop: '8px'}} 
                                                    placeholder="Ej: 4563523" 
                                                    value={procedure.difference || ''}
                                                    onChange={(e) => handleChange(index, 'difference', e.target.value)}
                                                />
                                            </div>
                                            <div className="table-cell">
                                                <label className="table-cell-label">Autorizado RD$</label>
                                                <InputText
                                                    style={{marginTop: '8px'}} 
                                                    placeholder="Ej: 4563523" 
                                                    value={procedure.authorized || ''}
                                                    onChange={(e) => handleChange(index, 'authorized', e.target.value)}
                                                />
                                            </div>
                                        </div>

                                    )
                                ))
                            }
                        </DialogTable>
                        {
                            newProcedures.length !== 0 &&
                            <Wrapper style={{marginTop: '8px', display:'flex', width:'100%', gap: '12px', justifyContent: 'flex-end'}}>
                                <Button 
                                    onClick={()=>showDialog()}
                                    style={{background:colors.white, color: colors.gray, border: '2px solid #D6D6EB'}}>
                                    Cancelar
                                </Button>
                                <Button>
                                    <img src='./imgs/check.svg'></img>
                                    Guardar cambios
                                </Button>
                            </Wrapper>
                        }
                    </form>
                </DialogBody>                
            </DialogStyledComponent>
        </OverlayDialog>
    )
}
 