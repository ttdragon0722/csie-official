import "./title.css";
import { config } from "../../../config";


const Title = ({ children }) => {
    return (
        <div className="big-title" style={config.titlePage}>
        <h1>
            {children}
            <i className="line"></i>
        </h1>
        </div>
    );
};

export default Title;