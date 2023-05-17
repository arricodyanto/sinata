import TitlePage from '@/common/components/atoms/TitlePage'
import { useRouter } from 'next/router'
import React from 'react'

export default function IndexUsers() {
    const router = useRouter()
    React.useEffect(() => {
        router.push('/users/dashboard')
    })
  return (
    <TitlePage title='Welcome to Sinata, Users!' />
  )
}
