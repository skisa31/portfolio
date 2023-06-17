const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-4xl w-full mx-auto h-24  flex items-center justify-center">
        <div>
          © {new Date().getFullYear()} Kisa&apos;s blog
        </div>
      </div>
    </footer>
  );
};

export default Footer;