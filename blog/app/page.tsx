import fs from 'fs';
import matter from 'gray-matter';
import PostCard from './components/PostCard';

export const getData = async () => {
  const files: string[] = fs.readdirSync('posts');
  const posts = files.map((filename: string) => {
    const slug: string = filename.replace(/\.md$/, '');
    const fileContent: string = fs.readFileSync(`posts/${filename}`, 'utf-8');
    const { data } = matter(fileContent);
    return {
      frontMatter: data,
      slug,
    };
  });

  const sortedPosts = posts.sort((a, b) =>
    new Date(a.frontMatter.date) > new Date(b.frontMatter.date) ? -1 : 1
  );

  return {
    posts: sortedPosts,
  };
};

export default async function Home() {
  const { posts } = await getData();
  return (
    <div className='my-8'>
      <div className='grid grid-cols-3 gap-4'>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
