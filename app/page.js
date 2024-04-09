
import axios from "axios"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Link from "next/link"
import Image from "next/image"

export default async function Home() {

  // const postsResponse = await axios.get("http://localhost:1337/api/posts?populate=*")
  // const postsResponse = await axios.get("http://localhost:1337/api/posts")
  const postsResponse = await axios.get("https://queer-global-strapi.onrender.com/api/posts")
  const posts = postsResponse.data.data

  // console.log(posts[0].attributes.Image.data.attributes.formats.thumbnail.url)


  return (
    <>
      <Navbar />
      {
        posts.map(post => (
          <div key={post.attributes.publishedAt} className="card p-2 m-2">
            <Link className="text-decoration-none text-dark" href={`/posts/${post.id}`}>

              <div className="d-flex align-items-center justify-content-between ">
                {/* <Image className="card-image img-thumbnail" src={`http://localhost:1337${post.attributes.Image.data.attributes.formats.thumbnail.url}`}
                  height={post.attributes.Image.data.attributes.formats.thumbnail.height}
                  width={post.attributes.Image.data.attributes.formats.thumbnail.width}
                  height={150}
                  width={150}
                /> */}
                <div className="">
                  <h5 className="card-title text-center">{post.attributes.title}</h5>
                  <h6 className="card-text text-center p-2">{post.attributes.description}</h6>
                </div>
              </div>
            </Link>
          </div>
        ))
      }
      <Footer />
    </>
  )
}
