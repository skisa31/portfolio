import fs from 'fs';
import matter from 'gray-matter';
import PostCard from './components/PostCard';

const getData = async () => {
  const files: string[] = fs.readdirSync('app/posts');
  const posts = files.map((filename: string) => {
    const slug: string = filename.replace(/\.md$/, '');
    const fileContent: string = fs.readFileSync(`app/posts/${filename}`, 'utf-8');
    const { data } = matter(fileContent);
    return {
      frontMatter: data,
      slug,
    };
  });

  return {
    posts
  };
};

export default async function Home() {
  const { posts } = await getData();
  console.log(posts);
  return (
    <div className='my-8'>
      <div className='grid grid-cols-3'>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
