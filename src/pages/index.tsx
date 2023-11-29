import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import LoginForm from '@/components/organisms/LoginForm'
import LoginHookForm from '@/components/organisms/LoginHookForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const onLogin = (data :any) => {
    console.log(data);
  }

  return (
    <>
     <LoginForm onLogin={onLogin} />
     <LoginHookForm onSubmit={onLogin} />
    </>
  )
}
