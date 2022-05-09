import Head from 'next/head'
import Header from 'components/Header'

export default function Home() {
  return (
    <div className="m-auto max-w-7xl">
      <Head>
        <title>Coder Land</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex items-center justify-between border-y border-black bg-yellow-400 py-10 lg:py-20">
        <div className="space-y-5 px-10">
          <h1 className="max-w-xl font-serif text-6xl">
            {/* <span className="underline decoration-black decoration-4">Coder Land</span> is place to
            write, read and connect */}
            Welcomen to my blog
          </h1>
          <h2 className="max-w-xl font-serif text-3xl">
            這是一名網頁開發者的學習部落格，主要分享搭建網站的相關技術
          </h2>
        </div>
      </div>
    </div>
  )
}
