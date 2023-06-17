import Link from 'next/link';

const Header = () => {
  return (
    <header className='sticky top-0 border-b z-10 bg-white'>
      <div className='max-w-6xl mx-auto flex justify-between items-center h-12 roboto.variable'>
        <div className='h-max text-2xl hover:cursor-pointer'>
          <Link href="/">
            Kisa&apos;s Blog
          </Link>
        </div>
        <span className='flex-1'></span>
        <div className='text-xl px-4 py-2 transition duration-300 hover:scale-110'>
          About
        </div>
        <div className='text-xl px-4 py-2 transition duration-300 hover:scale-110'>
          Article
        </div>
        <div className='text-xl px-4 py-2 transition duration-300 hover:scale-110'>
          <Link href="http://localhost:3031">Blog</Link>
        </div>
        <div className='text-xl px-4 py-2 transition duration-300 hover:scale-110'>
          Contact
        </div>
      </div>
    </header>
  );
};

export default Header;