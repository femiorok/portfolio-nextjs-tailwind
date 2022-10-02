import React, { Fragment } from 'react'
import afro from '../../public/afro_screenshot.png'
import sony from '../../public/sony_screenshot.png'
import church from '../../public/church_screenshot.png'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import { useState } from 'react'

const Projects = () => {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className='flex flex-col items-center text-center w-screen' id='projects'>
    <p className="name text-center text-transparent font-extrabold text-5xl uppercase my-20"
    >
      Projects
    </p>
      <div className='w-[90vw]'>
      <p className="text-center font-semibold text-3xl bg-clip-text bg-gradient-to-br from-[#00C2FF] to to-[#0066FF] text-transparent"
    >
      Afrobeats Encyclopedia
    </p>
    <div className='w-full flex justify-center gap-4 my-4'>
    <a href='https://afrobeats-encyclopedia-nextjs.vercel.app/'>
      <button className='rounded-md font-semibold text-white hover:text-blue-500 transition-colors duration-300'>
        Demo
      </button>
    </a>
    <a href='https://github.com/femiorok/afrobeats-directory-nextjs'>
      <button className=' rounded-md font-semibold text-white hover:text-blue-500 transition-colors duration-300'>
        Repo
      </button>
    </a>
    </div>
    <div className='lg:w-[40vw] w-[80vw] mx-auto mb-8 block'>
    <Image src={afro} layout='responsive' placeholder='blur' quality="50" />
    </div>
        <div className='lg:w-[40vw] w-[80vw] mx-auto px-2'>
        <Tab.Group>
        <Tab.List>
          <div className="flex space-x-1 border p-1">
          <Tab
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm font-medium leading-5',
                       selected
                    ? 'bg-gradient-to-r from-blue-400 to-blue-700 text-white bg-clip-border'
                    : 'text-white hover:text-white'
                )
              }
            >
              Description
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm font-medium leading-5',
                  selected
                    ? 'bg-gradient-to-r from-blue-400 to-blue-700 text-white bg-clip-border'
                    : 'text-blue-100 hover:text-white'
                )
              }
            >
              Technologies
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm font-medium leading-5',
                  selected
                    ? 'bg-gradient-to-r from-blue-400 to-blue-700 text-white bg-clip-border'
                    : 'text-blue-100 hover:text-white'
                )
              }
            >
              Roadblocks
            </Tab>
          </div>
        </Tab.List>
        <Tab.Panels>
          <div className='text-sm font-medium leading-5 p-3'>
          <Tab.Panel
              className={classNames(
                'bg-black text-white p-3',

              )}
            >A web app built on Spotify's API data that aggregates information on African music for people to explore and find new songs
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                ' bg-black text-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >React, Next.JS, Tailwind CSS, Firebase DB, Google Cloud Functions, Spotify API
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                ' bg-black text-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >Spotify's API endpoints don't make all necessary data available, thus 3rd party APIs are used as well. Additionally, in order to get certain data, a loop of API calls has to be performed e.g. getting a list of tracks from a certain playlist, via a list of 20+ playlists. To avoid running into API limits, data is stored in Firebase DB and run on a schedule via a chron job.
            </Tab.Panel>
          </div>
        </Tab.Panels>
        </Tab.Group>
        </div>
      </div>
      <div className='w-[90vw] mt-14 flex flex-col items-center'>
        <p className="text-center font-semibold text-2xl  bg-clip-text bg-gradient-to-br from-[#00C2FF] to to-[#0066FF] text-transparent my-5"
        >
          Sony Lens Directory
        </p>
        <div className='w-full flex justify-center gap-4 my-4'>
        <a href='https://sony-lens-library-nextjs.vercel.app/'>
          <button className='font-semibold text-white hover:text-blue-500 transition-colors duration-300'>
          Demo
          </button>
        </a>
        <a href='https://github.com/femiorok/sony-lens-library-nextjs'>
          <button className='rounded-md font-semibold text-white hover:text-blue-500 transition-colors duration-300'>
            Repo
          </button>
        </a>
        </div>
        <div className='lg:w-[40vw] w-[80vw] mx-auto mb-8 block'>
    <Image src={sony} layout='responsive' placeholder='blur' quality="50" />
    </div>
        <div className='lg:w-[40vw] w-[80vw] mx-auto px-2'>
        <Tab.Group>
        <Tab.List>
          <div className="flex space-x-1 border p-1">
          <Tab
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm font-medium leading-5',
                  selected
                    ? 'bg-gradient-to-r from-blue-400 to-blue-700 text-white bg-clip-border'
                    : 'text-blue-100 hover:text-white'
                )
              }
            >
              Description
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm font-medium leading-5',
                  selected
                    ? 'bg-gradient-to-r from-blue-400 to-blue-700 text-white bg-clip-border'
                    : 'text-blue-100 hover:text-white'
                )
              }
            >
              Technologies
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm font-medium leading-5',
                  selected
                    ? 'bg-gradient-to-r from-blue-400 to-blue-700 text-white bg-clip-border'
                    : 'text-blue-100 hover:text-white'
                )
              }
            >
              Roadblocks
            </Tab>
          </div>
        </Tab.List>
        <Tab.Panels>
          <div className='text-sm font-medium leading-5 p-3'>
          <Tab.Panel
              className={classNames(
                'bg-black text-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >An internal-employee tool built on the Best Buy API that allows salesmen to quickly check stock and prices on Sony camera lenses, and find recommendations for clients based on genre of photography
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                'bg-black text-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >React, Next.JS, Tailwind CSS, Best Buy API
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                'bg-black text-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >Certain website data is extremely sensitive to updates such as stock checking; to stay within API call limit, cacheing has to be used. Lenses also have certain characteristics that aren't available via Best Buy's API, so data has to be manually sorted for certain functions. A database will be added to more efficiently receive certain data that isn't updated often, and Puppeteer JS will be added for web scraping data for sample images, lens reviews, etc.
            </Tab.Panel>
          </div>
        </Tab.Panels>
        </Tab.Group>
        </div>
      </div>
      <div className='w-[90vw] mt-14'>
        <p className="text-center font-semibold text-2xl  bg-clip-text bg-gradient-to-br from-[#00C2FF] to to-[#0066FF] text-transparent my-5"
        >
          Church Webapp + Blog
        </p>
        <div className='w-full flex justify-center gap-4 my-4'>
        <a href='https://cac-heavenly-voyage-website-nextjs-5zmrsv7q2-femiorok.vercel.app/'>
          <button className=' rounded-md  font-semibold text-white hover:text-blue-500 transition-colors duration-300'>
          Demo
          </button>
        </a>
        <a href='https://github.com/femiorok/cac-heavenly-voyage-website-nextjs hover:text-blue-500 transition-colors duration-300'>
          <button className='rounded-md font-semibold text-white'>
            Repo
          </button>
        </a>
        </div>
        <div className='lg:w-[40vw] w-[80vw] mx-auto mb-8 block'>
    <Image src={church} layout='responsive' placeholder='blur' quality="50" />
    </div>
        <div className='lg:w-[40vw] w-[80vw] mx-auto px-2'>
        <Tab.Group>
        <Tab.List>
          <div className="flex space-x-1 border p-1">
          <Tab
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm font-medium leading-5',
                  selected
                    ? 'bg-gradient-to-r from-blue-400 to-blue-700 text-white bg-clip-border'
                    : 'text-blue-100 hover:text-white'
                )
              }
            >
              Description
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm font-medium leading-5',
                  selected
                    ? 'bg-gradient-to-r from-blue-400 to-blue-700 text-white bg-clip-border'
                    : 'text-blue-100 hover:text-white'
                )
              }
            >
              Technologies
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm font-medium leading-5',
                  selected
                    ? 'bg-gradient-to-r from-blue-400 to-blue-700 text-white bg-clip-border'
                    : 'text-blue-100 hover:text-white'
                )
              }
            >
              Roadblocks
            </Tab>
          </div>
        </Tab.List>
        <Tab.Panels>
          <div className='text-sm font-medium leading-5 p-3'>
          <Tab.Panel
              className={classNames(
                'bg-black text-white p-3'
              )}
            >A fast-loading, responsive static church website displaying relevant information for members and a blog for articles written by the pastor and his team.
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                'bg-black text-white p-3',
              )}
            >Next.JS, Sanity CMS, Tailwind CSS 
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                'bg-black text-white p-3',
              )}
            >Site was required to be fully mobile responsive for many members who don't have computers. Headless CMS has to be accessible for non-devs to be able to add blog 
            content without needing to run a build command. Design to be updated, prioritizing readability and accessibility 
            </Tab.Panel>
          </div>
        </Tab.Panels>
        </Tab.Group>
        </div>
      </div>
      
      
      
      
    </div>

  )
}

export default Projects