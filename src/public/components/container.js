const Container = ({ children,className,style }) => {
    const container = {
        maxWidth: "1024px",
        margin: "0 auto",
        width:"100%",
        height:"100%",
        position:"relative",
        ...style
    };

    return (
        <div className={`container ${((className) ? className:"")}`}  style={container}>
            {children}
        </div>
    );
}

export default Container;
