import "./Address.css";

import ColBlock from "./ColBlock";


const Address = ({ name, position, tel, ig, email }) => {
    return (
        <div className="contact-data">
            <h2 className="bold">
                {position}
                
            </h2>
            <p style={{ margin: "3% 0" }}>
                <div className="bold">
                    {name}
                </div>
                {
                    tel && (
                        <ColBlock title={"TEL"} data={tel} />
                    )
                }
                {
                    ig && (
                        <ColBlock title={"IG"} data={ig} />
                    )
                }
                {
                    email && (
                        <ColBlock title={"EMAIL"} data={email} />
                    )
                }
            </p>
        </div>
    );
}

export default Address;