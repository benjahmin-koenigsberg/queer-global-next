
import axios from "axios"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


export default async function Home() {


  // const postsResponse = await axios.get("http://localhost:1337/api/posts")
  const postsResponse = await axios.get("https://queer-global-strapi.onrender.com/api/posts")

  const posts = postsResponse.data.data
  // console.log(postsResponse.data.data[1].attributes.content[0].children)



  return (
    <>
      <Navbar />
      {
        posts.map(post => (
          <div key={post.attributes.publishedAt}>
            <h2>{post.attributes.title}</h2>
            <h4>{post.attributes.description}</h4>
            <p>{post.attributes.content[1].children[0].text}</p>
          </div>
        ))
      }
      <Footer />
    </>
  )
}
