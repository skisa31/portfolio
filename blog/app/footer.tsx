import Link from "next/link";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-6xl w-full mx-auto h-24 flex">
        <div className="pt-4">
          © {new Date().getFullYear()} Kisa
        </div>
        <span className="flex-1"></span>
        <div className="pt-4 px-2">
          <a href="https://twitter.com/shk4346" target="_brank" rel="noopener noreferrer">
            <AiFillTwitterCircle size={24} />
          </a>
        </div>
        <div className="pt-4 px-2">
          <a href="https://github.com/skisa31" target="_brank" rel="noopener noreferrer">
            <AiFillGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;