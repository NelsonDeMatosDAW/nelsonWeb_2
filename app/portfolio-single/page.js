
import Layout from "@/components/layout/Layout"
import PortfolioSingleSection from "@/components/sections/PortfolioSingleSection"

export const metadata = {
    title: 'Portfolio Single',
    content: 'text/html',
    openGraph: {
        title: 'Portfolio Single',
        content: 'text/html',
    },
}

export default function PortfolioSingle() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Portfolio Single">
                <PortfolioSingleSection />
            </Layout>
        </>
    )
}