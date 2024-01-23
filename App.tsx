import { NativeBaseProvider, StatusBar } from 'native-base';

import { TEMAS } from './src/estilos/Temas';
import Login from './src/Login';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue [800]} />
      <Login />
    </NativeBaseProvider>
  );
}