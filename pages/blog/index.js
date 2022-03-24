import AppLayout from "/components/Layouts/AppLayout";
import PostTitle from "../../components/Post";
import Head from 'next/head'

export default function Blog({ resume, posts }) {
  return (
    <AppLayout resume={ resume }>
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
  const posts_response = await fetch(process.env.STRAPI_BACKEND_API_ENDPOINT + '?sort[0]=publicPublishedAt:desc', {
    headers: {
      Authorization: 'Bearer ' + process.env.STRAPI_BACKEND_API_KEY
    }
  });
  
  const resume_response = await fetch(process.env.STRAPI_BACKEND_MEDIA_HOST + '/api/resumes?populate=*', {
    headers: {
      Authorization: 'Bearer ' + process.env.STRAPI_BACKEND_API_KEY
    }
  });

  
  if (posts_response.status >= 200 && posts_response.status <= 299) {
    const posts_data = await posts_response.json()
    const posts = posts_data.data

    const resume_data = await resume_response.json()
    const resume = resume_data.data[0].attributes
    //console.log(resume)
    return {
      props: { resume, posts }
    }
  } else {
    // Handle errors
    console.log(response.status, response.statusText);
    return
  }

  
}