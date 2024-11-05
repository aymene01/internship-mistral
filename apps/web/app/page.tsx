import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mistral Internship Project</title>
        <meta name="description" content="Welcome to Mistral Internship Project – your next big opportunity!" />
      </Head>
      <div className="w-full h-screen flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-light text-center animate-fade-in">
          Welcome to{' '}
          <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600 animate-text-glow">
            Mistral
          </span>{' '}
          Internship Project
        </h1>
      </div>
    </>
  );
}
