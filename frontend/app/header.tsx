import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='sticky top-0 h-16 border-b z-10 bg-white'>
      <div className='max-w-6xl mx-auto pt-3 flex justify-between items-center h-12 roboto.variable'>
        <div className='h-max text-2xl hover:cursor-pointer'>
          <Link href="/">
            <Image
              src='/logo.svg'
              width={50}
              height={50}
              alt='ロゴ' />
          </Link>
        </div>
        <span className='flex-1'></span>
        <div>
          <ul className='flex text-xl my-auto'>
            <li className='px-4 py-2 transition duration-300 hover:scale-125'>
              About
            </li>
            <li className='px-4 py-2 transition duration-300 hover:scale-125'>
              Article
            </li>
            <li className='px-4 py-2 transition duration-300 hover:scale-125'>
              <Link href="http://localhost:3031">Blog</Link>
            </li>
            <li className='px-4 py-2 transition duration-300 hover:scale-125'>
              <Link href='/contact'> Contact </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;