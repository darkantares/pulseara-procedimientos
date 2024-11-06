import { DialogTitle } from '@mui/material'
import { InputText } from '../../InputText/InputText.styled'
import { ListItemWrapper, ListTitle, Wrapper } from '../List/List.styled'
import { SubTitleICon, TrashICon } from '../NoProcedures/NoProcedures.styled'
import { DialogWrapperComponent, DialogTitleWrapper, DialogSubTitle, DialogBody, StyledDivWrapper, StyledDiv, DialogStyledComponent } from './Dialog.styled'
import { Button } from '../Button/ButtonComponent.styled'
import { colors } from '../../constants/colors'

export const DialogComponent = () => {
  return (
    <DialogWrapperComponent>
        <DialogStyledComponent>
            <DialogTitleWrapper>
                <DialogTitle>Procedimientos</DialogTitle>  
                <DialogSubTitle>
                    <SubTitleICon src="./imgs/plus.svg" />
                    Añadir procedimiento
                </DialogSubTitle>
            </DialogTitleWrapper>

            <DialogBody>              
                <ListItemWrapper>
                    <StyledDivWrapper>
                    <TrashICon src="./imgs/trash.svg" />
                    <StyledDiv>
                        <ListTitle style={{marginBottom:'8px'}}>Procedimiento 01</ListTitle>            
                        <InputText placeholder="Ej: 4563523" />
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
                    <Button style={{background:colors.white, color: colors.gray, border: '2px solid #D6D6EB'}}>Cancelar</Button>
                    <Button>Guardar cambios</Button>
                </Wrapper>
            </DialogBody>

        </DialogStyledComponent>
      </DialogWrapperComponent>
  )
}
