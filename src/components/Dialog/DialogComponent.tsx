import { InputText } from '../../InputText/InputText.styled'
import { ListItemWrapper, ListTitle, Wrapper } from '../List/List.styled'
import { SubTitleICon, TrashICon } from '../NoProcedures/NoProcedures.styled'
import { OverlayDialog, DialogTitleWrapper, AddNewProcedureButton, DialogBody, StyledDivWrapper, StyledDiv, DialogStyledComponent, DialogTitle } from './Dialog.styled'
import { Button } from '../Button/ButtonComponent.styled'
import { colors } from '../../constants/colors'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/context'

import './FormTable.css';
import { initialProcedureDataState } from '../../consts';
import { CreateProceduresInput } from '../../API';
import { generateClient } from 'aws-amplify/api'
import { createProcedures } from '../../graphql/mutations'

const client = generateClient();

export const DialogComponent = () => {

    const [newProcedures, setNewProcedures] = useState<CreateProceduresInput[]>([]);

    const {showDialog} = useContext(GlobalContext); 

    const addNewProcedure = () => {
        setNewProcedures([...newProcedures, initialProcedureDataState])
    }

    const removeProcedure = (index:number) => {
        // const procs = newProcedures.
    }

    useEffect(() => {
        setNewProcedures([...newProcedures])
    }, [])

    const handleChange = (index: number, field: string, value: string) => {
        const updatedProcedures = [...newProcedures];
        updatedProcedures[index] = { 
            ...updatedProcedures[index], 
            [field]: value 
        };
        setNewProcedures(updatedProcedures);
    }
    
    async function saveTodo(e:any) {
        try {
            e.preventDefault();
            console.log(newProcedures);
    
            const validProcedures = newProcedures.filter(procedure => procedure.authorized && procedure.code);
    
            if (validProcedures.length === 0) {
                console.log('No valid procedures to save');
                return;
            }
    
            const promises = validProcedures.map(procedure =>
                client.graphql({
                    query: createProcedures,
                    variables: {
                        input: procedure,
                    },
                })
            );
    
            await Promise.all(promises);
    
            console.log('Procedures saved successfully');
        } catch (err) {
            console.log('Error saving procedures:', err);
        }
    }
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
                    <form onSubmit={saveTodo}>
                        <div className="table">
                            {
                                newProcedures.map((item, index) =>(
                                    <div key={index} className="table-field">
                                        <div className="table-cell">
                                            <div className="table-icon">
                                                <TrashICon onClick={()=>removeProcedure(index)} src="./imgs/trash.svg" />
                                            </div>
                                            <label className="table-cell-label">Procedimiento 01</label>
                                            <InputText 
                                                style={{marginTop: '8px'}}
                                                placeholder="Ej: 4563523"
                                                value={item.procedure || ''}
                                                onChange={(e) => handleChange(index, 'procedure', e.target.value)}
                                            />
                                        </div>
                                        <div className="table-cell">
                                            <label className="table-cell-label">Código</label>
                                            <InputText 
                                                placeholder="Ej: 4563523" 
                                                value={item.code || ''}
                                                onChange={(e) => handleChange(index, 'code', e.target.value)}
                                            />
                                        </div>
                                        <div className="table-cell">
                                            <label className="table-cell-label">Reclamado RD$</label>
                                            <InputText 
                                                placeholder="Ej: 4563523" 
                                                value={item.claimed || ''}
                                                onChange={(e) => handleChange(index, 'claimed', e.target.value)}
                                            />
                                        </div>
                                        <div className="table-cell">
                                            <label className="table-cell-label">Diferencia RD$</label>
                                            <InputText 
                                                placeholder="Ej: 4563523" 
                                                value={item.difference || ''}
                                                onChange={(e) => handleChange(index, 'difference', e.target.value)}
                                            />
                                        </div>
                                        <div className="table-cell">
                                            <label className="table-cell-label">Autorizado RD$</label>
                                            <InputText 
                                                placeholder="Ej: 4563523" 
                                                value={item.authorized || ''}
                                                onChange={(e) => handleChange(index, 'authorized', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        {
                            newProcedures.length !== 0 &&
                            <Wrapper style={{display:'flex', width:'100%', gap: '12px', justifyContent: 'flex-end'}}>
                                <Button 
                                    onClick={()=>showDialog()}
                                    style={{background:colors.white, color: colors.gray, border: '2px solid #D6D6EB'}}>Cancelar</Button>
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
 