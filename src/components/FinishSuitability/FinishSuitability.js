import React from 'react';
import { Text } from 'atomize';

const FinishSuitability = ({ user }) => {
  return (
    <>
      <Text tag='h3' textSize='display1' m={{ y: '2rem' }} textColor='success700'>
        {user.name} você tem o perfil {user.investmentProfile.riskToleranceProfile}!
      </Text>
      <Text textSize='title' m={{ b: '2rem' }} textColor='success600'>Parabéns!</Text>
    </>
  );
};

export default FinishSuitability;
