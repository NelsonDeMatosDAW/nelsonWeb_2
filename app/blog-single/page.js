'use client'
import Layout from "@/components/layout/Layout"
import SidebarContent from "@/components/sections/SidebarContent"
import Link from "next/link"

export const metadata = {
    title:'Blog Single',
    content:'text/html',
    openGraph: {
      title:'Blog Single',
      content:'text/html',
    },
  }
export default function BlogSingle() {

    return (
        <>
            <Link href="#">Link</Link>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Details">
                <SidebarContent />
            </Layout>
        </>
    )
}