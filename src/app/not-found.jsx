"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const NotFound  = () => {
  const router = useRouter()
  return (
   <>
   <h1 className='mx-auto w-full'>pagina no encontrada</h1>
   </>
  )
}

export default NotFound 