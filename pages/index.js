
import Layout from "../components/layout"
import fs from 'fs'
import matter from 'gray-matter'
import Link from "next/link"
import path from "path"
import Post from "../components/Post"
import {sortByDate} from '../utils'


export default function Home({posts}) {
  
  return (
    <Layout>
    <h1 className="text-5xl border-b-4 p-5 font bold">Articles</h1>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {posts.map((post, index) => <Post key={index} post={post}/>)}
         
    </div>
   
    </Layout>
  )
}


//server side generation.....
export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const decode = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const {data} = matter(decode)

    return {
      slug,
      data
    }
  })

 
  return {
    props: {
         posts:posts.sort(sortByDate)
    }
  }
}