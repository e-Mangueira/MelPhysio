import { VStack, Image, Text, Box, FormControl, Input,
Button, Link } from 'native-base'
import LogoHorizontal_1 from './assets/logoHorizontal_1.png'
import { TouchableOpacity } from 'react-native';

export default function Login() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={LogoHorizontal_1} alt="Logo MelPhysio1" />
      <Text
        fontSize="2xl"
        fontWeight="bold"
        color="gray.500"
        textAlign="center"
        mt={5}
      >
        Faça login em sua conta
      </Text>
      <Box>
        <FormControl mt={3}>
          <FormControl.Label>Email</FormControl.Label>
          <Input
            placeholder='Insira seu endereço de email'
            size='lg'
            w="100%"
            borderRadius='lg'
            bgColor='gray.100'
            shadow={3}
          />
        </FormControl>
        <FormControl mt={3}>
          <FormControl.Label>Senha</FormControl.Label>
          <Input
            placeholder='Insira seu endereço de email'
            size='lg'
            w="100%"
            borderRadius='lg'
            bgColor='gray.100'
            shadow={3}
          />
        </FormControl>
      </Box>
      <Button
        w="100%"
        bg="blue.800"
        mt={10}
        borderRadius="lg"
      >
        Entrar
      </Button>
      <Link href='https:www.alura.com.br'>
        Esqueceu sua senha?
      </Link>
      <Box w="100%" flexDirection="row" justifyContent="center">
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity>
        <Text color="blue.500">
          Faça seu cadastro!
        </Text>
        </TouchableOpacity>
      </Box>
    </VStack>    
  );
}
