import Link from 'next/link';
import Navigation from './Navigation';
import Image from 'next/image'

export default function AppLayout({ resume, children }) {

  return (
    <main className="p-4 mx-auto w-full max-w-5xl leading-6 text-black lg:max-w-screen-lg xl:max-w-screen-xl sm:max-w-screen-sm sm:p-5 md:max-w-screen-md">
      <div className="grid gap-5 text-black lg:grid-cols-3">
        <div className="">
          
          {/* <!-- Start Left Side --> */}
          <div className="overflow-hidden rounded-xl">
            {/* <!-- Start User Block --> */}
            <div
              className="h-32 bg-cover"
              style={{ backgroundImage: `url('/assets/img/cover.jpg')` }}
            >
            </div>
            <div className="relative px-6 pt-12 pb-6 bg-white">
              <span
                className="absolute top-4 right-7 py-px px-2 text-xs font-semibold leading-4 text-white uppercase bg-green-400 rounded-full"
                >Open
              </span>
              <Link 
                href="/"
                passHref
                className="cursor-pointer"
              >
              <div className="absolute -top-10 ">
                <Image
                  src="https://github.com/djit.png"
                  width={76}
                  height={76}
                  alt="@djit"
                  className="w-20 max-w-full h-20 align-middle rounded-xl border-2 border-white border-solid box-border"
                />
              </div>
              </Link>
              <div className="mb-1 text-lg font-semibold leading-7">
                { resume.card.name }
              </div>
              <div className="mb-6 text-sm leading-5 text-gray-400">
              { resume.card.title }
              </div>
              <div className="flex">
                <button
                  className="py-3 px-0 m-0 w-full text-base font-semibold text-center text-white normal-case bg-violet-500 bg-none rounded-l-lg duration-200 ease-in-out cursor-pointer"
                >
                  <Link
                    href="/assets/files/djilali_tabbouche.pdf"
                    passHref
                    target="_blank"
                    rel={'noreferrer'}
                  >
                    Download CV
                  </Link>
                </button>
                <button
                  className="py-3 px-5 m-0 text-center text-white normal-case bg-violet-600 bg-none rounded-r-lg cursor-pointer"
                >
                  <Link
                    href="/assets/files/djilali_tabbouche.pdf"
                    passHref
                    target="_blank"
                    rel={'noreferrer'}
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="block w-6 h-6 align-middle"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      className=""
                    ></path>
                  </svg>
                  </Link>
                </button>
              </div>
            </div>
          </div>
          {/* <!-- End User Block --> */}

          <div className="p-6 mt-5 mb-0 bg-white rounded-xl">
            {/* <!-- Start Info Block --> */}
            <h2 className="mx-0 mt-0 mb-5 text-lg font-semibold leading-7">
              Information
            </h2>
            <div className="">
              <div className="flex justify-between">
                <div className="text-gray-400">Location</div>
                <div className="font-medium text-right text-gray-600">{ resume.information.location }</div>
              </div>
              <div className="flex justify-between mt-4 mb-0">
                <div className="text-gray-400">Experience</div>
                <div className="font-medium text-right text-gray-600">{ resume.information.experience }</div>
              </div>
              <div className="flex justify-between mt-4 mb-0">
                <div className="text-gray-400">Availability</div>
                <div className="font-medium text-right text-gray-600">{ resume.information.availability }</div>
              </div>
              <div className="flex justify-between mt-4 mb-0">
                <div className="text-gray-400">Relocation</div>
                <div className="font-medium text-right text-gray-600">{ resume.information.relocation ?'Yes' : 'No' }</div>
              </div>
              <div className="flex justify-between mt-4 mb-0">
                <div className="text-gray-400">Remote</div>
                <div className="font-medium text-right text-gray-600">{ resume.information.remote ?'Yes' : 'No' }</div>
              </div>
            </div>
          </div>
          {/* <!-- End Info Block --> */}

          <div className="flow-root p-6 mt-5 mb-0 bg-white rounded-xl">
            {/* <!-- Start Skills Block --> */}
            <h2 className="mx-0 mt-0 mb-5 text-lg font-semibold leading-7">Skills</h2>
            <div className="flex flex-wrap -m-2">
            { resume.skills.data.map(skill => (
              <span
                key={ skill.id }
                className="py-1 px-4 m-1 text-sm font-medium leading-5 text-violet-500 bg-violet-100 rounded-lg"
                >{ skill.attributes.name }
              </span>
            ))}
            </div>
          </div>
          {/* <!-- End Skills Block --> */}

          <div className="flow-root p-6 mt-5 mb-0 bg-white rounded-xl">
            {/* <!-- Start Built-With Block --> */}
            <h2 className="mx-0 mt-0 mb-2 text-lg font-semibold leading-7">Frontend</h2>
            <div className="text-sm">Built with <Link href="https://nextjs.org/"><a target="_blank"><span className="font-extrabold">Next.js</span></a></Link> + <Link href="https://tailwindcss.com/"><a target="_blank"><span className="font-extrabold">Tailwindcss</span></a></Link> - hosted on <Link href="https://vercel.com/"><a target="_blank">Vercel</a></Link></div>
            
            <h2 className="mx-0 mt-4 mb-2 text-lg font-semibold leading-7">Backend</h2>
            <div className="text-sm">Built with <Link href="https://strapi.io/"><a target="_blank"><span className="font-extrabold">Strapi</span></a></Link> - hosted on <Link href="https://render.com/"><a target="_blank">Render</a></Link></div>

          </div>
          {/* <!-- End Built-With Block --> */}

        </div>
        {/* <!-- End Left Side --> */}

        <div className="lg:col-span-2">
          {/* <!-- Start Right Side --> */}
          
          <div className="px-6 pt-6 pb-0 bg-white rounded-xl">
            <Navigation />
          </div>
          
          {/* Page Content */}
          {children}
          
        </div>
        {/* <!-- End Right Side --> */}
      </div>
    </main>
  );
};
