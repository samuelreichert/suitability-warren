import React from 'react';
import { Button, Text } from 'atomize';

import { formatSingleResponse } from './helpers';
import Buttons from '../Buttons';
import Inputs from '../Inputs';
import Messages from '../Messages';

const SuitabilityQuestion = ({
  buttons = [],
  id,
  inputs = [],
  messages = [],
  responses = [],
  answers,
  setAnswers,
  trySuitability,
  fetchProfile
}) => {
  const onClickNext = (id) => {
    const data = {
      context: 'suitability',
      id,
      answers
    };

    trySuitability(data);
  };

  const onClickFinish = () => {
    try {
      fetchProfile({ answers });
    } catch {
      console.error('Algo deu errado na finish request');
    }
  };

  return (
    <>
      <Messages messages={messages} />

      {
        responses.map((response, i) =>
          <Text
            key={i}
            textSize='subheader'
            m={{ t: '1rem' }}
          >
            {formatSingleResponse(response)}
          </Text>
        )
      }

      <Inputs answers={answers} id={id} inputs={inputs} onClickNext={onClickNext} setAnswers={setAnswers} />

      <Buttons buttons={buttons} answers={answers} setAnswers={setAnswers} id={id} />

      {
        id === 'final' &&
        <Button
          d='block'
          bg='brand800'
          m={{ t: '2rem' }}
          onClick={onClickFinish}
          rounded='circle'
          w='100%'
        >
          Descobrir perfil
        </Button>
      }

      {
        id !== 'final' &&
        <Button
          disabled={!answers[id]}
          d='block'
          bg='brand800'
          m={{ t: '2rem' }}
          onClick={() => onClickNext(id)}
          rounded='circle'
          w='100%'
        >
          Continuar
        </Button>
      }
    </>
  )
};

export default SuitabilityQuestion;
