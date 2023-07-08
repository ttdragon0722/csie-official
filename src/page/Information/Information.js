import Title from "../../public/components/title/Title";
import Container from "../../public/components/container";

import "./Information.css"

import PageTitle from "../../Pagetitle";

const Information = () => {
    return (
        <>
            <PageTitle title={"Information"}/>
            <Title>相關資訊 Information</Title>
            <Container className="content">
                <div>
                    Information
                </div>
            </Container>
        </>
    );
}

export default Information;