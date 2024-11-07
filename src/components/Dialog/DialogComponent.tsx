import { InputText } from '../../InputText/InputText.styled'
import { ListItemWrapper, ListTitle, Wrapper } from '../List/List.styled'
import { SubTitleICon, TrashICon } from '../NoProcedures/NoProcedures.styled'
import { OverlayDialog, DialogTitleWrapper, AddNewProcedureButton, DialogBody, StyledDivWrapper, StyledDiv, DialogStyledComponent, DialogTitle } from './Dialog.styled'
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

    const {showDialog, proceduresState} = useContext(GlobalContext); 
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
            console.log(newItems);
            
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
    
            // console.log(createPromises);
            // console.log(updatePromises);
            // console.log(deletePromises);
            const result = await Promise.all([...createPromises, ...updatePromises, ...deletePromises]);
            console.log(result);
            
            console.log('Changes saved successfully');
        } catch (err) {
            console.log('Error saving procedures:', err);
        }
    };
    

    return (
        <OverlayDialog>
            <DialogStyledComponent>
                <DialogTitleWrapper>
                    <DialogTitle>Procedimientos</DialogTitle>  
                    <AddNewProcedureButton onClick={addNewProcedure}>
                        <SubTitleICon src="./imgs/plus.svg" />
                        Añadir procedimiento
                    </AddNewProcedureButton>
                </DialogTitleWrapper>
                <div className="form-table-container">
                    <form onSubmit={proceduresToSave}>
                        <div className="table">
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
                        </div>
                        {
                            newProcedures.length !== 0 &&
                            <Wrapper style={{marginTop: '8px', display:'flex', width:'100%', gap: '12px', justifyContent: 'flex-end'}}>
                                <Button 
                                    onClick={()=>showDialog()}
                                    style={{background:colors.white, color: colors.gray, border: '2px solid #D6D6EB'}}>
                                    Cancelar
                                </Button>
                                <Button>Guardar cambios</Button>
                            </Wrapper>
                        }
                    </form>
                </div>
                {/* <DialogBody>              
                    <ListItemWrapper>
                        <StyledDivWrapper>
                            <TrashICon src="./imgs/trash.svg" />
                            <StyledDiv>
                                <ListTitle style={{marginBottom:'8px'}}>Procedimiento 01</ListTitle>            
                                
                            </StyledDiv>

                            <StyledDiv>
                                <ListTitle style={{marginBottom:'8px'}}>Código</ListTitle>            
                                <InputText placeholder="Ej: 4563523" />
                            </StyledDiv>

                            <StyledDiv>
                                <ListTitle style={{marginBottom:'8px'}}>Reclamado RD$</ListTitle>            
                                <InputText placeholder="Ej: 4563523" />
                            </StyledDiv>

                            <StyledDiv>
                                <ListTitle style={{marginBottom:'8px'}}>Diferencia RD$</ListTitle>            
                                <InputText placeholder="Ej: 4563523" />
                            </StyledDiv>

                            <StyledDiv>
                                <ListTitle style={{marginBottom:'8px'}}>Autorizado RD$</ListTitle>            
                                <InputText placeholder="Ej: 4563523" />
                            </StyledDiv>
                        </StyledDivWrapper>
                    </ListItemWrapper>
                    <Wrapper style={{display:'flex', width:'100%', gap: '12px', justifyContent: 'flex-end'}}>
                        <Button 
                            onClick={()=>showDialog()}
                            style={{background:colors.white, color: colors.gray, border: '2px solid #D6D6EB'}}>Cancelar</Button>
                        <Button>Guardar cambios</Button>
                    </Wrapper>
                </DialogBody> */}

            </DialogStyledComponent>
        </OverlayDialog>
    )
}
 