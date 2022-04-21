// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'


export default function handler(req, res) {
  let posts;
  if(process.env.NODE_ENV === 'production'){
    // @ cache posts

  } else {
    const files = fs.readdirSync(path.join('posts'))
    posts = files.map(filename => {
      const slug = filename.replace('.md', '')
       const decode = fs.readFileSync(path.join('posts', filename), 'utf-8')
       const {data} = matter(decode)
       return {
         data,
         slug

       }
    })
  }

  const results = posts.filter(({data:{title}}) => title.toLowerCase().indexOf(req.query.q) != -1 )
 







  res.status(200).json(JSON.stringify({results}))
}
