import Head from "next/head";
import { Fragment } from "react/cjs/react.production.min";

import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All posts</title>
        <meta
          name="description"
          content="A list of all programming related tutorials and posts."
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  //get all posts
  const allPosts = getAllPosts();

  //return props
  return {
    props: {
      posts: allPosts,
    },
    revalidate: 100,
  };
}

export default AllPostsPage;
