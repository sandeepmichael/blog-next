import fs from 'fs'
import path from "path"
import Link from 'next/link'
import Layout from '../../components/layout'
import matter from 'gray-matter'
import {marked} from 'marked'

export default function PostPage({data, content, slug}) {
   
  return (
    <Layout title={data.title}>
        <div className='ml-10'>
         <Link href='/'>Go Back</Link>
         </div>
         <div className='w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6'>
             <div className='flex justify-between items-center mt-4'>
                 <h1 className='text-5xl mb-7'>{data.title}</h1>

             </div>
             <img src={data.cover_image} alt="" className='w-full rounded'/>
             <div className='mr-4'>{data.date}</div>
             <div className='blog-text mt-2'>
                 <div dangerouslySetInnerHTML={{ __html: marked(content)}}></div>
             </div>

         </div>
    </Layout>
  )
}


export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))
    const paths = files.map(filename => ({
        params:{
            slug: filename.replace('.md', '')
        }
    }))
    console.log(paths)

    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps({params:{slug}}){
    const decode = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8') 
    const {data, content} = matter(decode)

    return {
        props: {
            data,
            content,
            slug
        }
    }
}
