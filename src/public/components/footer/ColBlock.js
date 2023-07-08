const ColBlock = ({ title, data }) => {
    return (
        <div className="col">
            <div className="bold">{title}:</div>
            <div>{data}</div>
        </div>
    );
}

export default ColBlock;