
import axios from "axios"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Link from "next/link"


export default async function Home() {


  const postsResponse = await axios.get("http://localhost:1337/api/posts")
  // const postsResponse = await axios.get("https://queer-global-strapi.onrender.com/api/posts")

  const posts = postsResponse.data.data


  return (
    <>
      <Navbar />
      {
        posts.map(post => (
          <div key={post.attributes.publishedAt} className="card p-2 m-2">
            <Link className="text-decoration-none text-dark" href={`/posts/${post.id}`}>
            <p>{post.attributes.id}</p>
            <h5 className="card-title text-center">{post.attributes.title}</h5>
            <h6 className="card-text">{post.attributes.description}</h6>
            </Link>
            {/* <p className="lead">{post.attributes.content[0].children[0].text}</p> */}
          </div>
        ))
      }
      <Footer />
    </>
  )
}
