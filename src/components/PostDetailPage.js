import classNames from 'classnames';
import '../css/PostDetailPage.css';
import { useEffect } from 'react';
import CategoryTags from './CategoryTags';
import RelatedPost from './RelatedPost';

function PostDetailPage({postIdentifier}) {
    const relatedPosts = [
            {backgroundimage : 'Category-1', postname : 'Astro Components', 
            img_src : 'https://blog-template-gray.vercel.app/_astro/te.7nM7T2s1_ZwtpA9.webp'},
            {backgroundimage : 'Category-1', postname : 'Components ', 
            img_src: 'https://blog-template-gray.vercel.app/_astro/banner.XpSPdX8n_1B2mHl.jpg'},
            {backgroundimage : 'Category-1', postname : 'TypeScript2 ', 
            img_src: 'https://blog-template-gray.vercel.app/_astro/placeholder-about.wqyabTIj_ZAf6fR.webp'}
        ];
    return (
        <article>
            <header className='post-header'>
                <h1 class="post-header-title"> Astro Components </h1>
                <CategoryTags />
            </header>
            <div className='post-banner'>
                <img src='https://blog-template-gray.vercel.app/_astro/te.7nM7T2s1_Zf783U.jpg'></img>
            </div>
            <div className='post-content'>
                <h1>If you know HTML, you already know enough to write your first Astro component.</h1>
                <p>Astro component syntax is a superset of HTML. The syntax was designed to feel familiar to anyone with experience writing HTML or JSX,
                     and adds support for including components and JavaScript expressions.</p>
                 <h1>JSX-like Expressions</h1>
                 <p>You can define local JavaScript variables inside of the frontmatter component script between the two code fences (---) of an Astro component. You can then inject these variables into the component’s HTML template using JSX-like expressions!
                :::note[dynamic vs reactive] Using this approach, you can include dynamic values that are calculated in the frontmatter. But once included, these values are not reactive and will never change. Astro components are templates that only run once, during the rendering step.
                See below for more examples of differences between Astro and JSX. :::
                </p>
                <h1>Variables</h1>
                <p>Local variables can be added into the HTML using the curly braces syntax:</p>
            </div>
            <div className='related-post'>
                <RelatedPost relatedPosts={relatedPosts}/>
            </div>
        </article>
    );
}
export default PostDetailPage;
