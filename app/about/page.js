
import Layout from "@/components/layout/Layout"
import PlansSection1 from "@/components/sections/PlansSection1"
import ServicesSection1 from "@/components/sections/ServicesSection1"
import ServicesSection2 from "@/components/sections/ServicesSection2"
import CvSection1 from "@/components/sections/CvSection1"
import Courses from "@/components/sections/Courses"
import Course_img from "@/components/sections/Course_img"

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
                
                <CvSection1 />

                <Courses />

                <Course_img />
                
            </Layout>
        </>
    )
}