import { useContext } from "react";
import { GlobalContext } from "../../context/context";
import { Button, IconButton } from "../Button/ButtonComponent.styled";
import { ListItemWrapper, ListLabel, ListTitle, ListWrapper, Wrapper } from "./List.styled";
import { Procedures } from "../../API";

export const ListComponent = ({ procedures }: { procedures: Procedures[] }) => {
  const { showDialog } = useContext(GlobalContext);
console.log(procedures);

  return (
    <>
      {procedures.map((procedure) => (
        <ListWrapper key={procedure.id}>
            <ListItemWrapper>
              <ListTitle>Procedimiento 01</ListTitle>
              <ListLabel>{procedure.procedure}</ListLabel>
            </ListItemWrapper>
            <ListItemWrapper>
              <ListTitle>Código</ListTitle>
              <ListLabel>{procedure.code}</ListLabel>
            </ListItemWrapper>
            <ListItemWrapper>
              <ListTitle>Reclamado RD$</ListTitle>
              <ListLabel>RD$ {procedure.claimed}</ListLabel>
            </ListItemWrapper>
            <ListItemWrapper>
              <ListTitle>Diferencia RD$</ListTitle>
              <ListLabel>RD$ {procedure.difference}</ListLabel>
            </ListItemWrapper>
            <ListItemWrapper>
              <ListTitle>Autorizado RD$</ListTitle>
              <ListLabel>RD$ {procedure.authorized}</ListLabel>
            </ListItemWrapper>
        </ListWrapper>
      ))}
      
      <Wrapper style={{ marginTop: '35px' }}>
        <Button onClick={showDialog}>
          <IconButton src="./imgs/pencil.svg" />
          Editar procedimientos
        </Button>
      </Wrapper>
    </>
  );
};
