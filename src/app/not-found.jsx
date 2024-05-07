"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const NotFound  = () => {
  const router = useRouter()
  return (
    <div className='text-gray-600 text-4xl'>Pagina no encontrada </div>
  )
}

export default NotFound 