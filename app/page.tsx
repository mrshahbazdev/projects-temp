import Header from '@/components/Header'
import Index from '@/components/Index'
import Statement from '@/components/Statement'
import Extended from '@/components/Extended'
import Contact from '@/components/Contact'

export default function Home() {
    return (
        <main className="min-h-screen px-6 md:px-12 lg:px-24 pb-22">
            <Header />
            <Index />
            <Statement />
            <Extended />
            <Contact />
        </main>
    )
}
