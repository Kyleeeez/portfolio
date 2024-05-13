import { HeroSection } from '../src/components/index/hero-section/heroSection'
import { Navbar } from '../src/components/_navbar/navbar'
import { CubeSVG } from '../src/SVGs/cube'
import { CogIcon } from '@heroicons/react/outline'

export default function Home() {

    return (
        <>

            <Navbar />

            <CubeSVG className='absolute -left-20 top-[700px] -rotate-12 opacity-60' />

            <main className='container mt-60 border-s-2 border-white tracking-wide dark:border-white/10 md:mt-72'>

                <HeroSection />

            </main>

            <h5 className='my-10 text-center opacity-40'>
                <CogIcon className='mx-auto animate-[spin_5s_linear_infinite]' width={20} />
                Website under construction
            </h5>

        </>
    )
}
