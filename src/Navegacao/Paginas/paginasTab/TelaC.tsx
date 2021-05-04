import React from 'react';
import {PassoStack} from '../../Componentes/PassoStack';
import {TextoCentral} from '../../Componentes/TextoCentral';

interface IRoute {
  numero: number;
}

export const TelaC: React.FC = () => {
  return (
    <PassoStack>
      <TextoCentral corFundo="#9932cd">Tela C </TextoCentral>
    </PassoStack>
  );
};
