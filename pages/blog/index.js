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
  const response = await fetch(process.env.STRAPI_BACKEND_API_ENDPOINT + '?sort[0]=publicPublishedAt:desc', {
      headers: {
        Authorization: 'Bearer ' + process.env.STRAPI_BACKEND_API_KEY
      }
    }
  );
  
  
  if (response.status >= 200 && response.status <= 299) {
    const data = await response.json()
    const posts = data.data
    //console.log(posts)
    return {
      props: { posts },
      revalidate: 60 //revalidate every minute
    }
  } else {
    // Handle errors
    console.log(response.status, response.statusText);
    return
  }

  
}