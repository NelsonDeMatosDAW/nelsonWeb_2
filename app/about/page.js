
import Layout from "@/components/layout/Layout"
import PlansSection1 from "@/components/sections/PlansSection1"
import ServicesSection1 from "@/components/sections/ServicesSection1"
import ServicesSection2 from "@/components/sections/ServicesSection2"
import TeamSection1 from "@/components/sections/TeamSection1"

export const metadata = {
    title: 'About',
    content: 'text/html',
    openGraph: {
        title: 'About',
        content: 'text/html',
    },
}
export default function About() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Conóceme">
                <PlansSection1 />
                <ServicesSection2 />
                
                <ServicesSection1 />
                
                <TeamSection1 />
                
            </Layout>
        </>
    )
}