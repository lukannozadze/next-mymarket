'use client'
import { useLocale } from 'next-intl';
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Logo() {
  const router = useRouter();
  const localeActive = useLocale();
  return (
    <Image className='cursor-pointer' onClick={()=>{router.push(`/${localeActive}/`)}} src="/logo.svg" alt="logo" width={150} height={41} />
  )
}
