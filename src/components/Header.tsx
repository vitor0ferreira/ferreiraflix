import Image from 'next/image'
import NetflixLogo from '../../public/assets/svg/netflix-logo.svg'
import {BiSearchAlt, BiBell} from 'react-icons/bi'

export default function Header () {

  return (
    <header className='h-32 w-full bg-black flex items-center px-4 justify-around'>
        <Image
          src={NetflixLogo}
          width={150}
          height={100}
          alt='Netflix Logo'
          priority
        />
        <nav className='p-1 text-lg flex gap-14 text-gray-400'>
          <a href="">Home</a>
          <a href="">TV Shows</a>
          <a href="">Originals</a>
          <a href="">Movies</a>
          <a href="">Recently Added</a>
          <a href="">My List</a>
        </nav>
        <aside className='h-full w-max flex items-center gap-8'>
          <BiSearchAlt color='#bbb' size='2rem'/>
          <BiBell color='#bbb' size='2rem'/>
          <div className='rounded-full bg-white h-12 w-12 '/>
        </aside>
    </header>
  )
}