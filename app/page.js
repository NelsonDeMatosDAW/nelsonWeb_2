
import Layout from "@/components/layout/Layout"
import BannerSection2 from "@/components/sections/BannerSection2"
import PlansSection1 from "@/components/sections/PlansSection1"
import ServicesSection1 from "@/components/sections/ServicesSection1"
import ServicesSection2 from "@/components/sections/ServicesSection2"
import TeamSection1 from "@/components/sections/CvSection1"

export const metadata = {
    title:'NelsonDeMatosDev',
    content:'text/html',
    openGraph: {
        title:'NelsonDeMatosDev',
        content:'text/html',
    },
}

export default function Home2() {

    return (
        <>
            <Layout headerStyle={1} >
                <BannerSection2 />
                {/*
                    <ServicesSection1 />
                    <PlansSection1 />
                    <TeamSection1 />
                    <ServicesSection2 />
                */}
                
            </Layout>
        </>
    )
}