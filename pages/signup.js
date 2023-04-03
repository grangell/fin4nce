import { Formik, useFormik } from 'formik'
import * as yup from 'yup'

import { 
    Container,
    Box,
    Button,
    Text,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Link,
    Heading,
    InputGroup,
    InputLeftAddon
} from '@chakra-ui/react'

import { useEffect } from 'react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useAuth } from '../components'
import { useRouter } from 'next/router'


yup.setLocale({
  string: {
    email: 'Preencha um email válido!',
    min: 'Valor muito curto (mí­nimo ${min} caracteres)',
    max: 'Valor muito longo (máximo ${max} caracteres)',
  },
  mixed: {
    required: 'Preenchimento obrigatório!',
  },
});

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(3).max(12).required(),
  key: yup.string().min(6).max(12).required()
})

SignUp.title = 'Registro'

export default function SignUp() {

  const [auth, { signup }] = useAuth()
  const router = useRouter()

  const { 
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    isLoading
  } = useFormik({
    onSubmit: signup,
    validationSchema,
    initialValues: {
      email: '',
      password: '',
      key: ''
    }
  })

  useEffect(() => {
    auth.user && router.push('/login')
  }, [auth.user])
  

  return (
    <Container color='brand.0' p={4} mt={10} centerContent>

      <Box textAlign='center' p={4} mt={8}>
        <Heading as='h1' size='lg'>Crie sua conta no Fin4nce</Heading>
      </Box>

      <Box>
          <FormControl id="email" p={4} isRequired>
            <FormLabel fontSize='sm'>E-mail:</FormLabel>
            <Input size="md" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} autoComplete='no'/>
            {touched.email && <FormHelperText textColor="#e74c3c">{errors.email}</FormHelperText>}
          </FormControl>

          <FormControl id="password" p={4} isRequired>
            <FormLabel fontSize='sm'>Senha:</FormLabel>
            <Input size="md" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
            {touched.password && <FormHelperText textColor="#e74c3c">{errors.password}</FormHelperText>}
          </FormControl>

          <FormControl id="key" p={4} isRequired>
          <InputGroup size="md">
            <InputLeftAddon textColor="brand.1" backgroundColor="brand.0" fontSize='sm'>Chave de acesso:</InputLeftAddon>
            <Input type="password" value={values.key} onChange={handleChange} onBlur={handleBlur} />
          </InputGroup>
          {touched.key && <FormHelperText textColor="#e74c3c">{errors.key}</FormHelperText>}
        </FormControl>

        <Box p={4}>
          <Button fontSize='sm' colorScheme="teal" width="100%" onClick={handleSubmit} isLoading={isSubmitting}>Registrar</Button>
        </Box>
      </Box>

      <Link href='/login' p={4} fontSize='xs'>
        Possui uma conta? Entre aqui!<ExternalLinkIcon mx='1'/>
      </Link>

    </Container>
  )
}
