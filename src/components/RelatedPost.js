import '../css/RelatedPosts.css';
import classNames from 'classnames';

function RelatedPost({relatedPosts}) {
    var relatedPosts = relatedPosts.map(function (post, index) {
        return (
            <div key={index} className='related-content gap-2'>
                <img src={post.img_src}></img>
                <div>{post.postname}</div>
            </div>
        );
      });
    return (
        <div>
            <h1>Related Posts</h1>
            <div className="related-posts gap-8">
                {relatedPosts}
            </div>
        </div>

    );
}
export default RelatedPost;
