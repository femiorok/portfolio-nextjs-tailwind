import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Projects from './components/Projects'


const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start scroll-smooth" id='home'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="w-full content relative">
      <div className='w-full h-[80vh] canvas absolute z-0'></div>
      <div className="gap-5 w-full px-4 mx-auto h-[100vh] flex flex-col justify-center z-10">
      <p className=" name text-center font-extrabold text-6xl xl:text-8xl bg-clip-text text-neutral-100 uppercase "
      >
        Femi Orokunle
      </p>
      <p className="text-center font-extrabold text-5xl uppercase text-white"
      >
        Front-End Developer
      </p>
      <div className='flex flex-col gap-4 mt-4 justify-around max-w-xl mx-auto'>
      <a href='https://www.dropbox.com/s/p8m4fr1seaz6fl6/webdeveloper.pdf?dl=0' target="_blank">
      <div className='relative group'>
      <div className='opacity-0 group-hover:opacity-100 duration-500 transition-all w-full h-full group-hover:absolute bg bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 blur-md inset-0 rounded-md'></div>
      <button className='relative bg-black rounded-md w-32 h-12 font-semibold text-white hover:text-blue-500 transition-all'>
        Resume
      </button>
      </div>
      </a>
      <a href='https://www.dropbox.com/s/p8m4fr1seaz6fl6/webdeveloper.pdf?dl=0' target="_blank">
      <div className='relative group'>
      <div className='opacity-0 group-hover:opacity-100 duration-500 transition-all w-full h-full absolute bg bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 blur-md inset-0 rounded-md'></div>
      <button className='relative bg-black rounded-md w-32 h-12 font-semibold text-white hover:text-blue-500 transition-all'>
        Github
      </button>
      </div>
      </a>
      <a href='https://www.linkedin.com/in/femi-orokunle-2211841b3/' target="_blank">
      <div className='relative group'>
      <div className='opacity-0 group-hover:opacity-100 duration-500 transition-all w-full h-full absolute bg bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 blur-md inset-0 rounded-md'></div>
      <button className='relative bg-black rounded-md w-32 h-12 font-semibold text-white hover:text-blue-500 transition-all'>
        LinkedIn
      </button>
      </div>
      </a>
      
      </div>
      </div>
      <Projects />
      </main>

      <footer className="flex h-24 w-full items-center justify-center bg-black">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
