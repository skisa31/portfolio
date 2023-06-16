import fs from 'fs';
import { get } from 'http';

const getData = async () => {
  const files: string[] = fs.readdirSync('app/posts');
  const posts = files.map((filename: string) => {
    const fileContent = fs.readFileSync(`app/posts/${filename}`, 'utf-8');
    console.log('fileContent:', fileContent);
  });
  console.log('files:', posts);
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
