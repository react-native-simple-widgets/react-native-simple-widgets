import { ScrollviewViewport } from "react-native-simple-elements/components/Container";

const CustomViewport = (props) => {
    const { children, ...rest } = props;

    return (
        <ScrollviewViewport
            {...rest}
        >
            {children}
        </ScrollviewViewport>
    );
};

CustomViewport.defaultProps = {
    paddingTop: "56px",
    paddingLeft: "240px",
};

export default CustomViewport;
