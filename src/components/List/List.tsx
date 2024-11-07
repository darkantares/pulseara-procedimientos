

import { useContext } from "react";
import { GlobalContext } from "../../context/context";
import { Button, IconButton } from "../Button/ButtonComponent.styled";
import { List, ListItemWrapper, ListTitle, ListWrapper, Wrapper } from "./List.styled";
import { Procedures } from "../../API";

export const ListComponent = ({procedures}:{procedures:Procedures[]}) => {

    const {showDialog} = useContext(GlobalContext);
    
    return (
        <ListWrapper> 
            {
                procedures.map(procedure =>(
                    <List key={procedure.id}>
                        <ListItemWrapper>
                            <ListTitle>Procedimiento 01</ListTitle>
                            <span>{procedure.procedure}</span>
                        </ListItemWrapper>
                        <ListItemWrapper>
                            <ListTitle>Código</ListTitle>
                            <span>{procedure.code}</span>
                        </ListItemWrapper>
                        <ListItemWrapper>
                            <ListTitle>Reclamado RD$</ListTitle>
                            <span>RD$ {procedure.claimed}</span>
                        </ListItemWrapper>
                        <ListItemWrapper>
                            <ListTitle>Diferencia RD$</ListTitle>
                            <span>RD$ {procedure.difference}</span>
                        </ListItemWrapper>
                        <ListItemWrapper>
                            <ListTitle>Autorizado RD$</ListTitle>
                            <span>RD$ {procedure.authorized}</span>
                        </ListItemWrapper>
                    </List>        
                ))
            }
            
            <Wrapper>           
                <Button onClick={()=>showDialog()}>     
                    <IconButton src="./imgs/pencil.svg" />
                    Editar procedimientos
                </Button>
            </Wrapper>
        </ListWrapper>
    )
}
