import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

//Socail Media array
const links = [
  {
    id: 1,
    child: (
      <>
        LinkedIn <FaLinkedin size={40} className="text-white" />
      </>
    ),
    href: "https://www.linkedin.com/in/abdulwase-naeemi/",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    child: (
      <>
        Github <FaGithub size={40} className="text-white" />
      </>
    ),
    href: "https://github.com/Naeemi7",
  },
  {
    id: 3,
    child: (
      <>
        Mail <HiOutlineMail size={40} />
      </>
    ),
    href: "mailto:abdulwasenaeemi7@gmail.com",
  },
];

function Social() {
  return (
    <div className="hidden lg:flex flex-col top-[38%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4  ml-[-95px] hover:ml-[-8px] hover:rounded-md duration-300 bg-primary" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white "
              download={download}
              target="blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Social;
