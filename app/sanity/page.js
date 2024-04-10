import { createClient } from "@sanity/client"
// import { client } from "@/utils/sanity/client"
import Navbar from "../components/Navbar"
import Link from "next/link"
import Image from "next/image"
import Footer from "../components/Footer"


export const client = createClient({
    projectId: "nucimt53",
    dataset: "production",
    apiVersion: "2024-03-11",
    // Set to `true` for production environments
    useCdn: false,
})


// Fetch content with GROQ
async function getContent() {
    const CONTENT_QUERY = `*[_type == "post"] {
  ...,
  author->,
  mainImage {
    ...,
    asset->
  },
  body
}
`
    const content = await client.fetch(CONTENT_QUERY)
    return content
}

// Log content to console
// getContent().then(content => console.log(content[0].mainImage.asset.url))

// Insert the return component calling `getContent()` below

const posts = await getContent()
console.log(posts[0])

// Insert the return component calling `getContent()` below

async function Sanity(props) {

    const title = props.params.title

    console.log(title)


    return (
        <div>
            <Navbar />
            {
                posts.map((post, index) => (
                    <div key={index} className="card p-2 m-2">
                        <div className="d-flex align-items-center justify-content-between">
                            <Image src={post.mainImage.asset.url} height={post.mainImage.asset.metadata.dimensions.height} width={post.mainImage.asset.metadata.dimensions.width} />
                            <h5 className="card-title text-center">{post.title}</h5>
                        </div>
                    </div>
                ))
            }
            <Footer/>
        </div >
    )
}
export default Sanity
