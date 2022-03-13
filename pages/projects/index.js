import AppLayout from "/components/Layouts/AppLayout";
import PostTitle from "../../components/Post";
import Head from 'next/head'

export default function Projects() {
  return (
    <AppLayout>
      <Head>
      <title>Djilali Tabbouche: Projects</title>
      </Head>

      <div className="p-6 mt-5 mb-0 bg-white rounded-xl">
        
      </div>
    </AppLayout>
  )
}


export async function getStaticProps(context) {
  const result = await fetch('http://localhost:1337/api/posts?sort[0]=createdAt:desc', {
      headers: {
        Authorization: 'Bearer 91bc8c5dd2059bfe409b7555f4d5b9d5cbcf3070c6c97eaf2e894f9fd6116a2c83d394553630e082e0b67a15a2fef81283095c78166cc974a56bc18e94f14235158e40db5bf40470ecc52297143f45d02601ecf6fa31ba4d00ebb9ba04a2338b38941d47b677458badb35622f88a0a4249085f18dc07cb38ca02a749b777f1af'
      }
    }
  );
  const data = await result.json()
  //console.log(data.data)
  return {
    props: {
      posts: { data: data.data }
    }
  }
}