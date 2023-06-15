const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-2-4xl w-full ms-auto h-24 flex items-center justify-center">
        <div>
          © {new Date().getFullYear()} Kisa's blog
        </div>
      </div>
    </footer>
  );
};

export default Footer;