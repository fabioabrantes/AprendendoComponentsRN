import React from 'react';
import {useRoute} from '@react-navigation/core';
import {PassoStack} from '../../Componentes/PassoStack';
import {TextoCentral} from '../../Componentes/TextoCentral';

interface IRoute {
  numero: number;
}

export const TelaC: React.FC = () => {
  const route = useRoute();
  const {numero} = route.params as IRoute;
  return (
    <PassoStack voltar avancar="Drawer">
      <TextoCentral corFundo="#9932cd">Tela C - {numero}</TextoCentral>
    </PassoStack>
  );
};
