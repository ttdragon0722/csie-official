import { config } from "../../config";
import "./HomeTitle.css";

import Container from "../../public/components/container";

import Logo from "../../imgs/logo.png";

const HomeTitle = () => {
    return (
        <section className="home-title" style={config.homePage} >
            <Container>
                <img src={Logo} className="logo" alt="Logo" />
                <div style={{height:"50vh"}}>
                    hahahhaa
                </div>
            </Container>
        </section>
    );
}

export default HomeTitle;