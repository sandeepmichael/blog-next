import Layout from "../components/layout"
import Image from 'next/image'

export default function AboutPage() {
  return (
    <Layout title='About Me'>
        <h1 className="text-5xl border-b-4 pb-5 font-bold ml-5">About</h1>
        <div className="container mx-auto bg-white shadow-md rounded-lg px-10 py-6 mt-6">
    
        <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="sandeep"
    className="borderCircle"
  />
          
            <p>
                <span className="font-bold">Hello I'm M Sandeep.I'm  a full stack developer..</span>
            </p>

        </div>
    </Layout>
  )

}
