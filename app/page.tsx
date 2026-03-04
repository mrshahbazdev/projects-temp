import Header from '@/components/Header'
import Index from '@/components/Index'
import Statement from '@/components/Statement'
import Contact from '@/components/Contact'

export default function Home() {
    return (
        <main className="min-h-screen px-6 md:px-12 lg:px-24 pb-22 flex justify-center bg-background">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 pt-12 md:pt-24">
                {/* Content Column */}
                <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-start">
                    <Header />
                    <Index />
                    <Statement />
                    <Contact />
                </div>

                {/* Image Column */}
                <div className="lg:col-span-5 xl:col-span-5 flex items-start justify-center lg:justify-end pt-8 lg:pt-0">
                    <div className="sticky top-12 w-full max-w-sm">
                        {/* Adding a generic placeholder style while the user uploads their own author image */}
                        <img
                            src="/author.jpg"
                            alt="Author Image"
                            className="w-full h-auto object-cover rounded shadow ring-1 ring-border aspect-[3/4]"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                            }}
                        />
                        <div className="hidden w-full aspect-[3/4] bg-neutral-100 rounded shadow ring-1 ring-border flex items-center justify-center text-muted text-sm text-center px-4">
                            Image placeholder.<br />Save your image as public/author.jpg
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
