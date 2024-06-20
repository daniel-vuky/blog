import CategoryBar from '../components/CategoryBar';
import LastestPosts from '../components/LastestPosts';
function HomePage() {
    const posts = [
      {backgroundimage : 'Category-1', postname : 'Astro Components', 
        shortdescription : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non dia', update_date : '02-06-2024', img_src : 'https://blog-template-gray.vercel.app/_astro/te.7nM7T2s1_ZwtpA9.webp'},
      {backgroundimage : 'Category-1', postname : 'Components ', 
        shortdescription : 'Astro components are HTML templates with superpowers. They are a superset of HTML, with support for including components and JavaScript expressions.', update_date : '02-06-2024', img_src: 'https://blog-template-gray.vercel.app/_astro/banner.XpSPdX8n_1B2mHl.jpg'},
      {backgroundimage : 'Category-1', postname : 'TypeScript2 ', 
        shortdescription : 'TypeScript2 description here 2', update_date : '02-06-2024', img_src: 'https://blog-template-gray.vercel.app/_astro/placeholder-about.wqyabTIj_ZAf6fR.webp'},
      {backgroundimage : 'Category-1', postname : 'Tutorial: Create an Astro Component', 
        shortdescription : 'Learn how to create your first Astro component.', update_date : '02-06-2024', img_src: 'https://blog-template-gray.vercel.app/_astro/placeholder-hero.GamGidh7_u5YtW.webp'},
      {backgroundimage : 'Category-1', postname : 'Tutorial: Create an Astro Component', 
        shortdescription : 'Learn how to create your first Astro component.', update_date : '02-06-2024', img_src: 'https://blog-template-gray.vercel.app/_astro/book.9iQvwl4M_2piG0U.webp'},
  ];

    return (
      <div className="px-5 sm:mx-auto sm:max-w-2xl sm:px-8 lg:px-0 antialiased md:max-w-6xl grid gap-12 mt-4 overflow-hidden md:overflow-visible">
          <CategoryBar />
          <LastestPosts posts={posts} />
      </div>
    );
  }
export default HomePage;
