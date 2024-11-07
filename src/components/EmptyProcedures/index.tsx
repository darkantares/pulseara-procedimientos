import { useContext } from "react";
import { GlobalContext } from "../../context/context";
import { Button, IconButton } from "../Button/ButtonComponent.styled"
import { ContainerNoProcedures, Image, Label } from "../NoProcedures/NoProcedures.styled"

export const EmptyProcedures = () => {

  const {showDialog} = useContext(GlobalContext);
  
  return (
    <ContainerNoProcedures>
        <Image src={'./imgs/no-procedures.svg'} />
        <Label>No hay datos que mostrar</Label>
        <Button onClick={()=>showDialog()}>            
            <IconButton src="./imgs/pencil.svg" />
            Editar procedimientos
        </Button>
    </ContainerNoProcedures>
  )
}
