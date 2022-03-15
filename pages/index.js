import AppLayout from "/components/Layouts/AppLayout";
import Head from "next/head";
import Link from 'next/link';

export default function Home() {
  return (
    <AppLayout>
      <Head>
      <title>Djilali Tabbouche</title>
      </Head>

      <div className="p-6 mt-5 mb-0 bg-white rounded-xl">
        {/* <!-- Start About Me Block --> */}
        <h2 className="mx-0 mt-0 mb-5 text-lg font-semibold leading-7">About me</h2>
        <p className="mx-0 mt-0 mb-5 text-gray-600">
          From dev eng., architecture, consulting, entrepreneurship to CTO managing a team of 50+: it&apos;s all about the people and the work culture.<br/>
          I&apos;m looking for passionate team members sharing a clear vision and a no-BS management who will drive us towards a common goal.
        </p>

        <div className="flex flex-col">
          <Link
            href="mailto:dtabbouche@gmail.com"
            passHref
            target={'_blank'}
            rel={'noreferrer'} 
          >
            <a className="flex items-center font-medium text-violet-500 duration-300 ease-in-out cursor-pointer hover:text-violet-600">dtabbouche@gmail.com</a>
          </Link>

          <ul className="flex p-0 mx-0 mt-4 mb-0">
            <li className="text-left">
              <Link
                href="https://www.facebook.com/djilali.tabbouche"
                passHref
                target={'_blank'}
                rel={'noreferrer'} 
                className="duration-300 ease-in-out cursor-pointer hover:text-violet-600"
              >
                <i
                  className="inline-block text-2xl not-italic leading-none normal-case bx bxl-facebook-circle"
                ></i>
              </Link>
            </li>
            <li className="mr-0 ml-5 text-left">
              <Link
                href="https://twitter.com/djit"
                passHref
                target={'_blank'}
                rel={'noreferrer'} 
                className="duration-300 ease-in-out cursor-pointer hover:text-violet-600"
              >
                <i
                  className="inline-block text-2xl not-italic leading-none normal-case bx bxl-twitter"
                ></i>
              </Link>
            </li>
            <li className="mr-0 ml-5 text-left">
              <Link
                href="https://github.com/djit"
                passHref
                target={'_blank'}
                rel={'noreferrer'} 
                className="duration-300 ease-in-out cursor-pointer hover:text-violet-600"
              >
                <i
                  className="inline-block text-2xl not-italic leading-none normal-case bx bxl-github"
                ></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- End About Me Block --> */}

      <div className="p-6 mt-5 mb-0 bg-white rounded-xl">
        {/* <!-- Start Experience Block --> */}
        <h2 className="mx-0 mt-0 mb-5 text-lg font-semibold leading-7">
          Experience
        </h2>
        <div className="mb-5 sm:flex sm:items-start">
          <div className="flex flex-shrink-0 justify-center items-center w-12 h-12 text-white rounded-xl">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cover" style={{ backgroundImage: `url('/assets/img/afd-logo.jpeg')` }}>
            </div>
          </div>

          <div className="my-0 w-full sm:my-0 sm:mr-0 sm:ml-4">
            <div className="sm:flex sm:justify-between">
              <div className="">
                <div className="font-medium">CTO</div>
                <div className="flex mt-1 mb-0">
                  <div
                    className="flex items-center text-sm font-medium leading-5 text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="block w-4 h-4 align-middle"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        className=""
                      ></path>
                    </svg>
                    <span className="mr-0 ml-1">Agence Française de Developpement</span>
                  </div>
                  <div
                    className="flex items-center mr-0 ml-5 text-sm font-medium leading-5 text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="block w-4 h-4 align-middle"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        className=""
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        className=""
                      ></path>
                    </svg>
                    <span className="mr-0 ml-1">Paris</span>
                  </div>
                </div>
              </div>
              <div className="my-0 sm:my-0 sm:text-right">
                <div
                  className="inline-flex py-px px-2 text-xs font-medium leading-4 text-right text-violet-500 capitalize bg-violet-100 rounded-lg"
                >
                  Full time
                </div>
                <div
                  className="flex items-center mt-2 mb-0 text-sm font-medium leading-5 text-right text-gray-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="block w-4 h-4 align-middle"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      className=""
                    ></path>
                  </svg>
                  <span className="mr-0 ml-1">April 2018 – Present</span>
                </div>
              </div>
            </div>
            <div className="mx-0 mt-5 mb-0 text-gray-600">
              Agence Française de Développement (AFD) Group is a public institution that implements France&apos;s policy in the areas of development and international solidarity. Development is one of the country&apos;s three pillars for external action, along with diplomacy and defence.
              Our mission is to contribute to the economic, social, and environmental progress of low and middle-income countries.<br/>
              As Group CTO, I am leading the infrastructure team providing global enterprise-wide data center, server, storage, networking, virtualization, security, virtual desktop, converged voice and video, mobile/BYOD services to our users and partners.<br/>
              <ul className="mt-2">
                <li>
                  - Teams and org :<br/>
                  6 managers, 52 people. 10+ M€ budget. 100 offices, over 3500 employees in over 80 countries, 25 technical projects to change complex infrastructures.
                </li>
                <li>
                  - Managed activities :<br/>
                  Business activity monitoring, service delivery of infrastructures, assets management, security engineering & administration.
                </li>
                <li>
                  - Successfully implemented :<br/>
                  Setting up middle management org, ITIL Service Operation processes (request, incident, problems), remote site deployment team and process during Covid restrictions time, IT business activity reporting, Cloud offloading infrastructure strategy, CI/CD (Gitlab, Vault, GoCD, Nexus, Ansible)
                </li>
              </ul>
            </div>
            <div
              className="mt-5 mb-0 border-t-0 border-b border-gray-200 border-solid box-border border-x-0"
            ></div>
          </div>
        </div>

        <div className="mb-5 sm:flex sm:items-start">
        <div className="flex flex-shrink-0 justify-center items-center w-12 h-12 text-white rounded-xl">
            {/* <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cover" style={{ backgroundImage: `url('/assets/img/trademedia-logo.gif')` }}> */}
            </div>
          </div>

          <div className="my-0 w-full sm:my-0 sm:mr-0 sm:ml-4">
            <div className="sm:flex sm:justify-between">
              <div className="">
                <div className="font-medium">Software Architect / Owner</div>
                <div className="flex mt-1 mb-0">
                  <div
                    className="flex items-center text-sm font-medium leading-5 text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="block w-4 h-4 align-middle"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        className=""
                      ></path>
                    </svg>
                    <span className="mr-0 ml-1">TRADEMEDiA</span>
                  </div>
                  <div
                    className="flex items-center mr-0 ml-5 text-sm font-medium leading-5 text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="block w-4 h-4 align-middle"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        className=""
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        className=""
                      ></path>
                    </svg>
                    <span className="mr-0 ml-1">Dubai</span>
                  </div>
                </div>
              </div>
              <div className="my-0 sm:my-0 sm:text-right">
                <div
                  className="inline-flex py-px px-2 text-xs font-medium leading-4 text-right text-violet-500 capitalize bg-violet-100 rounded-lg"
                >
                  Full time
                </div>
                <div
                  className="flex items-center mt-2 mb-0 text-sm font-medium leading-5 text-right text-gray-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="block w-4 h-4 align-middle"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      className=""
                    ></path>
                  </svg>
                  <span className="mr-0 ml-1">May 2005 – Sept 2017</span>
                </div>
              </div>
            </div>
            <div className="mx-0 mt-5 mb-0 text-gray-600">
              TRADEMEDiA was started in Dubai Internet City in 2005 following our move to the UAE.<br/>
              For 15 years, I&apos;ve been managing both the business side of the company and the numerous tech projects we&apos;ve built for our customers:<br/>
              <ul className="text-gray-600">
                  <li className="list-disc ml-5">CMS, Properties Management Systems, Web Scrappers</li>
                  <li className="list-disc ml-5">Project management, software development and full operation management of a regional real estate portal(caza.ae)</li>
                  <li className="list-disc ml-5">Project management, software development and full operation management of a regional B2B marketplace(industrialsdirectory.com)</li>
                  <li className="list-disc ml-5">Stack: MongoDb, Python, Php, AWS S3+CloudFront, Node.js, Ubuntu VPS, Nginx</li>
              </ul>
            </div>
            <div
              className="mt-5 mb-0 border-t-0 border-b border-gray-200 border-solid box-border border-x-0"
            ></div>
          </div>
        </div>

        <div className="mb-5 sm:flex sm:items-start">
          <div
            className="flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-slate-100 rounded-xl"
            style={{ backgroundColor: "rgb(241 245 249)" }}
          >
            <i
              className="inline-block text-3xl not-italic leading-none normal-case"
            ></i>
          </div>

          <div className="my-0 w-full sm:my-0 sm:mr-0 sm:ml-4">
            <div className="sm:flex sm:justify-between">
              <div className="">
                <div className="font-medium">IT Consultant</div>
                <div className="flex mt-1 mb-0">
                  <div
                    className="flex items-center text-sm font-medium leading-5 text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="block w-4 h-4 align-middle"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        className=""
                      ></path>
                    </svg>
                    <span className="mr-0 ml-1">Freelance</span>
                  </div>
                  <div
                    className="flex items-center mr-0 ml-5 text-sm font-medium leading-5 text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="block w-4 h-4 align-middle"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        className=""
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        className=""
                      ></path>
                    </svg>
                    <span className="mr-0 ml-1">Paris</span>
                  </div>
                </div>
              </div>
              <div className="my-0 sm:my-0 sm:text-right">
                <div
                  className="inline-flex py-px px-2 text-xs font-medium leading-4 text-right text-violet-500 capitalize bg-violet-100 rounded-lg"
                >
                  Full time
                </div>
                <div
                  className="flex items-center mt-2 mb-0 text-sm font-medium leading-5 text-right text-gray-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="block w-4 h-4 align-middle"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      className=""
                    ></path>
                  </svg>
                  <span className="mr-0 ml-1">March 2001 – March 2005</span>
                </div>
              </div>
            </div>
            <p className="mx-0 mt-5 mb-0 text-gray-600">
              Delivered consulting and software development services for an extensive list of clients: IBM, ST Microeletronics, Banque du Louvre, EADS Group, Cartier International.
            </p>
            <div
              className="mt-5 mb-0 border-t-0 border-b border-gray-200 border-solid box-border border-x-0"
            ></div>
          </div>
        </div>

        <div className="sm:flex sm:items-start">
          <div
            className="flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-slate-100 rounded-xl"
            style={{ backgroundColor: "rgb(241 245 249)" }}
          >
            <i
              className="inline-block text-3xl not-italic leading-none normal-case"
            ></i>
          </div>

          <div className="my-0 w-full sm:my-0 sm:mr-0 sm:ml-4">
            <div className="sm:flex sm:justify-between">
              <div className="">
                <div className="font-medium">Software Engineer</div>
                <div className="flex mt-1 mb-0">
                  <div
                    className="flex items-center text-sm font-medium leading-5 text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="block w-4 h-4 align-middle"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        className=""
                      ></path>
                    </svg>
                    <span className="mr-0 ml-1">Mediapps</span>
                  </div>
                  <div
                    className="flex items-center mr-0 ml-5 text-sm font-medium leading-5 text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="block w-4 h-4 align-middle"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        className=""
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        className=""
                      ></path>
                    </svg>
                    <span className="mr-0 ml-1">Paris</span>
                  </div>
                </div>
              </div>
              <div className="my-0 sm:my-0 sm:text-right">
                <div
                  className="inline-flex py-px px-2 text-xs font-medium leading-4 text-right text-violet-500 capitalize bg-violet-100 rounded-lg"
                >
                  Full time
                </div>
                <div
                  className="flex items-center mt-2 mb-0 text-sm font-medium leading-5 text-right text-gray-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="block w-4 h-4 align-middle"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      className=""
                    ></path>
                  </svg>
                  <span className="mr-0 ml-1">June 2001 – December 2001</span>
                </div>
              </div>
            </div>
            <div className="mx-0 mt-5 mb-0 text-gray-600">
              Managed the intranet product integration with clients&apos; infrastructure.<br/>
              Led a complex interdisciplinary project:
              <ul className="text-gray-600">
                <li className="list-disc ml-5">Code refactoring between two development teams.</li>
                <li className="list-disc ml-5">Proof of concept development for pre-sales support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Experience Block --> */}

      <div className="p-6 mt-5 mb-0 bg-white rounded-xl">
        {/* <!-- Start Education Block --> */}
        <h2 className="mx-0 mt-0 mb-5 text-lg font-semibold leading-7">
          Education
        </h2>
        <div className="sm:flex sm:items-start">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cover" style= {{backgroundImage: `url('/assets/img/paris7-logo.jpeg')` }}>
          </div>

          <div className="my-0 w-full sm:my-0 sm:mr-0 sm:ml-4">
            <div className="items-end sm:flex sm:justify-between">
              <div className="">
                <div className="font-medium">Associate of Science<br/>Theoretical and Mathematical Physics</div>
                <div className="flex mt-1 mb-0">
                  <div
                    className="flex items-center text-sm font-medium leading-5 text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="block w-4 h-4 align-middle"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" className=""></path>
                      <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        className=""
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        className=""
                      ></path>
                    </svg>
                    <span className="mr-0 ml-1">Université Denis Diderot</span>
                  </div>
                  <div
                    className="flex items-center mr-0 ml-5 text-sm font-medium leading-5 text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="block w-4 h-4 align-middle"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        className=""
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        className=""
                      ></path>
                    </svg>
                    <span className="mr-0 ml-1">Paris</span>
                  </div>
                </div>
              </div>
              <div className="my-0 sm:my-0 sm:text-right">
                <div
                  className="flex items-center text-sm font-medium leading-5 text-right text-gray-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="block w-4 h-4 align-middle"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      className=""
                    ></path>
                  </svg>
                  <span className="mr-0 ml-1">1994 – 1997</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Education Block --> */}

    </AppLayout>
  )
}
