import React from 'react';
import { Div, Icon, Text } from 'atomize';

const Loading = () => {
  return (
    <Div m={{ y: '10rem' }} d='flex' align='center' justify='center' flexDir='column'>
      <Text tag='h3' textSize='display1' m={{ b: '2rem' }} textColor='black600'>
        Carregando
      </Text>
      <Icon name='Loading3' color='info400' size='64px' />
    </Div>
  )
};

export default Loading;
