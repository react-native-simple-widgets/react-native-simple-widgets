import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styled from "styled-components/native";
import { background, BackgroundProps, flexbox, FlexboxProps, layout, LayoutProps } from 'styled-system';
import { customStyled } from '../../utils/StyledUtils';
import { testProp } from '../../utils/UITestingHelper';

const Row = styled.View<BackgroundProps & FlexboxProps & LayoutProps>`
    ${background}
    ${flexbox}
    ${layout}
`;

Row.defaultProps = {
    display: "flex",
}

const Chevron = customStyled(View, {
    width: 15,
    height: 15,
    background: 'transparent',
    borderColor: '#2F73D2',
    borderTopWidth: 1.5,
    borderRightWidth: 1.5,
});

const ChevronUp = customStyled(Chevron, {
    transform: [{ translateY: 4 }, { rotate: '-45deg' }],
});

const ChevronDown = customStyled(Chevron, {
    marginLeft: 22,
    transform: [{ translateY: -5 }, { rotate: '135deg' }],
});

const InputAccessoryViewBox = customStyled(View, {
    height: 45,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingX: 4,
    background: props => props.theme.colors.greyLight,
    border: '1px solid',
    borderColor: 'grey',
    zIndex: 2,
});

const DoneText = customStyled(Text, {
    background: 'transparent',
    color: 'tertiaryBlue',
});

type Props = {
    doneText?: string,
    onDonePress?: (evt?) => void,
    onArrowUp?: (evt?) => void,
    onArrowDown?: (evt?) => void,
};

const InputAccessoryView = ({
    doneText,
    onDonePress,
    onArrowUp,
    onArrowDown,
}: Props) => {
    return (
        <InputAccessoryViewBox>
            <Row background="transparent">
                <TouchableOpacity
                    onPress={onArrowUp}
                    accessible={false}
                    {...testProp('chevron_up')}
                >
                    <ChevronUp />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onArrowDown}
                    accessible={false}
                    {...testProp('chevron_down')}
                >
                    <ChevronDown />
                </TouchableOpacity>
            </Row>
            {!!doneText && (
                <TouchableOpacity
                    onPress={onDonePress}
                    accessible={false}
                    {...testProp('done_btn')}
                >
                    <Row background="transparent">
                        <DoneText>{doneText}</DoneText>
                    </Row>
                </TouchableOpacity>
            )}
        </InputAccessoryViewBox>
    );
};

export default InputAccessoryView;
