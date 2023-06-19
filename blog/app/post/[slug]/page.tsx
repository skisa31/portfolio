import fs from 'fs';
import matter from 'gray-matter';
import markdownhtml from 'zenn-markdown-html';
import { JSDOM } from 'jsdom';
import Image from 'next/image';
import { table } from 'console';
import Header from '../../header';
import Footer from '../../footer';

export const generateStaticParams = async () => {
  const files = fs.readdirSync('posts');
  return files.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

type TableOfContent = {
  level: string,
  title: string,
  href: string,
}

export const getData = async (slug: string) => {
  const file: string = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data, content } = matter(file);
  const dom = new JSDOM(markdownhtml(content));

  const elements = dom.window.document.querySelectorAll('h1, h2');
  const tableOfContent: TableOfContent[] = [];
  elements.forEach((element) => {
    const level = element.tagName;
    const title = element.innerHTML.split("</a>")[1];
    const href = element.id;
    const record = { level: level, title: title, href: href };
    tableOfContent.push(record);
  });

  return {
    frontMatter: { data, content },
    tableOfContent,
  };
};

export async function generateMetadata({ params }: { slug: string }) {
  const page = await getData(params.slug);
  const metadata = {
    title: page.frontMatter.data.title,
    description: page.frontMatter.data.description,
    openGraph: {
      title: page.frontMatter.data.title,
      description: page.frontMatter.data.description,
      url: `https://kisa-ss/blog/post/${params.slug}`,
      siteName: 'Kisaの日常ブログ',
      local: 'ja_JP',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.frontMatter.data.title,
      description: page.frontMatter.data.description,
      site: '@shk4346',
      creator: '@shk4346',
    },
    alternates: {
      canonical: `https://kisa-ss/blog/post/${params.slug}`,
    },
  };
  return metadata;
}

export default async function Page({ params }: { slug: string }) {
  const slug: string = params.slug;
  const page = await getData(slug);
  const articleHtml = markdownhtml(page.frontMatter.content);
  return (
    <div className='prose prose-lg max-w-6xl grid grid-cols-12'>
      <div className='col-span-12'>
        <div className='flex justify-center'>
          <Image
            src={`/${page.frontMatter.data.image}`}
            width={400}
            height={200}
            alt={page.frontMatter.data.title}
            className="object-contain m-auto h-full"
          />
        </div>
      </div>
      <div className='col-span-2'>
        <div className='flex flex-col sticky top-6 pt-24'>
          <div className='p-4 border rounded-xl mb-6 bg-white font-notoSansJp'>
            <p className='text-xl text-bold mb-4'>目次</p>
          </div>
        </div>
      </div>
      <div className='col-span-7 pt-4'>
        <h1 className='mt-12 font-notoSansJp'>{page.frontMatter.data.title}</h1>
        <span>{page.frontMatter.data.date}</span>
        <div dangerouslySetInnerHTML={{ __html: articleHtml }} className='font-notoSansJp' />
      </div>

      <div className='col-span-3 hidden md:block ml-3 pt-4'>
        <div className='flex flex-col sticky top-6 pt-24'>
          <div className='p-4 border rounded-xl mb-6 bg-white font-notoSansJp'>
            <p className='text-xl text-bold mb-4'>目次</p>
            <ul>
              {page.tableOfContent.map((anchor) => {
                if (anchor.level === 'H1') {
                  return (
                    <li className='mb-2' key={anchor.href}>
                      <a href={`#${anchor.href}`}>{anchor.title}</a>
                    </li>
                  );
                } else {
                  return (
                    <li className='ml-4 mb-2' key={anchor.href}>
                      <a href={`#${anchor.href}`}>{anchor.title}</a>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};

export const dynamicParams = false;
