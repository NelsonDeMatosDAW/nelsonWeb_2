import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            <section className="page-title" id="to-top-div">
                <div className="auto-container">
                    <h1><span>{breadcrumbTitle}</span></h1>
                    <div className="bread-crumb">
                        <ul className="clearfix">
                            <li><Link href="/">Home</Link></li>
                            <li className="current">{breadcrumbTitle}</li>
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}
