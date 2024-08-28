import { Link } from "react-router-dom";
// import { logo } from "../assets";

const Footer = () => {
  return (
    <div className="w-full mt-12 bg-[#050918] drop-shadow-lg">
      <div className="max-w-7xl mx-auto py-8 md:py-16 flex flex-col md:flex-row justify-around gap-8 md:gap-12">
        <div className="flex justify-center md:justify-start mb-8 md:mb-0">
          {/* <img src={} alt="" className="h-12 md:h-20" /> */}
        </div>
        <div className="text-center md:text-left">
          <div className="pb-4 md:pb-16 text-md text-white-100 font-semibold">
            Sections
          </div>
          <div className="flex flex-col gap-4 md:gap-12 text-secondary text-sm">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#work" className="hover:text-white">
              Work
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
        <div className="text-center md:text-left">
          <div className="pb-4 md:pb-16 text-md text-white-100 font-semibold">
            Quick Links
          </div>
          <div className="flex flex-col gap-4 md:gap-12 text-secondary text-sm">
            <Link
              target="_blank"
              to="https://github.com/madeelworks"
              className="hover:text-white"
            >
              Github
            </Link>
            <Link
              to="mailto:adeel.techpro@gmail.com"
              className="hover:text-white"
            >
              Email
            </Link>
          </div>
        </div>
        <div className="text-center md:text-left">
          <div className="pb-4 md:pb-16 text-md text-white-100 font-semibold">
            Social Links
          </div>
          <div className="flex flex-col gap-4 md:gap-12 text-secondary text-sm">
            <Link
              target="_blank"
              to="www.linkedin.com/in/muhammad-adeel-953245257"
              className="hover:text-white"
            >
              Linkedin
            </Link>
            {/* <Link target="_blank" to="https://www.instagram.com/nizzypedia/?hl=en" className="hover:text-white">Instagram</Link>
                        <Link target="_blank" to="https://www.youtube.com/channel/UCF7PEEtUGOD_h7a13QgFaFA" className="hover:text-white">YouTube</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
