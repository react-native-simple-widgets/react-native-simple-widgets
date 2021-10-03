import styled from 'styled-components';

export const customStyled = (Component, defaultProps = {}, inlineStyle = {}) => {
    const StyledComponent = styled(Component)(inlineStyle);
    StyledComponent.defaultProps = {
        ...defaultProps,
    };
    return StyledComponent;
};
