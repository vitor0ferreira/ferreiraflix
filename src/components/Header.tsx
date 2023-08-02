import Image from 'next/image'
import NetflixLogo from '../../public/assets/svg/netflix-logo.svg'
import {BiSearchAlt, BiBell} from 'react-icons/bi'

export default function Header () {

  return (
    <header className='h-32 w-full bg-zinc-950 flex items-center px-4 justify-around'>
        <Image
          src={NetflixLogo}
          width={150}
          height={100}
          alt='Netflix Logo'
          priority
        />
        <nav className='p-1 text-lg flex gap-14 text-gray-400'>
          <a href="" className='hover:text-gray-200' >Home</a>
          <a href="" className='hover:text-gray-200' >TV Shows</a>
          <a href="" className='hover:text-gray-200' >Originals</a>
          <a href="" className='hover:text-gray-200' >Movies</a>
          <a href="" className='hover:text-gray-200' >Recently Added</a>
          <a href="" className='hover:text-gray-200' >My List</a>
        </nav>
        <aside className='h-full w-max flex items-center gap-8'>
          <BiSearchAlt color='#bbb' size='2rem' className='hover:cursor-pointer'/>
          <BiBell color='#bbb' size='2rem' className='hover:cursor-pointer'/>
          <div className='rounded-full h-12 w-12 flex bg-profile-photo bg-center bg-cover'>
            <a href="" className='w-full h-full'></a>
          </div>
        </aside>
    </header>
  )
}