import React, { useEffect } from 'react';
import { useMutation } from 'react-query';
import { Button, Container, Div, Input, Text } from 'atomize';
import { suitabilityConversation } from './AppQuery';
import Loading from './components/Loading';

const App = () => {
  const [fetchSuitability, { data, error, isLoading, isError }] = useMutation(suitabilityConversation)

  useEffect(() => {
    fetchSuitability()
  }, [fetchSuitability])

  if (isLoading) {
    return <Loading />;
  }

  console.log(data)

  return (
    <Container d='flex' align='center' justify='center' flexDir='column'>
      <Text tag='h3' textSize='display1' m={{ y: '2rem' }} textColor='brand900'>
        Suitability Warren
      </Text>

      <Div shadow='4' p='2rem' rounded='xl' d='flex' align='center' justify='space-between' flexDir='column'>
        <Text>Pergunta aqui?</Text>

        <Input placeholder="Basic Input" m={{ t: '2rem' }} rounded='circle' w='100%'/>

        <Button bg='brand800' w='100%' rounded='circle' m={{ t: '2rem' }}>Próxima</Button>
      </Div>
    </Container>
  );
};

export default App;
