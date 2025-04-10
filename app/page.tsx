import {Hero, Features, Pricing} from './components'

export default function Home() {
  return (
    <main className='flex flex-col gap-36'>
      <Hero />
      <Features />
      <Pricing />
    </main>
  );
}
