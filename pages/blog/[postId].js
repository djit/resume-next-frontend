import AppLayout from "/components/Layouts/AppLayout";
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

export default function Post({ post }) {
  return (
    <AppLayout>
      <Head>
      <title>Djilali Tabbouche - Blog - { post.title }</title>
      <base target="_blank"/>
      </Head>

      <div className="p-6 mt-5 mb-0 bg-white rounded-xl">
        <div className="flex items-center justify-between">
            <span className="font-light text-gray-600 text-md">{ new Date(post.publicPublishedAt).toDateString() }</span>
            <span className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded">
                { post.category }
            </span>
        </div>
        <div
          className="pb-6 pt-6 leading-6 text-black border-t-0 border-b border-gray-100 border-solid box-border border-x-0"
        >
          <h2
            className="block m-0 font-sans text-xl font-semibold leading-tight border-0 border-solid sm:text-2xl sm:leading-10 md:text-3xl md:leading-none box-border text-slate-800"
          >
            { post.title }
          </h2>
        </div>

        <div
          className="py-0 max-w-none text-base sm:py-4 text-slate-800"
        >
          { post.image ?
            <p className="mx-0 font-light leading-7 border-0 border-solid box-border">
              <Image
                src={post.image}
                width={800}
                height={600}
                alt={ post.title }
                className="block my-8 max-w-full h-auto align-middle border-0 border-solid box-border"
              />
            </p>
            : ''
          }

          <p className="my-0 mx-0 font-light leading-7 border-0 prose">
          <ReactMarkdown>{ post.content }</ReactMarkdown>
          </p>
        </div>

      </div>
    </AppLayout>
  )
}


export async function getStaticPaths() {
  const result = await fetch(process.env.STRAPI_BACKEND_API_ENDPOINT, {
      headers: {
        Authorization: 'Bearer ' + process.env.STRAPI_BACKEND_API_KEY
      }
    }
  );
  const data = await result.json()
  //console.log(data.data)
  const paths = data.data.map((post) => ({
    params: { postId: post.attributes.slug },
  }))

  return { paths, fallback: false }
}


export async function getStaticProps({ params }) {
  const result = await fetch(`${process.env.STRAPI_BACKEND_API_ENDPOINT}?filters[slug]=${params.postId}&populate=*`, {
      headers: {
        Authorization: 'Bearer ' + process.env.STRAPI_BACKEND_API_KEY
      }
    }
  );
  const data = await result.json()
  const post = data.data[0].attributes
  //console.log(post)
  if (post.images.data) {
    post.image = process.env.STRAPI_BACKEND_MEDIA_HOST + post.images.data[0].attributes.url // add main image full url to post object
    delete post.images
  }
  return {
    props: { post },
    revalidate: 60 //revalidate every minute
  }
}