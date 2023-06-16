import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

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
      {posts.map((post) => (
        <div key={post.slug}>
          <Link href={`/post/${post.slug}`}>
            {post.frontMatter.title}
          </Link>
        </div>
      ))}
    </div>
  )
}
