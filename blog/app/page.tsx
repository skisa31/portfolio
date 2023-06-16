import fs from 'fs';
import matter from 'gray-matter';

const getData = async () => {
  const files: string[] = fs.readdirSync('app/posts');
  const posts = files.map((filename: string) => {
    const slug: string = filename.replace(/\.md$/, '');
    const fileContent: string = fs.readFileSync(`app/posts/${filename}`, 'utf-8');
    const { data, content } = matter(fileContent);
    console.log('data:', data);
    console.log('content:', content);
  });
  return {
    posts: [],
  };
};

export default async function Home({ posts }) {
  await getData();

  return (
    <div className='my-8'>
      コンテンツ
    </div>
  )
}
