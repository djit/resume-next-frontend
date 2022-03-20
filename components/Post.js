import Link from 'next/link'

export default function PostTitle({ post }) {
  return (
      <div className="p-0 bg-white mb-12">
        <div className="flex items-center justify-between">
          <span className="font-light text-gray-600 text-md">{ new Date(post.publicPublishedAt).toDateString() }</span>
          <span className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded">
              { post.category }
          </span>
        </div>
        <div className="mt-2">
          <Link
            href={`/blog/${ post.slug }`}
            passHref
          >
            <h1 className="text-2xl font-bold text-gray-700 hover:underline">
              <a href="#">{ post.title }</a>
            </h1>
          </Link>
          <p className="mt-2 text-gray-600">{ post.summary }</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-blue-500 hover:underline">
            <Link href={`/blog/${ post.slug }`}>Read more</Link>
          </span>
        </div>
      </div>
  )
}