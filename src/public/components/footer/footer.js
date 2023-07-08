import "./footer.css";

import { config,data } from "../../../config";
import Container from "../container";

import Address from "./Address";

const Footer = () => {
    return (
        <section className="footer" style={config.footer}>
            <Container>
                <h1 style={{textAlign:"center"}}>
                    聯絡我們 Contact Us
                </h1>
                <div className="address">
                    {
                        data.address.map((item) => {
                            const { name, position, tel, ig, email } = item;
                            return (
                                <Address name={name} position={position} tel={tel} ig={ig} email={email}></Address>
                            )
                        })
                    }
                </div>
                <section className="copyright" style={config.copyRight}>
                    <h5>
                    © NTCUST CSIE Copyright 2023
                    </h5>
                </section>
            </Container>
        </section>
    );
}

export default Footer;