import Title from "../../public/components/title/Title";
import Container from "../../public/components/container";

import "./About.css"

import PageTitle from "../../Pagetitle";

const About = () => {
    return (
        <>  
            <PageTitle title={"About Us"}></PageTitle>
            <Title>關於我們 About Us</Title>
            <Container className="content">
                <div  >
                    about
                </div>
            </Container>
        </>
    );
}

export default About;