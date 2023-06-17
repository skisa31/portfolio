import fs from 'fs';
import matter from 'gray-matter';
import markdownhtml from 'zenn-markdown-html';
import Image from 'next/image';

export const generateStaticParams = async () => {
  const files = fs.readdirSync('posts');
  return files.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

export const getData = async (slug: string) => {
  const file: string = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data, content } = matter(file);
  return {
    frontMatter: { data, content },
  };
};

export default async function Page({ params }: { slug: string }) {
  const slug: string = params.slug;
  const page = await getData(slug);
  const html = markdownhtml(page.frontMatter.content);
  return (
    <div className='prose prose-lg max-w-none'>
      <div className='border flex justify-center'>
        <Image
          src={`/${page.frontMatter.data.image}`}
          width={800}
          height={400}
          alt={page.frontMatter.data.title}
          className="object-contain m-auto h-full"
        />
      </div>
      <h1 className='mt-12'>{page.frontMatter.data.title}</h1>
      <span>{page.frontMatter.data.date}</span>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
};

export const dynamicParams = false;
