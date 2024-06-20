import '../css/LastestPosts.css';

function BlogItems({categoryId}) {
    const posts = [
        {id: 1, backgroundimage : 'Category-1', postname : 'Astro Components', 
          shortdescription : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non dia', update_date : '02-06-2024', img_src : 'https://blog-template-gray.vercel.app/_astro/te.7nM7T2s1_ZwtpA9.webp'},
        {id: 4, backgroundimage : 'Category-1', postname : 'Tutorial: Create an Astro Component', 
          shortdescription : 'Learn how to create your first Astro component.', update_date : '02-06-2024', img_src: 'https://blog-template-gray.vercel.app/_astro/placeholder-hero.GamGidh7_u5YtW.webp'},
        {id: 5, backgroundimage : 'Category-1', postname : 'Tutorial: Create an Astro Component', 
          shortdescription : 'Learn how to create your first Astro component.', update_date : '02-06-2024', img_src: 'https://blog-template-gray.vercel.app/_astro/book.9iQvwl4M_2piG0U.webp'},
    ];
  
    return posts;
}
export default BlogItems;
