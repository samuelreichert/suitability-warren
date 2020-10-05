import React from 'react';
import { Input } from 'atomize';
import { INPUT_TYPES } from './constants';

const Inputs = ({ answers, id, inputs, onClickNext, setAnswers }) => {
  const onChangeInput = (event) => {
    setAnswers({
      ...answers,
      [id]: event.currentTarget.value
    });
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      onClickNext(id);
    }
  };

  return (
    <>
      {
        inputs.map((input, i) => (
          <Input
            key={i}
            name={input.mask}
            type={INPUT_TYPES[input.type]}
            rounded='circle'
            onChange={onChangeInput}
            onKeyPress={onKeyPress}
            m={{ t: '1rem' }}
          />
        ))
      }
    </>
  );
};

export default Inputs;
