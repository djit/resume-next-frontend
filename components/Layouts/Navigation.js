import Link from 'next/link';
import { useRouter, userRouter } from 'next/router';


export default function Navigation() {
  const router = useRouter();

  return (
    <ul className="flex p-0 m-0 font-medium">
      <li className="text-left">
        <Link
          href="/"
          passHref
        >
          <a className={`inline-flex pb-5 ${router.pathname == "/" ? "text-violet-500 border-t-0 border-b-2 border-violet-500 border-solid" : ""} duration-300 ease-in-out cursor-pointer box-border border-x-0 hover:border-violet-600 hover:text-violet-600`}>Resume</a>
        </Link>
      </li>
      {/* <li className="mr-0 ml-8 text-left">
        <Link
          href="/projects"
          passHref
        >
          <a className={`inline-flex pb-5 ${router.pathname == "/projects" ? "text-violet-500 border-t-0 border-b-2 border-violet-500 border-solid" : ""} duration-300 ease-in-out cursor-pointer box-border border-x-0 hover:border-violet-600 hover:text-violet-600`}>Projects</a>
        </Link>
      </li> */}
      <li className="mr-0 ml-8 text-left">
        <Link
          href="/blog"
          passHref 
        >
          <a className={`inline-flex pb-5 ${router.pathname.startsWith("/blog") ? "text-violet-500 border-t-0 border-b-2 border-violet-500 border-solid" : ""} duration-300 ease-in-out cursor-pointer box-border border-x-0 hover:border-violet-600 hover:text-violet-600`}>Blog</a>
        </Link>
      </li>
    </ul>
  )
}