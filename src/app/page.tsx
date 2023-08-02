import MoviesCaroussel from '@/components/MoviesCaroussel'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'
import { FaPlay } from 'react-icons/fa'
import { ImPlus } from 'react-icons/im'


export default function Home() {
  return (
    <main className="flex relative min-h-screen bg-black min-w-full flex-col items-center">

      {/* Main Banners Caroussel */}
      <section className='flex items-center pl-24 p-8 bg-mrobot-banner bg-right bg-no-repeat bg-contain h-[768px] w-screen'>
        <article className="h-[80%] flex flex-col gap-8 w-max text-white">
          <Image
            src={'/mr-robot-logo.png'}
            width={800}
            height={800}
            alt='mrRobot Logo'
          />
          <section className='w-max flex ml-3 items-center gap-4'>
            <span className='flex'>
              <AiFillStar color='red' size='1.75rem'/>
              <AiFillStar color='red' size='1.75rem'/>
              <AiFillStar color='red' size='1.75rem'/>
              <AiFillStar color='red' size='1.75rem'/>
              <AiFillStar color='red' size='1.75rem'/>
            </span>
            <span className='text-lg'>
              2010 - Horror
            </span>
          </section>
          <section className='flex gap-4 ml-4 text-xl w-max'>
            <span>Season <b className='text-red-500'>2</b></span> |
            <span>Episode <b className='text-red-500'>1</b></span> |
            <span>Eps2.0_unm4sk-pt1.tc</span>
            <span>Duration: 45 min</span>
          </section>
          <section className='max-w-[768px] text-xl flex ml-4'>
            Elliot grapples with his alter ego. Fsociety faces internal issues, while Angela manipulates E Corp. Themes of identity and power are explored, with the Dark Army playing a pivotal role.
          </section>
          <section className='flex ml-4 mt-10 gap-4 items-center'>
            <button className='flex items-center w-max h-max gap-6 bg-red-600 rounded-full px-6 py-[6px] hover:bg-red-800'>
              <FaPlay size='1.5rem'/>
              <span className='text-lg font-bold'>PLAY</span>
            </button>
            <button className='flex items-center w-max h-max gap-5 bg-gray-800 rounded-full px-6 py-[6px] hover:bg-zinc-500'>
              <ImPlus size='1.3rem'/>
              <span className='text-lg font-bold'>MY LIST</span>
            </button>
          </section>
        </article>
      </section>

      {/* Movie Section List */}
      <MoviesCaroussel category='Continue Assistindo'/>
      <MoviesCaroussel category='Top Assistidos no Brasil'/>
      <MoviesCaroussel category='Comédia'/>
      <MoviesCaroussel category='Ação'/>
      <MoviesCaroussel category='Ficção Científica'/>

    </main>
  )
}
