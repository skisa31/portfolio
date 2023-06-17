import Link from 'next/link';

const Header = () => {
  return (
    <header className='sticky top-0 border-b z-10 bg-white'>
      <div className='max-w-6xl mx-auto flex justify-between items-center h-12 roboto.variable'>
        <div className='h-max text-2xl hover:cursor-pointer'>
          <Link href="/">
            Kisa&apos;s Portfolio
          </Link>
        </div>
        <span className='flex-1'></span>
        <div className='text-xl px-4 py-2 hover:bg-gray-200'>
          About
        </div>
        <div className='text-xl px-4 py-2 hover:bg-gray-200'>
          Article
        </div>
        <div className='text-xl px-4 py-2 hover:bg-gray-200'>
          Blog
        </div>
        <div className='text-xl px-4 py-2 hover:bg-gray-200'>
          Contact
        </div>
      </div>
    </header>
  );
};

export default Header;