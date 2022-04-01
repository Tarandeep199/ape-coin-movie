import Image from 'next/image'
import ape from '../public/images/APECOINMOVIE.jpg'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen'>
      <h1 className='pb-8 text-3xl'>APEPCOIN MOVIE</h1>
       
      <div className= 'relative w-32 h-32 pt-6 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-44'>
        <Image
          objectFit = 'cover'
          src ={ape}
          alt='APECOIN MOVIE'
          layout = 'fill'
          priority
        />

      </div>
      
     
    </div>
    

  )
}
 