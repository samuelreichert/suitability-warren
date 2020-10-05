import React, { useCallback, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { Col, Container, Div, Row, Text } from 'atomize';

import { suitabilityConversation, finishSuitability } from './AppQuery';

import Loading from './components/Loading';
import FinishSuitability from './components/FinishSuitability';
import SuitabilityQuestion from './components/SuitabilityQuestion';

const App = () => {
  const [answers, setAnswers] = useState({});

  const [fetchSuitability, { data, isLoading }] = useMutation(suitabilityConversation);
  const suitabilityData = data?.data || {};

  const [fetchProfile, profileResponse] = useMutation(finishSuitability);
  const {
    data: { data: { user } = {} } = {},
    isSuccess: profileSuccess,
    isLoading: profileLoading
  } = profileResponse;

  const trySuitability = useCallback((data) => {
    try {
      fetchSuitability(data);
    } catch {
      console.error('Algo deu errado na suitability request');
    }
  }, [fetchSuitability]);

  useEffect(() => {
    trySuitability();
  }, [trySuitability]);

  if (isLoading || profileLoading) {
    return <Loading />;
  }

  return (
    <Container d='flex' align='center' justify='center' flexDir='column' bg='gray100' minW='100%' maxW='100%' w='100%'>
      <Text tag='h3' textSize='display1' m={{ y: '2rem' }} textColor='brand900'>
        Suitability Warren
      </Text>

      <Row align='center' justify='center' w='100%'>
        <Col size={6} align='center' justify='center'>
          <Div
            align='center'
            bg='white'
            d='flex'
            flexDir='column'
            justify='space-between'
            m={{ b: '3rem' }}
            p='2rem'
            rounded='xl'
            shadow='4'
            w='100%'
            minW='100%'
          >
            {(profileSuccess && !profileLoading) && <FinishSuitability user={user} />}

            {(!profileSuccess || profileLoading) &&
              <SuitabilityQuestion
                {...suitabilityData}
                answers={answers}
                setAnswers={setAnswers}
                trySuitability={trySuitability}
                fetchProfile={fetchProfile}
              />
            }
          </Div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
