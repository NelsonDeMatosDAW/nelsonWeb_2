'use client';
import FsLightbox from 'fslightbox-react';
import Link from 'next/link';
import { useState } from 'react';

export default function SidebarContent({ blogPost }) {
    const [lightboxController, setLightboxController] = useState({ toggler: false, slide: 1 });

    const images = [
        { thumb: "/images/resource/g-thumb-1.jpg", full: "/images/resource/image-1.jpg" },
        { thumb: "/images/resource/g-thumb-2.jpg", full: "/images/resource/image-2.jpg" },
        { thumb: "/images/resource/g-thumb-3.jpg", full: "/images/resource/image-3.jpg" },
        { thumb: "/images/resource/g-thumb-4.jpg", full: "/images/resource/image-4.jpg" },
        { thumb: "/images/resource/g-thumb-5.jpg", full: "/images/resource/image-5.jpg" },
        { thumb: "/images/resource/g-thumb-6.jpg", full: "/images/resource/image-6.jpg" },
    ];

    const openLightboxOnSlide = (slideIndex) => {
        setLightboxController({ toggler: !lightboxController.toggler, slide: slideIndex });
    };
    console.log(blogPost);

    return (
        <>
            {blogPost && (
                <div className="sidebar-page-container">
                    <div className="auto-container">
                        <div className="row clearfix">
                            {/*Content Side*/}
                            <div className="content-side col-lg-8 col-md-12 col-sm-12">
                                <div className="content-inner">
                                    <div className="blog-details">
                                        <div className="image-box"><img src={`/images/resource/${blogPost.img}`} alt="Image" /></div>
                                        <div className="lower">
                                            <h3>{blogPost.title}</h3>
                                            <div className="info"><div className="cat i-block"><i className="far fa-folder" /> books</div><div className="time i-block"><i className="far fa-clock" />{blogPost.date}</div></div>
                                            <div className="text-content text">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                                <blockquote>“It’s through mistakes that you actually can grow. You have to get bad in order to get good.”</blockquote>
                                                <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus.</p>
                                                <p>error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                            </div>
                                            <div className="post-tags"><span className="ttl">Tags:</span> <Link href="#">design</Link>,   <Link href="#">sport</Link>,   <Link href="#">politics</Link>,   <Link href="#">travel</Link></div>
                                        </div>
                                    </div>
                                    <div className="post-author">
                                        <div className="inner-box">
                                            <div className="inner">
                                                <div className="image"><img src="/images/resource/author-1.jpg" alt="#" /></div>
                                                <h5>About author</h5>
                                                <div className="text">Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-comments">
                                        <h4>3 Comments</h4>
                                        <div className="comment">
                                            <div className="inner">
                                                <div className="image"><img src="/images/resource/author-2.jpg" alt="#" /></div>
                                                <div className="c-info"><i className="far fa-clock" /> 2 days ago   /   by Graham</div>
                                                <div className="text">Testing comment form</div>
                                                <div className="link"><Link href="#" className="theme-btn btn-reply">reply</Link></div>
                                            </div>
                                        </div>
                                        <div className="comment">
                                            <div className="inner">
                                                <div className="image"><img src="/images/resource/author-3.jpg" alt="#" /></div>
                                                <div className="c-info"><i className="far fa-clock" /> 2 days ago   /   by Graham</div>
                                                <div className="text">Comment on Hover</div>
                                                <div className="link"><Link href="#" className="theme-btn btn-reply">reply</Link></div>
                                            </div>
                                        </div>
                                        <div className="comment">
                                            <div className="inner">
                                                <div className="image"><img src="/images/resource/author-4.jpg" alt="#" /></div>
                                                <div className="c-info"><i className="far fa-clock" /> 2 days ago   /   by Graham</div>
                                                <div className="text">Third comment</div>
                                                <div className="link"><Link href="#" className="theme-btn btn-reply">reply</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="add-comment">
                                        <h4>Leave comment</h4>
                                        <div className="comment-form">
                                            <form method="post" action="contact.html">
                                                <div className="row clearfix">
                                                    <div className="inner-col col-lg-6 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <div className="field-label"><span className="icon fa fa-user" /> Name</div>
                                                            <div className="field-inner"><input type="text" name="fieldname" defaultValue placeholder required /><i className="dot" /></div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="field-label"><span className="icon far fa-envelope" /> E-mail</div>
                                                            <div className="field-inner"><input type="email" name="fieldname" defaultValue placeholder required /><i className="dot" /></div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="field-label"><span className="icon far fa-link" /> Website</div>
                                                            <div className="field-inner"><input type="text" name="fieldname" defaultValue placeholder required /><i className="dot" /></div>
                                                        </div>
                                                    </div>
                                                    <div className="inner-col col-lg-6 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <div className="field-label">Comments</div>
                                                            <div className="field-inner"><textarea name="fieldname" placeholder required defaultValue={""} /><i className="dot" /></div>
                                                        </div>
                                                        <div className="form-group">
                                                            <button type="submit" className="theme-btn btn-style-two"><span>Post Comment</span></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Sidebar Side*/}
                            <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
                                <div className="sidebar">
                                    {/* Other widgets like recent posts or categories */}

                                    <div className="sidebar-widget gallery-widget">
                                        <div className="sidebar-title">
                                            <h5><span>Instagram</span></h5>
                                        </div>
                                        <div className="images clearfix">
                                            {images.map((img, index) => (
                                                <div key={index} className="image">
                                                    <div className="image-box">
                                                        <img
                                                            src={img.thumb}
                                                            alt={`Gallery image ${index + 1}`}
                                                            onClick={() => openLightboxOnSlide(index + 1)}
                                                            style={{ cursor: 'pointer' }}
                                                        />

                                                        <i onClick={() => openLightboxOnSlide(index + 1)} className="icon fab fa-instagram" style={{ cursor: 'pointer' }} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Lightbox component */}
                                    <FsLightbox
                                        toggler={lightboxController.toggler}
                                        sources={images.map((img) => img.full)}
                                        slide={lightboxController.slide}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}
