import { Formik, useFormik } from 'formik'
import * as yup from 'yup'

import { 
  Container, 
  Box, 
  Input, 
  Button, 
  Text, 
  FormControl, 
  FormLabel, 
  FormHelperText,
  Heading,
  Link,
} from '@chakra-ui/react'

import { useEffect } from 'react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useAuth } from '../components'
import { useRouter } from 'next/router'

const validationSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('Preenchimento obrigatório'),
  password: yup.string().required('Preenchimento obrigatório'),
})

Login.title = 'Login'

export default function Login() {

  const [auth, { login }] = useAuth()
  const router = useRouter()

  const { 
    values, 
    errors, 
    touched, 
    handleChange, 
    handleBlur, 
    handleSubmit,
    isSubmitting
  } = useFormik({
    onSubmit: login,
    validationSchema,
    initialValues: {
      email: '',
      password: ''
    }
  })

  useEffect(() => {
    auth.user && router.push('/system')
  }, [auth.user])
  

  return (
    <Container color='brand.0' p={4} mt={10} centerContent>

      <Box textAlign='center' p={4} mt={8}>
        <Heading as='h1' size='lg'>Faça login no Fin4nce</Heading>
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

        <Box p={4}>
          <Button fontSize='sm' colorScheme="teal" width="100%" onClick={handleSubmit} isLoading={isSubmitting}>Entrar</Button>
        </Box>
      </Box>

      <Link href='/signup' p={4} fontSize='xs'>
        Não possui uma conta? Cadastre-se! <ExternalLinkIcon/>
      </Link>

    </Container>
  )
}