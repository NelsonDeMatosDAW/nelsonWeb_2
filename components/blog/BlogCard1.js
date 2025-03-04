import Link from "next/link";


export default function BlogCard1({ item }) {
    return (
        <>

            {/* <Link href="{`/blog/${item.id}`}">
                <img src={`/images/resource/${item.img}`} alt="img" className="img-fluid" />
            </Link>
            <Link href="{`/blog/${item.id}`}" rel="bookmark">{item.title}</Link>
            <br /> */}

            <div className="news-block col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="image-box"><Link href={`/blog/${item.id}`}><img src={`/images/resource/${item.img}`} alt="img" /></Link></div>
                    <div className="lower">
                        <h4><Link href={`/blog/${item.id}`}>{item.title}</Link></h4>
                        <div className="info"><div className="cat i-block"><i className="far fa-folder" /> books</div><div className="time i-block"><i className="far fa-clock" /> 2 hours ago</div></div>
                        <div className="link-box"><Link href={`/blog/${item.id}`} className="theme-btn">continue reading <i className="far fa-long-arrow-alt-right" /></Link></div>
                    </div>
                </div>
            </div>




        </>
    )
}
