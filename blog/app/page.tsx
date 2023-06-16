import fs from 'fs';
import { get } from 'http';

const getData = async () => {
  const posts: string[] = fs.readdirSync('app/posts');
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
