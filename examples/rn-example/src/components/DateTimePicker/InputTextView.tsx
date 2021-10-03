import * as React from 'react';
import { variant } from 'styled-system';
import { Row } from 'react-native-simple-elements/components/Container';
import Text, { Caption } from 'react-native-simple-elements/components/Text';
import { SvgIcon } from 'react-native-simple-elements/components/Icon';
import DateRangeIcon from "@mdi/svg/svg/clock.svg";
import { customStyled } from '../../utils/StyledUtils';
import { testProp } from '../../utils/UITestingHelper';
import { View } from 'react-native';

const Box = customStyled(
    Row,
    {
        width: 1,
        height: 50,
        border: '1px solid',
        borderColor: 'greyLight',
        borderRadius: 4,
        paddingX: 16,
        paddingY: 14,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    variant({
        variants: {
            "error": {
                borderColor: 'tertiaryOrange',
            },
        },
    })
);

const truncatedStyle = {
    paddingRight: '20px',
    numberOfLines: 1,
    ellipsizeMode: 'tail',
};

const PlaceHolderText = customStyled(Text, {
    color: 'greyDark',
    opacity: 0.5,
    lineHeight: '20px',
    fontWeight: 400,
    ...truncatedStyle,
});

const ValueText = customStyled(Text, {
    color: 'darkBlack',
    fontWeight: 400,
    lineHeight: '20px',
    paddingTop: 1,
});

const LabelText = customStyled(Caption, {
    opacity: 0.5,
    ...truncatedStyle,
});

type Props = {
    value?: string,
    touchableWrapperProps?: Record<string, any>,
    boxProps?: Record<string, any>,
    showPicker?: boolean,
    placeholder?: string,
    variant?: string,
    label?: string,
    renderValue?: (props?) => React.ReactNode,
    postIcon?: React.ReactElement,
};

const InputTextView = ({
    value,
    placeholder,
    variant = "default",
    boxProps,
    showPicker,
    label,
    postIcon,
}: Props) => {
    return (
        <Box
            {...boxProps}
            variant={variant}
            borderColor={showPicker ? 'secondary' : 'greyLight'}
            paddingY={value ? '6px' : 14}
        >
            <View>
                {value ? (
                    <>
                        <LabelText {...testProp('label')}>{label}</LabelText>
                        <ValueText {...testProp('value')}>{value}</ValueText>
                    </>
                ) : (
                        <PlaceHolderText {...testProp('placeholder')}>
                            {placeholder}
                        </PlaceHolderText>
                    )}
            </View>
            <SvgIcon icon={postIcon ? postIcon : DateRangeIcon} />
        </Box>
    );
};

export default InputTextView;
