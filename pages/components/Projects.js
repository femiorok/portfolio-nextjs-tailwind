import React, { Fragment } from 'react'
import afro_image from '../../public/afro_image.png'
import lens_image from '../../public/lens_image.png'
import church_image from '../../public/church_image.png'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import { useState } from 'react'

const Projects = () => {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className='flex flex-col items-center' id='projects'>
    <p className="text-center font-extrabold text-4xl uppercase  bg-clip-text bg-gradient-to-br from-[#00C2FF] to to-[#0066FF] text-transparent my-20"
    >
      Projects
    </p>
      <div className='w-[70%] max-w-2xl'>
      <p className="text-center font-semibold text-2xl  bg-clip-text bg-gradient-to-br from-[#00C2FF] to to-[#0066FF] text-transparent my-5"
    >
      Afrobeats Encyclopedia
    </p>
    <div className='w-full flex justify-center gap-4'>
    <a href='https://afrobeats-encyclopedia-nextjs.vercel.app/'>
      <button className='border-2 border-blue-500 rounded-md py-2 px-4 font-semibold shadow-lg shadow-indigo-500/50 text-white'>
        Demo
      </button>
    </a>
    <a href='https://github.com/femiorok/afrobeats-directory-nextjs'>
      <button className='border-2 border-blue-500 rounded-md py-2 px-4 font-semibold shadow-lg shadow-indigo-500/50 text-white'>
        Repo
      </button>
    </a>
    </div>
        <Image src={afro_image} layout='responsive' />
        <div className='className="w-full px-2"'>
        <Tab.Group>
        <Tab.List>
          <div className="flex space-x-1 rounded-xl bg-blue-400/20 p-1">
          <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'border-2 border-blue-900 bg-blue-400/50 text-white'
                    : 'text-blue-100 hover:text-white'
                )
              }
            >
              Description
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'border-2 border-blue-900 bg-blue-400/50 text-white'
                    : 'text-blue-100 hover:text-white'
                )
              }
            >
              Technologies
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'border-2 border-blue-900 bg-blue-400/50 text-white'
                    : 'text-blue-100 hover:text-white'
                )
              }
            >
              Roadblocks
            </Tab>
          </div>
        </Tab.List>
        <Tab.Panels>
          <div className='text-sm font-medium leading-5 rounded-md p-3'>
          <Tab.Panel
              className={classNames(
                'rounded-xl bg-blue-400/50 text-blue-200 p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >A web app built on Spotify's API data that aggregates information on African music for people to explore and find new songs
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                'rounded-xl bg-blue-400/50 text-blue-200 p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >React, Next.JS, Tailwind CSS, Firebase DB, Google Cloud Functions, Spotify API
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                'rounded-xl bg-blue-400/50 text-blue-200 p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >Spotify's API endpoints don't make all necessary data available, thus 3rd party APIs are used as well. Additionally, in order to get certain data, a loop of API calls has to be performed e.g. getting a list of tracks from a certain playlist, via a list of 20+ playlists. To avoid running into API limits, data is stored in Firebase DB and run on a schedule via a chron job.
            </Tab.Panel>
          </div>
        </Tab.Panels>
        </Tab.Group>
        </div>
      </div>
      <div className='w-[70%] max-w-2xl mt-14'>
        <p className="text-center font-semibold text-2xl  bg-clip-text bg-gradient-to-br from-[#00C2FF] to to-[#0066FF] text-transparent my-5"
        >
          Sony Lens Directory
        </p>
        <div className='w-full flex justify-center gap-4'>
        <a href='https://sony-lens-library-nextjs.vercel.app/'>
          <button className='border-2 border-blue-500 rounded-md py-2 px-4 font-semibold shadow-lg shadow-indigo-500/50 text-white'>
          Demo
          </button>
        </a>
        <a href='https://github.com/femiorok/sony-lens-library-nextjs'>
          <button className='border-2 border-blue-500 rounded-md py-2 px-4 font-semibold shadow-lg shadow-indigo-500/50 text-white'>
            Repo
          </button>
        </a>
        </div>
        <Image src={lens_image} layout='responsive' />
        <div className='className="w-full px-2"'>
        <Tab.Group>
        <Tab.List>
          <div className="flex space-x-1 rounded-xl bg-blue-400/20 p-1">
          <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'border-2 border-blue-900 bg-blue-400/50 text-white'
                    : 'text-blue-100 hover:text-white'
                )
              }
            >
              Description
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'border-2 border-blue-900 bg-blue-400/50 text-white'
                    : 'text-blue-100 hover:text-white'
                )
              }
            >
              Technologies
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'border-2 border-blue-900 bg-blue-400/50 text-white'
                    : 'text-blue-100 hover:text-white'
                )
              }
            >
              Roadblocks
            </Tab>
          </div>
        </Tab.List>
        <Tab.Panels>
          <div className='text-sm font-medium leading-5 rounded-md p-3'>
          <Tab.Panel
              className={classNames(
                'rounded-xl bg-blue-400/50 text-blue-200 p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >An internal-employee tool that allows salesmen to quickly check stock and prices on Sony camera lenses, and find recommendations for clients based on genre of photography
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                'rounded-xl bg-blue-400/50 text-blue-200 p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >React, Next.JS, Tailwind CSS, Best Buy API
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                'rounded-xl bg-blue-400/50 text-blue-200 p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >Certain website data is extremely sensitive to updates such as stock checking; to stay within API call limit, cacheing has to be used. Lenses also have certain characteristics that aren't available via Best Buy's API, so data has to be manually sorted for certain functions. A database will be added to more efficiently receive certain data that isn't updated often, and Puppeteer JS will be added for web scraping data for sample images, lens reviews, etc.
            </Tab.Panel>
          </div>
        </Tab.Panels>
        </Tab.Group>
        </div>
      </div>
      <div className='w-[70%] max-w-2xl mt-14'>
        <p className="text-center font-semibold text-2xl  bg-clip-text bg-gradient-to-br from-[#00C2FF] to to-[#0066FF] text-transparent my-5"
        >
          Church Webapp + Blog
        </p>
        <div className='w-full flex justify-center gap-4'>
        <a href='https://cac-heavenly-voyage-website-nextjs-5zmrsv7q2-femiorok.vercel.app/'>
          <button className='border-2 border-blue-500 rounded-md py-2 px-4 font-semibold shadow-lg shadow-indigo-500/50 text-white'>
          Demo
          </button>
        </a>
        <a href='https://github.com/femiorok/cac-heavenly-voyage-website-nextjs'>
          <button className='border-2 border-blue-500 rounded-md py-2 px-4 font-semibold shadow-lg shadow-indigo-500/50 text-white'>
            Repo
          </button>
        </a>
        </div>
        <Image src={church_image} layout='responsive' />
        <div className='className="w-full px-2"'>
        <Tab.Group>
        <Tab.List>
          <div className="flex space-x-1 rounded-xl bg-blue-400/20 p-1">
          <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'border-2 border-blue-900 bg-blue-400/50 text-white'
                    : 'text-blue-100 hover:text-white'
                )
              }
            >
              Description
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'border-2 border-blue-900 bg-blue-400/50 text-white'
                    : 'text-blue-100 hover:text-white'
                )
              }
            >
              Technologies
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'border-2 border-blue-900 bg-blue-400/50 text-white'
                    : 'text-blue-100 hover:text-white'
                )
              }
            >
              Roadblocks
            </Tab>
          </div>
        </Tab.List>
        <Tab.Panels>
          <div className='text-sm font-medium leading-5 rounded-md p-3'>
          <Tab.Panel
              className={classNames(
                'rounded-xl bg-blue-400/50 text-blue-200 p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >A fast-loading, responsive static church website displaying relevant information for members and a blog for articles written by the pastor and his team.
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                'rounded-xl bg-blue-400/50 text-blue-200 p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >Next.JS, Sanity CMS, Tailwind CSS 
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                'rounded-xl bg-blue-400/50 text-blue-200 p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
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