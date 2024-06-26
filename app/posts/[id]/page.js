import axios from "axios"
import Image from "next/image"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

async function PostPage(props) {

  const id = props.params.id

  // const postsResponse = await axios.get("http://localhost:1337/api/posts")
  const postsResponse = await axios.get("http://localhost:1337/api/posts?populate=*")
  // const postsResponse = await axios.get("https://queer-global-strapi.onrender.com/api/posts")
  const posts = postsResponse.data.data
  //console.log(posts)
  const post = posts.filter((post) => post.id == id)
  const postParagraphs = post[0].attributes.content.map(el => el.children).map(el => el[0]).map(el => el.text)
  //console.log(post[0].attributes.content[0].children[0].text)
  console.log(post[0].attributes.content[1].children[0].text)

  const paragraphOne = post[0].attributes.content[0].children[0].text;
  const paragraphTwo = post[0].attributes.content[1].children[0].text;
  const paragraphThree = post[0].attributes.content[2].children[0].text
  const paragraphFour = post[0].attributes.content[3].children[0].text;
  const paragraphFive = post[0].attributes.content[4].children[0].text;
  const paragraphSix = post[0].attributes.content[5] ? post[0].attributes.content[5].children[0].text : "";


  const postImageUrl = `http://localhost:1337${post[0].attributes.Image.data.attributes.url}`
  const imageWidth = post[0].attributes.Image.data.attributes.width
  const imageHeigt = post[0].attributes.Image.data.attributes.height
  const imageMediumHeight = post[0].attributes.Image.data.attributes.formats.medium.height
  const imageMediumWidth = post[0].attributes.Image.data.attributes.formats.medium.width
  // console.log(post[0].attributes.Image.data.attributes.formats.thumbnail)


  return (
    <div>
      <Navbar />
      <div className="card p-2 ">
        <h5 className="card-title text-center display-6">{post[0].attributes.title}</h5>
        <Image
          src={postImageUrl}
          height={imageMediumHeight}
          width={imageMediumWidth}
          className="m-auto img-fluid card-image"
        />
        <article>
        <h6 className="card-text lead p-1 m-1">{paragraphOne}</h6>
        <h6 className="card-text lead p-1 m-1">{paragraphTwo}</h6>
        <h6 className="card-text lead p-1 m-1">{paragraphThree}</h6>
        <h6 className="card-text lead p-1 m-1">{paragraphFour}</h6>
        <h6 className="card-text lead p-1 m-1">{paragraphFive}</h6>
        </article>
      </div>
      <Footer />
    </div>

  )
}
export default PostPage
