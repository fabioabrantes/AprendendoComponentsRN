import React, {useState} from 'react';
import {Modal} from 'react-native';
import styled from 'styled-components/native';

// import { Container } from './styles';

export const ModalComponent: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <Botao
        title="mostrar o modal"
        onPress={() => {
          setModalVisible(true);
        }}
      />
      <Modal
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <ContainerModal>
          <ContentModal>
            <Texto>Fabio abrantes diniz</Texto>
            <Botao
              title="fechar modal"
              onPress={() => {
                setModalVisible(false);
              }}
            />
          </ContentModal>
        </ContainerModal>
      </Modal>
    </Container>
  );
};
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #eee;
`;
const Botao = styled.Button`
  width: 80%;
`;
const ContainerModal = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
`;
const ContentModal = styled.View`
  width: 90%;
  height: 300px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
const Texto = styled.Text`
  font-size: 20px;
`;
