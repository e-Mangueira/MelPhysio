import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base'
import { Titulo } from '../componentes/Titulo'
import fotoMelissa1 from '../assets/fotoMelissa1.jpg'

export default function Perfil(){
  return(
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={5}>
        <Titulo color="blue.500">Meu Perfil</Titulo>

        <Avatar size="xl" source={fotoMelissa1} mt={5} />

        <Titulo color="blue.500">Informações pessoais</Titulo>
        <Titulo fontSize="lg" mb={1}>Melissa Almeida</Titulo>
        <Text>28/08/1974</Text>
        <Text>São Luís</Text>

        <Divider mt={5} />

        <Titulo color="blue.500" mb={1}>Histórico Fisioterapeutico</Titulo>
        <Text>Bronquite</Text>
        <Text>Sinusite</Text>
      </VStack>
    </ScrollView>
  )
}