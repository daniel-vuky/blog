import '../css/LastestPosts.css';
import BlogItems from './BlogItems';
import React from 'react'
import { useParams } from "react-router-dom";
import CategoryBar from './CategoryBar';

function Blp({posts}) {
    const { id } = useParams();
    let postArr = BlogItems(id);
    console.log(postArr);
    var postLists = postArr.map(function (post, index) {
        return (
            <div key={index} >
                <a href='/post'>
                    <div className='post-img'><img src={post.img_src}></img></div>
                    
                    <div>{post.postname}</div>
                    <div>{post.shortdescription}</div>
                </a>
            </div>
        );
      });

    return (
        <div className='px-5 sm:mx-auto sm:max-w-2xl sm:px-8 lg:px-0 antialiased md:max-w-6xl grid gap-12 mt-4 overflow-hidden md:overflow-visible'>
            <CategoryBar />
            <div className="grid grid-cols-3 gap-4">
                {postLists}
            </div>
        </div>
    );
}
export default Blp;
