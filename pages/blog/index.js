import AppLayout from "/components/Layouts/AppLayout";
import PostTitle from "../../components/Post";
import Head from 'next/head'

export default function Blog({ posts }) {
  return (
    <AppLayout>
      <Head>
      <title>Djilali Tabbouche: Blog</title>
      </Head>

      <div className="p-6 mt-5 mb-0 bg-white rounded-xl">
        { posts.map(post => (
          <PostTitle post={ post.attributes } key={ post.id } />
        ))}
      </div>
    </AppLayout>
  )
}


export async function getServerSideProps(context) {
  const result = await fetch(process.env.STRAPI_BACKEND_API_ENDPOINT + '?sort[0]=publicPublishedAt:desc', {
      headers: {
        Authorization: 'Bearer ' + process.env.STRAPI_BACKEND_API_KEY
      }
    }
  );
  const data = await result.json()
  const posts = data.data
  //console.log(posts)
  return {
    props: { posts }
  }
}