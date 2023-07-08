import "./header.css";
import { config } from "../../../config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import useRWD from "../useRWD";
import Container from "../container";

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {

    const device = useRWD(730);
    const hamburger = useRef();
    const menu = useRef();
    const [menuStatus, setMenuStatus] = useState(false);
    const menuClick = () => {
        setMenuStatus(
            function (prev) {
                return !prev;
            }
        );
    }
    useEffect(() => {
        if (menuStatus) {
            menu.current.style.display = "flex";
        } else {
            menu.current.style.display = "none";
        }
    }, [menuStatus]);

    useEffect(() => {
        if (device) {
            hamburger.current.style.display = "none";
            menu.current.style.display = "flex";
        } else {
            hamburger.current.style.display = "block";
            menu.current.style.display = "none";
        }
    }, [device])


    return (
        <section style={{ position: "fixed",top:"0", ...config.header }} >
            <Container className="header" >
                <div>
                    <h4>
                        @ NTCUST CSIE Official
                    </h4>
                </div>

                <button onClick={menuClick} className="menu-hamburger" ref={hamburger}>
                    <FontAwesomeIcon icon={faBars} size="lg" />
                </button>

                <div className="header-link" ref={menu}>
                    <Link to='/'>Home</Link>
                    <Link to='/news'>News</Link>
                    <Link to='/about'>About Us</Link>
                    <Link to='/information'>Information</Link>
                    <Link to='/contact'>Contact Us</Link>
                    {/* <a href alt>Home</a> */}
                    {/* <a href>News</a> */}
                    {/* <a href>About Us</a> */}
                    {/* <a href>Information</a> */}
                    {/* <a href>Contact Us</a> */}
                </div>
            </Container>

        </section>
    );
}

export default Header;