import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

// for social links
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import SocialLinksForSmallDevice from "./components/SocialLinksForSmallDevice";


export default function App() {

  const links = [
    {
      id: 1,
      child: (
        <>
          <span>LinkedIn</span> < FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/charchil-kajaliya/",
      style: 'rounded-tr-md bg-[#0A66C2]'
    },
    {
      id: 2,
      child: (
        <>
          Github < FaGithub size={30} />
        </>
      ),
      href: "https://github.com/charchil08",
      style: 'bg-[#171515]'
    },
    {
      id: 3,
      child: (
        <>
          Mail < HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:er.charchilkajaliya@gmail.com",
      style: 'bg-[#EA4335]'
    },
    {
      id: 4,
      child: (
        <>
          Resume < BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Resume-Charchil-Full_Stack_Developer.pdf",
      style: "rounded-br-md bg-[#696969]",
      download: true
    }
  ]


  return (
    <div className="">
      <NavBar />
      <Home />
      <SocialLinks links={links} />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinksForSmallDevice />

    </div>
  )
}