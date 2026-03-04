import Header from '@/components/Header'
import Index from '@/components/Index'
import Statement from '@/components/Statement'
import Contact from '@/components/Contact'

export default function Home() {
    return (
        <main className="min-h-screen px-6 md:px-12 lg:px-24 pb-22 flex justify-center bg-background">
            <div className="max-w-2xl w-full flex flex-col justify-start pt-12 md:pt-24 items-center">

                <Header />

                {/* Author Image - Centered and Circular */}
                <div className="w-48 h-48 sm:w-56 sm:h-56 my-8">
                    <img
                        src="/8a749a919bfe518bb24d9647ec957683b89558ea.jpg"
                        alt="Author Image"
                        className="w-full h-full object-cover rounded-full shadow-md ring-1 ring-border"
                    />
                </div>

                <div className="w-full max-w-[42rem] flex flex-col items-start">
                    <Index />
                    <Statement />
                    <Contact />
                </div>

            </div>
        </main>
    )
}
