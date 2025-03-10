//app/portfolio/page.js
import Layout from "@/components/layout/Layout";
import PortfolioSection from "@/components/sections/PortfolioSection";
import PortfolioSection1 from "@/components/sections/PortfolioSection1";
import PortfolioSection2 from "@/components/sections/PortfolioSection2";


export const metadata = {
    title: 'Portfolio',
    content: 'text/html',
    openGraph: {
        title: 'Portfolio',
        content: 'text/html',
    },
};

export default function Portfolio() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Portfolio">
                <PortfolioSection />
            </Layout>
        </>
    );
}
