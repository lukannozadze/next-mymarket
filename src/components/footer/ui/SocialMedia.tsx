import Image from 'next/image'
export default function SocialMedia() {
  return (
    <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-[#E5E5E5] flex items-center justify-center hover:bg-gray-300 cursor-pointer ">
            <Image
              src="/icons/facebook.svg"
              alt="facebook"
              width={10}
              height={10}
            />
          </div>
          <div className="w-10 h-10 rounded-full bg-[#E5E5E5] flex items-center justify-center hover:bg-gray-300 cursor-pointer">
            <Image
              src="/icons/instagram.svg"
              alt="instagram"
              width={20}
              height={20}
            />
          </div>
          <div className="w-10 h-10 rounded-full bg-[#E5E5E5] flex items-center justify-center hover:bg-gray-300 cursor-pointer ">
            <Image
              src="/icons/linkedin.svg"
              alt="linkedin"
              width={20}
              height={20}
            />
          </div>
        </div>
  )
}
