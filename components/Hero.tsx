import Link from 'next/link'
import data from '../data/data.json'
import ReactMarkdown from 'react-markdown'

const Hero = () => {
  return (
    <div className="body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-center">
          <img
            className="object-cover object-center rounded-full border-8 border-gray-400 h-[400px]"
            alt="hero"
            src={data.about.image}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-14 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <p className="font-light">{data.about.title}</p>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold">Isaiah Hamilton</h1>
          <p className="mb-8 leading-relaxed text-gray-400 dark:text-gray-100">
            <ReactMarkdown>{data.about.description}</ReactMarkdown>
          </p>
          <div className="flex justify-center">
            <Link href={data.url.resume}>
              <a target="_blank">
                <button className="inline-flex py-2 px-6 focus:outline-none rounded-full text-base transition duration-500 ease-in-out shadow-xl border-2 border-brand-500 dark:bg-[#333333] hover:bg-brand-500 dark:hover:bg-brand-500 hover:text-white">
                  Resume
                </button>
              </a>
            </Link>
            <Link href={`mailto:${data.url.email}`}>
              <a>
                <button className="inline-flex py-2 px-6 focus:outline-none rounded-full text-base transition duration-500 ease-in-out shadow-xl border-2 border-gray-200 dark:border-white dark:bg-[#333333] hover:bg-gray-200 dark:hover:bg-white hover:text-gray-600 ml-2">
                  Contact
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
