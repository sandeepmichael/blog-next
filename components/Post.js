import Image from 'next/image'
import Link from 'next/link'


export default function Post({post}) {
  return (
    <div className='w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6'>
    <Image src={post.data.cover_image} alt='' height={420} width={600} className='mb-4 rounded'></Image>
    <div className='flex justify-between items-center'>
        <span className='font-bold text-gray-600'>{post.data.date}</span>

    </div>

    <div className='mt-2'>
        <Link href={`blog/${post.slug}`}>
            <a className='text-2xl text-gray-700 font-bold hover:underline'>
                {post.data.title}
            </a>
        </Link>
      

    </div>
    <div className='flex justify-between items-center mt-6'>
       <Link href={`/blog/${post.slug}`}>
            <a className='font-bold text-black-900 hover:text-blue-600 shadow'>Details</a>
        </Link>

    </div>
    <div className='flex  justify-end items-center'>
     <img src='/images/profile.jpg' alt="" className='mx-4 my-7  w-10 h-10 object-cover rounded-full hidden sm:block'/>


    </div>
    </div>
  )
}
