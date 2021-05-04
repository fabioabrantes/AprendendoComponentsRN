import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {TelaA} from '../Paginas/PaginasStack/TelaA';
import {TelaB} from '../Paginas/PaginasStack/TelaB';
import {TelaC} from '../Paginas/PaginasStack/TelaC';

import {Drawer} from './Drawer';

const {Navigator, Screen} = createStackNavigator();
const Stack: React.FC = () => {
  return (
    <Navigator
      initialRouteName="TelaA"
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerTitleStyle: {color: 'green'},
      }}>
      <Screen
        name="TelaA"
        options={{title: 'Informações de A'}}
        component={TelaA}
      />
      <Screen
        name="TelaB"
        options={{title: 'Informações de B'}}
        component={TelaB}
      />
      <Screen
        name="TelaC"
        options={{title: 'Informações de C '}}
        component={TelaC}
      />
      <Screen
        name="Drawer"
        options={{title: 'Informações do Drawer '}}
        component={Drawer}
      />
    </Navigator>
  );
};

export default Stack;
