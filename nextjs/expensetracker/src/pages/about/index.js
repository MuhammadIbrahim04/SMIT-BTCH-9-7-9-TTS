import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function About() {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <h2>About</h2>


        </main>
    )
}