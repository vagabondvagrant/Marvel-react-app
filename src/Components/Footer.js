import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={`bg"gray-800" : "gray-200"} py-6 text-center`}>
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com"
          className="text-gray-600 hover:text-gray-800 text-2xl"
        >
          {" "}
          {/* Increase icon size using text-2xl */}
          <FaGithub />
        </a>
        <a
          href="https://facebook.com"
          className="text-gray-600 hover:text-gray-800 text-2xl"
        >
          {" "}
          {/* Increase icon size using text-2xl */}
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com"
          className="text-gray-600 hover:text-gray-800 text-2xl"
        >
          {" "}
          {/* Increase icon size using text-2xl */}
          <FaTwitter />
        </a>
        <a
          href="https://linkedin.com"
          className="text-gray-600 hover:text-gray-800 text-2xl"
        >
          {" "}
          {/* Increase icon size using text-2xl */}
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
