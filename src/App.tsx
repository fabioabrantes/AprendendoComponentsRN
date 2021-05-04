import React from 'react';
import {SafeAreaView} from 'react-native';
import {AsyncStorageComponent} from './AsyncStorage/AsyncStorageComponent';
/* import {ImageComponent} from './ImagesStatusBar/ImageComponent'; */
/* import {ModalComponent} from './Modal/ModalComponent'; */
/* import {TecladoPlatformAlert} from './TecladoPlatformAlertDimensions/TecladoPlatform'; */
/* import {ScrollComponent} from './Scroll/ScrollCompontent'; */
/* import {Routes} from './Navegacao/Routes'; */
/* import {CalculadoraGorjeta} from './EfeitosColaterais/CalculadoraGorjeta'; */
/* import {HookUseEffect} from './EfeitosColaterais/HookUseEffect'; */

const App: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/*  <HookUseEffect /> */}
      {/*  <CalculadoraGorjeta /> */}
      {/*  <Routes /> */}
      {/*  <ScrollComponent /> */}
      {/*  <TecladoPlatformAlert /> */}
      {/*  <ImageComponent /> */}
      {/* <ModalComponent /> */}
      <AsyncStorageComponent />
    </SafeAreaView>
  );
};

export default App;
