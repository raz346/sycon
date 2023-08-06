import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { Fragment } from 'react'
import NavBar from '../components/NavBar'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Projects', href: '#', current: false },
  { name: 'System Setup', href: '#', current: false },
]

export default function Home() {
  return (
    <div>
      <main className={`flex min-h-screen flex-col items-center justify-between p-5 ${inter.className}`}>
        <NavBar navigation={navigation}/>
      </main>
    </div>
  )
}
