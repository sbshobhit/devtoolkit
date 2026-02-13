import Footer from "../section/Footer"
import Header from "../section/Header"

interface RootLayoutProps {
    section: any
}
export default function RootLayout({section}: RootLayoutProps) {
    return (
        <>
        <Header />
        <div className="text-gray-300 mt-24 px-2 ">
            {section}
        </div>
        <Footer />
        </>
    )
}