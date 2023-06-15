import Link from 'next/link';

const Header = () => {
  return (
    <div className='header_container'>
      <div className='logo'>
        <Link href="/">Kisa's portfolio</Link>
      </div>
    </div>
  )
}

export default Header;