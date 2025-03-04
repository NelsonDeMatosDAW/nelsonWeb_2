'use client'
import Layout from "@/components/layout/Layout"
import SidebarContent from "@/components/sections/SidebarContent"
import data from "@/util/blog.json"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function BlogDetails() {
    let Router = useParams()
    const [blogPost, setBlogPost] = useState(null)
    const id = Router.id

    useEffect(() => {
        setBlogPost(data.find((data) => data.id == id))
    }, [id])

    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Details">
            <SidebarContent blogPost={blogPost} />
        </Layout>
    )
}