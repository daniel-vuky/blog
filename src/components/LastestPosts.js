import '../css/LastestPosts.css';
import classNames from 'classnames';
function LastestPosts({posts}) {
    var lastestPost = posts.map(function (post, index) {
        let postClassName = '';
        if (index === 0) {
           postClassName = 'col-span-2';
        }
        return (
            <div key={index} className={classNames(postClassName)} >
                <a href='/post'>
                    <div className='post-img'><img src={post.img_src}></img></div>
                    
                    <div>{post.postname}</div>
                    <div>{post.shortdescription}</div>
                </a>
            </div>
        );
      });

    return (
        <div className="grid grid-cols-3 gap-4">
            {lastestPost}
        </div>

    );
}
export default LastestPosts;
