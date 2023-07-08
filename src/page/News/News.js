import Title from "../../public/components/title/Title";
import Container from "../../public/components/container";

import "./News.css"
import PageTitle from "../../Pagetitle";

const News = () => {
    return (
        <>
            <PageTitle title={"News"}></PageTitle>
            <Title>最新資訊 News</Title>
            <Container className="content">
                <div  >
                    News
                </div>
            </Container>
        </>
    );
}

export default News;