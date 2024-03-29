import Image from 'next/image'
export default function AppDownloadSection() {
  return (
    <section className='flex items-center gap-8 mb-10'>
        <div className='flex gap-4'>
            <Image src="/playstore.svg" alt='playstore' width={107} height={33}/>
            <Image src="/appstore.svg" alt='appstore' width={107} height={33}/>
        </div>
        <span className='text-xs text-gray-400'>Download app and get latest features</span>
    </section>
  )
}
