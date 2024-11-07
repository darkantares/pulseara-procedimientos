

import { useContext } from "react";
import { GlobalContext } from "../../context/context";
import { Button, IconButton } from "../Button/ButtonComponent.styled";
import { List, ListItemWrapper, ListTitle, ListWrapper, Wrapper } from "./List.styled";

export const ListComponent = () => {

    const {showDialog} = useContext(GlobalContext);
    
    return (
        <ListWrapper> 
            <List>
                <ListItemWrapper>
                    <ListTitle>Procedimiento 01</ListTitle>
                    <span>dsfsdfsd</span>
                </ListItemWrapper>
                <ListItemWrapper>
                    <ListTitle>Código</ListTitle>
                    <span>dsfsdfsd</span>
                </ListItemWrapper>
                <ListItemWrapper>
                    <ListTitle>Reclamado RD$</ListTitle>
                    <span>dsfsdfsd</span>
                </ListItemWrapper>
                <ListItemWrapper>
                    <ListTitle>Diferencia RD$</ListTitle>
                    <span>dsfsdfsd</span>
                </ListItemWrapper>
                <ListItemWrapper>
                    <ListTitle>Autorizado RD$</ListTitle>
                    <span>dsfsdfsd</span>
                </ListItemWrapper>
            </List>        
            
            <Wrapper>           
                <Button onClick={()=>showDialog()}>     
                    <IconButton src="./imgs/pencil.svg" />
                    Editar procedimientos
                </Button>
            </Wrapper>
        </ListWrapper>
    )
}
