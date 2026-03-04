import Header from '@/components/Header'
import Index from '@/components/Index'
import Statement from '@/components/Statement'
import Contact from '@/components/Contact'

export default function Home() {
    return (
        <main className="min-h-screen px-6 md:px-12 lg:px-24 pb-22 flex justify-center bg-background">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 pt-12 md:pt-24">

                {/* Header, Index, Statement */}
                <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-start order-1 lg:order-none">
                    <Header />
                    <Index />
                    <Statement />
                </div>

                {/* Image Column */}
                <div className="lg:col-span-5 xl:col-span-5 flex items-start justify-center lg:justify-end lg:pt-0 order-2 lg:order-none">
                    <div className="sticky top-12 w-full max-w-sm">
                        {/* Author Image */}
                        <img
                            src="/8a749a919bfe518bb24d9647ec957683b89558ea.jpg"
                            alt="Author Image"
                            className="w-full h-auto object-cover rounded shadow ring-1 ring-border aspect-[3/4] bg-neutral-100"
                        />
                    </div>
                </div>

                {/* Contact & Footer */}
                <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-start order-3 lg:col-start-1 lg:order-none">
                    <Contact />
                </div>

            </div>
        </main>
    )
}
