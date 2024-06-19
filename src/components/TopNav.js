import '../css/TopNav.css';
import { BsTags } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { PiTwitterLogoLight } from "react-icons/pi";

function TopNav() {
    return (
        <div>
            <div className="astro-header-drawer">
                <header className="page-header">
                    <a href='/'>Home</a>
                </header>
                <nav className="top-nav">
                    <a className='tags-option' href='/tags'><BsTags />Tags</a>
                    <div className='social-link'>
                        <a><FaGithub /></a>
                        <a><PiTwitterLogoLight /></a>
                    </div>
                </nav>
            </div>
        </div>
    );
  }
export default TopNav;
