import { VStack, Image, Text, Box, Link, Checkbox, ScrollView } from 'native-base'
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import logo2 from './assets/logo2.png';
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/Titulo';
import { secoes } from './utils/CadastroEntradaTexto';

export default function Login() {
  const [numSecao, setNumSecao] = useState(0);
  

  function avancarSecao(){
    if(numSecao < secoes.length - 1){
      setNumSecao(numSecao+1)
    }
  }

  function voltarSecao(){
    if(numSecao > 0){
      setNumSecao(numSecao - 1)
    }
  }

  return (
    <ScrollView flex={1} p={5}  >
      <Image source={logo2} alt="MelPhysio2" alignSelf="center" mt={20}/>

      <Titulo>
        {secoes[numSecao].titulo}
      </Titulo>
      <Box>
        {
          secoes[numSecao]?.entradaTexto?.map(entrada => {
            return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id} />
          })
        }
      </Box>
      <Box>
        <Text color="blue.800" fontWeight="bold" fontSize="md" mt="2" mb={2}>
          Opções de pagamento:
        </Text>
        {
          secoes[numSecao].checkbox.map(checkbox => {
            return <Checkbox key={checkbox.id} value={checkbox.value}>
              {checkbox.value}
            </Checkbox>
          })
        }
      </Box>
      {numSecao > 0 && <Botao onPress={() => voltarSecao()} bgColor="gray.400">Voltar</Botao>}
      <Botao onPress={() => avancarSecao()} mt={4} mb={20}>Avançar</Botao>
    </ScrollView>
  );
}