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
      
      <main className="w-full content">
      <Navbar />
      <div className="name gap-5 w-full px-4 mx-auto h-[100vh] flex flex-col justify-center">
      <p className="text-center font-extrabold text-6xl xl:text-8xl uppercase bg-clip-text bg-gradient-to-br from-[#00C2FF] to to-[#0066FF] text-transparent"
      >
        Femi Orokunle
      </p>
      <p className="text-center font-extrabold text-5xl uppercase  bg-clip-text bg-gradient-to-br from-[#00C2FF] to to-[#0066FF] text-transparent"
      >
        Full-Stack Developer
      </p>
      <div className='flex flex-col gap-4 mt-4 justify-around max-w-xl mx-auto'>
      <a href='https://github.com/femiorok'>
      <button className='border-2 border-blue-500 rounded-md py-2 px-4 font-semibold shadow-lg shadow-indigo-500/50 text-white'>
        Resume
      </button>
      </a>
      <button className='border-2 border-blue-500 rounded-md py-2 px-4 font-semibold shadow-lg shadow-indigo-500/50 text-white'>
        Github
      </button>
      <a href='https://www.linkedin.com/in/femi-orokunle-2211841b3/'>
      <button className='border-2 border-blue-500 rounded-md py-2 px-4 font-semibold shadow-lg shadow-indigo-500/50 text-white'>
        LinkedIn
      </button>
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
