import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import styles from "../styles/Blog.module.css";


const posts =  [
  {
    "title": "The Rise of Artificial Intelligence and Its Impact on Our Lives",
    "brief": "A year spent in artificial intelligence is enough to make one believe in God.\n\nThe above is a statement of Alan Perlis, the American computer scientist who will be awarded the Turing Award for the first time. From this, we can imagine how powerful AI...",
    "coverImage": "https://cdn.hashnode.com/res/hashnode/image/upload/v1676095571054/a24eb51d-cc48-4e5f-be01-7cc6d7d1dfd0.png",
    "slug": "the-rise-of-artificial-intelligence-and-its-impact-on-our-lives",
    "_id": "63e7a821d8ebefca472203bf",
    "dateAdded": "2023-02-11T14:37:21.496Z"
  },
  {
    "title": "Basic Algorithm Concepts You Need to Know as a Programmer",
    "brief": "As a programmer, having a solid understanding of basic algorithms and data structures is essential for writing efficient and effective code. . Whether you're a beginner or an experienced programmer, mastering these algorithmic concepts will help you ...",
    "coverImage": "https://cdn.hashnode.com/res/hashnode/image/upload/v1675142859961/a569d0e6-b2ab-489a-9bf8-39526bf0ab5d.png",
    "slug": "basic-algorithm-concepts-you-need-to-know-as-a-programmer",
    "_id": "63d8a83201b867b544f32a1b",
    "dateAdded": "2023-01-31T05:33:38.781Z"
  },
  {
    "title": "Let's Add Buy Me a Coffee Widget to your WebSite in 30 Seconds",
    "brief": "Buy Me a Coffee is a great place to get help from your clients. Maybe you've seen some people put a Buy Me a Coffee widget on their website or in their products. Today I will gonna show you how to add a Buy me a Coffee widget to your website like tha...",
    "coverImage": "https://cdn.hashnode.com/res/hashnode/image/upload/v1640531031989/wNJAOcHLb.png",
    "slug": "lets-add-buy-me-a-coffee-widget-to-your-website-in-30-seconds",
    "_id": "61c8853a44f44d7f8d9afedf",
    "dateAdded": "2021-12-26T15:07:38.298Z"
  },
  {
    "title": "Awesome CSS Tips NoBody tells you!",
    "brief": "In my day-to-day life, I hear a lot of people say that CSS is very difficult and they hate CSS. But no CSS is great and very easy to learn. Here are 8 tips to help you improve your CSS code\n1.  inset property\nInset property in CSS is the shorthand fo...",
    "coverImage": "https://cdn.hashnode.com/res/hashnode/image/unsplash/zNRITe8NPqY/upload/v1640176355133/rhjXffZ4q.jpeg",
    "slug": "awesome-css-tips-nobody-tells-you",
    "_id": "61c31bc8c0206b3f41f53fe6",
    "dateAdded": "2021-12-22T12:36:24.860Z"
  }
]
const endpoint = 'https://api.hashnode.com/';


const blog= ()=> {


  return (
    <div className="component">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Uncovering the secrets of Technology</h1>
        </div>
        <p className={styles.paragraph}>
          Are you ready to level up your skills as a programmer and dive into
          the world of technology.Look no further, because my blog is your
          one-stop shop for all things related to this fascinating and in-demand
          field."
        </p>
      </div>
      <div className={styles.blogGrid}>
        {posts.length > 0 && (
          <MainPost
            header={posts[0].title}
            brief={posts[0].brief}
            img={posts[0].coverImage}
            slug={posts[0].slug}
            key={posts[0]._id}
          />
        )}

        {posts.slice(1).map((post) => (
          <BlogPost
            header={post.title}
            brief={post.brief}
            img={post.coverImage}
            slug={post.slug}
            key={post._id}
          />
        ))}
      </div>

      <Navbar />
      <Footer />
    </div>
  );
}

export default blog;




const MainPost = ({ header, brief, img, slug }) => (
  <div className={`${styles.blogItem} ${styles.mainpost}`}>
    <a href={`https://blog.lakiramd.me/${slug}`}>
      <img src={img} alt={header} className={styles.blogImage} />
      <div className={styles.blogContent}>
        <h3 className={styles.blogHeader}>{header}</h3>
        <p className={styles.blogPara}>{brief}</p>
        <div className={styles.blogFooter}>
          {/* additional code for blog tags and date */}
        </div>
      </div>
    </a>
  </div>
);
const BlogPost = ({ header, brief, img, slug }) => (
  <div className={`${styles.blogItem} ${styles.post}`}>
    <a href={`https://blog.lakiramd.me/${slug}`}>
      <img src={img} alt={header} className={styles.blogImage} />
      <div className={styles.blogContent}>
        <h3 className={styles.blogHeader}>{header}</h3>
        <p className={styles.blogPara}>{brief}</p>
        <div className={styles.blogFooter}>
          {/* additional code for blog tags and date */}
        </div>
      </div>
    </a>
  </div>
);
