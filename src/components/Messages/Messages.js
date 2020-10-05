import React from 'react';
import { Text } from 'atomize';
import { formatSingleMessage } from './helpers';

const Messages = ({ messages }) => {
 return (
   <>
    {
      messages.map((message, i) => {
        return (
          <Text
            key={i}
            textSize='subheader'
            m={{ t: '1rem' }}
            textAlign='center'
          >
            {formatSingleMessage(message.value)}
          </Text>
        )
      })
    }
   </>
 )
}

export default Messages;
