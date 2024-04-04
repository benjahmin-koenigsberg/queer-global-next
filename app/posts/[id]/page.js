import axios from "axios"
import Image from "next/image"

async function PostPage(props) {

  const id = props.params.id

  // const postsResponse = await axios.get("http://localhost:1337/api/posts")
  const postsResponse = await axios.get("https://queer-global-strapi.onrender.com/api/posts")
  const posts = postsResponse.data.data
  //console.log(posts)
  const post = posts.filter((post) => post.id == id)
  // console.log(post[0].attributes.content[0].image.url)
  return (
    <>
      <div>{post[0].attributes.title}</div>
      <h4>{post[0].attributes.description}</h4>
      <p className="lead">{post[0].attributes.content[0].children[0].text}</p>
      {/* <Image src={post[0].attributes.content[0].image.url}  height={200} width={200} /> */}
      <p>{post[0].attributes.content[0]?.image.url}</p>
    </>

  )
}
export default PostPage
