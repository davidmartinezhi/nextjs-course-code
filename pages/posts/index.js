import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
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
