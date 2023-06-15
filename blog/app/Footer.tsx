const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-4xl w-full mx-auto h-24 flex items-center justigy-center">
        <div>
          © {new Date().getFullYear()} Kisa's portfolio
        </div>
      </div>
    </footer>
  );
};

export default Footer;