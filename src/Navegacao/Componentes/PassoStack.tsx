import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
interface IProps {
  voltar?: boolean;
  avancar?: string;
  info?: {
    numero: number;
  };
}

export const PassoStack: React.FC<IProps> = ({
  voltar,
  avancar,
  info,
  children,
}) => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        {voltar && (
          <Button
            title="voltar"
            onPress={() => {
              navigation.goBack();
            }}
          />
        )}
        {avancar && (
          <Button
            title="Avançar"
            onPress={() => {
              navigation.navigate(avancar, info);
            }}
          />
        )}
      </View>
      <View style={{flex: 1}}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
