
export default function BlogCard2({ item }) {
    return (
        <>

            {/* <Link href={`/blog/${item.id}`}>
                <img src={`/assets/images/blog/${item.img}`} alt="img" className="img-fluid" />
            </Link>
            <Link href={`/blog/${item.id}`} rel="bookmark">{item.title}</Link>
            <br /> */}

            <div className="news-block col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="image-box"><a href="#"><img src="/images/resource/news-2.jpg" alt="" /></a></div>
                    <div className="lower">
                        <h4><a href="blog-single.html">California abandons plan to tax text messages</a></h4>
                        <div className="info"><div className="cat i-block"><i className="far fa-folder" /> books</div><div className="time i-block"><i className="far fa-clock" /> 2 hours ago</div></div>
                        <div className="link-box"><a href="blog-single.html" className="theme-btn">continue reading <i className="far fa-long-arrow-alt-right" /></a></div>
                    </div>
                </div>
            </div>

        </>
    )
}
