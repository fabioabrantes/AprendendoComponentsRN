import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icone from 'react-native-vector-icons/MaterialIcons';

import {TelaA} from '../Paginas/paginasTab/TelaA';
import {TelaB} from '../Paginas/paginasTab/TelaB';
import {TelaC} from '../Paginas/paginasTab/TelaC';

// import { Container } from './styles';
const {Navigator, Screen} = createBottomTabNavigator();
export const Tab: React.FC = () => {
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
        showLabel: true,
        labelStyle: {fontSize: 20},
        style: {backgroundColor: 'yellow'},
      }}
      initialRouteName="TelaB">
      <Screen
        name="TelaA"
        component={TelaA}
        options={{
          title: 'Inicial',
          tabBarIcon: ({size, color}) => (
            <Icone name="add" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="TelaB"
        component={TelaB}
        options={{
          title: 'Meio',
          tabBarIcon: ({size, color}) => (
            <Icone name="list" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="TelaC"
        component={TelaC}
        options={{
          title: 'Final',
          tabBarIcon: ({size, color}) => (
            <Icone name="book" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};
