import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TelaD} from '../Paginas/PaginasDrawer/TelaD';
import {TelaE} from '../Paginas/PaginasDrawer/TelaE';
import {Tab} from './Tab';

const {Navigator, Screen} = createDrawerNavigator();

export const Drawer: React.FC = () => {
  return (
    <Navigator initialRouteName="TelaE">
      <Screen name="TelaD" component={TelaD} />
      <Screen name="TelaE" component={TelaE} />
      <Screen name="Tab" component={Tab} />
    </Navigator>
  );
};
