import React from 'react';
import {PassoStack} from '../../Componentes/PassoStack';
import {TextoCentral} from '../../Componentes/TextoCentral';

export const TelaA: React.FC = () => {
  return (
    <>
      <PassoStack>
        <TextoCentral corFundo="#e53935"> Tela A</TextoCentral>
      </PassoStack>
    </>
  );
};
