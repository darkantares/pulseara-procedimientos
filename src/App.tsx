import { Container } from "@mui/material";
import { Button, IconButton } from "./components/Button/ButtonComponent.styled";

import { List, ListItemWrapper, ListTitle, ListWrapper, Wrapper } from "./components/List/List.styled";
import { ContainerNoProcedures, Image, Label } from "./components/NoProcedures/NoProcedures.styled";
import { ContainerTitle, Title } from "./components/Title/Title.styled";

import { DialogComponent } from "./components/Dialog/DialogComponent";

function App() {
  return (
    <>
      <DialogComponent />

      <Container>
        <ContainerTitle>
          <Title>Procedimientos</Title>
        </ContainerTitle>
        
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
        </ListWrapper>

        <Wrapper> 
          
          <Button>
            <IconButton src="./imgs/pencil.svg" />
            Editar procedimientos
          </Button>
        </Wrapper>
      </Container>
      
      <ContainerNoProcedures>
        <Image src={'./imgs/no-procedures.svg'} />
        <Label>No hay datos que mostrar</Label>
        <Button>            
          <IconButton src="./imgs/pencil.svg" />
          Editar procedimientos
        </Button>
      </ContainerNoProcedures>
    </>
  );
}

export default App;
