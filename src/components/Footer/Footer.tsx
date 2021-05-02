import { useContext } from "react";
import { Facebook, Linkedin, Twitter, Youtube, Instagram } from "react-feather";
import { WindowContext } from "../../context";

const Footer = () => {
  const viewportWidth = useContext(WindowContext);

  const socialLinks = [Facebook, Linkedin, Twitter, Youtube, Instagram].map(
    (Icon) => (
      <li>
        <Icon className="transition-all cursor-pointer transform hover:scale-105 hover:text-gray-500" />
      </li>
    )
  );

  return (
    <section className={`bg-gray-200 ${viewportWidth < 640 ? "mt-10" : ""}`}>
      <div className="text-center py-6">
        <h3 className=" text-gray-600 text-3xl font-semibold">
          Found Out More
        </h3>
        <ul className="text-gray-400 mt-3 flex space-x-10 justify-center">
          {socialLinks}
        </ul>
      </div>
      <div className="text-center bg-white">
        Made By{" "}
        <a
          className="font-medium underline"
          href="https://github.com/theharshrastogi"
        >
          Harsh
        </a>{" "}
        With <span className="text-red-600">❤❤</span>
      </div>
    </section>
  );
};

export default Footer;
