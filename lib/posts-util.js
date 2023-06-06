import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { get } from "http";

//absolute path to posts directory
const postsDirectory = path.join(process.cwd(), "posts");

function getPostsData(fileName) {
  //path to file
  const filePath = path.join(postsDirectory, fileName);

  //read content of file
  const fileContent = fs.readFileSync(filePath, "utf-8"); //with readFileSync we blovk the rest of the code until this is read

  const { data, content } = matter(fileContent); //get markdown meta data and content

  const postSlug = fileName.replace(/\.md$/, ""); //remove file extension

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory); //Returns array of file names (strings)

  //get array of posts data
  const allPosts = postFiles.map((postFile) => {
    return getPostsData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  ); //sort by recent posts

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts(); // get all posts

  const featuredPosts = allPosts.filter((post) => post.isFeatured); //filter posts for only featured posts

  return featuredPosts;
}
