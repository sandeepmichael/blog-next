import Head from 'next/head'
import Header from './Header'


export default function layout({title, children}) {
  return (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
        <Header />
       
        <main className='container mx-auto my-7'>
            {children}
        </main>
    </div>
  )
}

layout.defaultProps = {
    title: 'My Blog'
}
