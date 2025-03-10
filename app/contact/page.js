
import Layout from "@/components/layout/Layout"
import ContactSection from "@/components/sections/ContactSection"

export const metadata = {
    title:'Contact',
    content:'text/html',
    openGraph: {
      title:'Contact',
      content:'text/html',
    },
  }
export default function Contact() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact">
                <ContactSection />
            </Layout>
        </>
    )
}