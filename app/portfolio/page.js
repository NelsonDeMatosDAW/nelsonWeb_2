
import Layout from "@/components/layout/Layout"
import PortfolioSection from "@/components/sections/PortfolioSection"
export const metadata = {
    title: 'Portfolio',
    content: 'text/html',
    openGraph: {
        title: 'Portfolio',
        content: 'text/html',
    },
}

export default function Portfolio() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Portfolio">
                <PortfolioSection />
            </Layout>
        </>
    )
}