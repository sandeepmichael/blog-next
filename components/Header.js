import Link from 'next/link'


export default function Header() {
  return (
      <header className='bg-gray-500'>
    <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
       <Link href='/'>
           <a className='flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0'>
               <span className='ml-3 text-xl'>My Blog</span></a>
       </Link>
       <nav className='flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto'>
          
           <Link href='/about'>
               <a className='mx-5 cursor-pointer hover:text-green-300'>About</a>
           </Link>
       </nav>


    </div>
    </header>
  )
}
