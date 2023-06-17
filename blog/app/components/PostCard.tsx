import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="border rounded-lg p-3 flex justify-center">
        <Image
          src={`/${post.frontMatter.image}`}
          width={600}
          height={400}
          alt={post.frontMatter.title}
          className="object-contain m-auto h-36"
        />
      </div>
      <div className="px-2 py-4">
        <h1 className="font-bolld text-lg">{post.frontMatter.title}</h1>
        <span>{post.frontMatter.date}</span>
      </div>
    </Link>
  );
};

export default PostCard;