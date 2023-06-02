import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    title: "Getting Started With Nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next Js is a react framework for production, ships with built in SSR",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Getting Started With Nextjs1",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next Js is a react framework for production, ships with built in SSR1",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs1",
  },
  {
    title: "Getting Started With Nextjs2",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next Js is a react framework for production, ships with built in SSR2",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs2",
  },
  {
    title: "Getting Started With Nextjs3",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next Js is a react framework for production, ships with built in SSR3",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs3",
  },
];

function AllPostsPage(props) {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
