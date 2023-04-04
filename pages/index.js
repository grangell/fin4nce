import { useEffect } from 'react'
import { Container, Spinner } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useAuth } from '../components'

Home.title = 'Início'
  
export default function Home() {
  const [auth] = useAuth()
  const router = useRouter()

  useEffect(() => {
    if(!auth.loading) {
      auth.user 
        ? router.push('/system') 
        : router.push('/login')
    }
  }, [auth.user, router, auth.loading])

  return (
    <Container p={4} centerContent>
      <Spinner />
    </Container>
  )
}