  import React from 'react';
  import { Button, Div } from 'atomize';

  const Buttons = ({ buttons, answers, setAnswers, id }) => {
    const onClickButton = (value) => {
      setAnswers({
        ...answers,
        [id]: value
      })
    };

    return (
      <Div d='flex' justify='space-evenly' w='100%'>
        {
          buttons.map(({ label: { title }, value }, i) =>
            <Button
              key={i}
              bg='info300'
              hoverBg='info400'
              onClick={() => onClickButton(value)}
              rounded='circle'
              shadow='2'
              hoverShadow='3'
              textColor='info700'
              m={{ t: '1rem' }}
            >
              {title}
            </Button>
          )
        }
      </Div>
    );
  };

  export default Buttons;
