import BlogPost from '@/components/blog/BlogPost'
import Layout from '@/components/layout/Layout'

export const metadata = {
    title:'Blog',
    content:'text/html',
    openGraph: {
      title:'Blog',
      content:'text/html',
    },
  }


export default function Blog() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Stories">
                <BlogPost showItem={6} style={1} showPagination />
            </Layout>
        </>
    )
}
