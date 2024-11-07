
import { useContext, useEffect, useState } from 'react';

import { generateClient } from 'aws-amplify/api';

import { createProcedures } from './graphql/mutations';
import { listProcedures } from './graphql/queries';
import { type CreateProceduresInput, type Procedures } from './API';

import { ContainerTitle, Title } from "./components/Title/Title.styled";

import { EmptyProcedures } from "./components/EmptyProcedures";
import { Container } from "./components/Global.styled";
import { DialogComponent } from "./components/Dialog/DialogComponent";
import { ListComponent } from "./components/List/List";
import { GlobalContext } from './context/context';
import { initialProcedureDataState } from './consts';


const client = generateClient();

function App() {

  const [formState, setFormState] = useState<CreateProceduresInput>(initialProcedureDataState);
  const {proceduresState, setProcedures} = useContext(GlobalContext);
  const {procedures, showDialog} = proceduresState;
  // const [todos, setTodos] = useState<Procedures[] | CreateProceduresInput[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
      try {
        const procedureData = await client.graphql({
          query: listProcedures,
        });
        const procedures = procedureData.data.listProcedures.items;
        setProcedures(procedures);
        console.log(procedures);
        
      } catch (err) {
        console.log('error fetching todos');
      }
  }

  return (
    <>
      {
        showDialog && <DialogComponent />
      }

      <Container>
        <ContainerTitle>
          <Title>Procedimientos</Title>
        </ContainerTitle>
        
        {
          procedures.length === 0 ? <EmptyProcedures /> : <ListComponent />
        }
        
      </Container>
      
    </>
  );
}

export default App;
