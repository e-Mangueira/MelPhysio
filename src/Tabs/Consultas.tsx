import { Divider, ScrollView } from 'native-base'
import { Botao } from '../componentes/Botao'
import { CardConsulta } from '../componentes/CardConsultas'
import { Titulo } from '../componentes/Titulo'
import fotoMelissa1 from '../assets/fotoMelissa1.jpg'



export default function Consultas(){
  return(
    <ScrollView p="5">
      <Titulo color="blue.500">Minhas consultas</Titulo>
      <Botao mt={5} mb={5}>Agendar nova consulta</Botao>

      <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Próximas consultas</Titulo>
      <CardConsulta 
        nome='Dra. Melissa'
        especialidade='Fisioterapeuta'
        foto={'fotoMelissa1'}
        data='24/01/2024'
        foiAgendado
      />

      <Divider mt={5} />

      <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Consultas passadas</Titulo>
      <CardConsulta 
        nome='Dra. Tia Mel 1'
        especialidade='Fisioterapeuta'

        foto='https://github.com/e-Mangueira.png'
        data='24/01/2024'
        foiAtendido
      />
      <CardConsulta 
        nome='Dra. Tia Mel 2'
        especialidade='Fisioterapeuta'
        foto='https://github.com/e-Mangueira.png'
        data='24/01/2024'
        foiAtendido
      />
      <CardConsulta 
        nome='Dra. Tia Mel 3'
        especialidade='Fisioterapeuta'
        foto='https://github.com/e-Mangueira.png'
        data='24/01/2024'
        foiAtendido
      />
    </ScrollView>
  )
}