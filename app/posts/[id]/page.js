import axios from "axios"
import Image from "next/image"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

async function PostPage(props) {

  const id = props.params.id

  const postsResponse = await axios.get("http://localhost:1337/api/posts")
  // const postsResponse = await axios.get("https://queer-global-strapi.onrender.com/api/posts")
  const posts = postsResponse.data.data
  //console.log(posts)
  const post = posts.filter((post) => post.id == id)
  const postParagraphs = post[0].attributes.content.map(el => el.children).map(el=>el[0]).map(el=>el.text)
  console.log(postParagraphs)
  return (
    <>
    <Navbar />
      <div className="card p-2 ">
        <h5 className="card-title text-center">{post[0].attributes.title}</h5>
        {/* <h6 className="card-text lead p-4">{post[0].attributes.content[0].children[0].text}</h6> */}
        <h6 className="card-text lead p-4">{postParagraphs}</h6>

        {/* <Image src={post[0].attributes.content[0].image.url}  height={200} width={200} /> */}
        {/* <p>{post[0].attributes.content[0].image.url}</p> */}
      </div>
      <Footer />
    </>

  )
}
export default PostPage
