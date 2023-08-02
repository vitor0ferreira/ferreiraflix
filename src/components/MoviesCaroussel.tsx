

export default function MoviesCaroussel ({props, category}:any) {

  return (
    <section className='flex flex-col items-start w-full backdrop-blur-sm relative -top-[100px] m-4 ml-36'>
      <h1 className='font-bold text-gray-100 text-2xl p-2'>{category}</h1>
      <article className='flex gap-6'>
        <div className='bg-daredevil-image bg-cover h-40 aspect-video flex blur-[0.05rem] hover:blur-none hover:border-gray-100 hover:border-2 rounded-sm'><a href="" className='h-full w-full'></a></div>
        <div className='bg-daredevil-image bg-cover h-40 aspect-video flex blur-[0.05rem] hover:blur-none hover:border-gray-100 hover:border-2 rounded-sm'><a href="" className='h-full w-full'></a></div>
        <div className='bg-daredevil-image bg-cover h-40 aspect-video flex blur-[0.05rem] hover:blur-none hover:border-gray-100 hover:border-2 rounded-sm'><a href="" className='h-full w-full'></a></div>
        <div className='bg-daredevil-image bg-cover h-40 aspect-video flex blur-[0.05rem] hover:blur-none hover:border-gray-100 hover:border-2 rounded-sm'><a href="" className='h-full w-full'></a></div>
        <div className='bg-daredevil-image bg-cover h-40 aspect-video flex blur-[0.05rem] hover:blur-none hover:border-gray-100 hover:border-2 rounded-sm'><a href="" className='h-full w-full'></a></div>
        <div className='bg-daredevil-image bg-cover h-40 aspect-video flex blur-[0.05rem] hover:blur-none hover:border-gray-100 hover:border-2 rounded-sm'><a href="" className='h-full w-full'></a></div>
        <div className='bg-daredevil-image bg-cover h-40 aspect-video flex blur-[0.05rem] hover:blur-none hover:border-gray-100 hover:border-2 rounded-sm'><a href="" className='h-full w-full'></a></div>
      </article>
    </section>
  )
}