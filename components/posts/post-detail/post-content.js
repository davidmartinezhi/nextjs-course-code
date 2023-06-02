import PostHeader from "./post-header";

const DUMMY_POST = {
  title: "Getting Started With Nextjs",
  image: "getting-started-nextjs.png",
  excerpt:
    "Next Js is a react framework for production, ships with built in SSR",
  date: "2022-02-10",
  slug: "getting-started-with-nextjs",
  content: "# This is a first post",
};

import classes from "./post-content.module.css";

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      CONTENT
    </article>
  );
}

export default PostContent;
