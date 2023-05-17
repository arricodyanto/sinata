import TitlePage from '@/common/components/atoms/TitlePage'
import { useRouter } from 'next/router'
import React from 'react'

export default function IndexAdmins() {
    const router = useRouter()
    React.useEffect(() => {
        router.push('/admins/dashboard')
    })
  return (
    <TitlePage title='Welcome to Sinata, Admins!' />
  )
}
