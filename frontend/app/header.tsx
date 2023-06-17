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
        <div>
          <ul className='flex text-xl'>
            <li className='px-4 py-2 transition duration-300 hover:scale-110'>
              About
            </li>
            <li className='px-4 py-2 transition duration-300 hover:scale-110'>
              Article
            </li>
            <li className='px-4 py-2 transition duration-300 hover:scale-110'>
              <Link href="http://localhost:3031">Blog</Link>
            </li>
            <li className='px-4 py-2 transition duration-300 hover:scale-110'>
              <Link href='/contact'> Contact </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;