import * as React from 'react';
import { ThemeContext } from "styled-components";
import { variant } from 'styled-system';
import { Row } from "react-native-simple-elements/components/Container";
import Text, { Caption } from "react-native-simple-elements/components/Text";
import { SvgIcon } from "react-native-simple-elements/components/Icon";
import ChevronDownIcon from "@mdi/svg/svg/chevron-down.svg";
import { testProp } from '../../utils/UITestingHelper';
import { customStyled } from '../../utils/StyledUtils';
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
    },
    variant({
        variants: {
            "error": {
                borderColor: 'tertiaryOrange',
            },
        },
    })
);

const IconBox = customStyled(View, {
    position: 'absolute',
    display: 'flex',
    right: 21,
    alignItems: 'center',
});

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

const IconChevron = ({ theme }) => (
    <IconBox>
        <SvgIcon icon={ChevronDownIcon} color={theme.colors.greyDark} size={20} />
    </IconBox>
);

type Props = {
    selectedItem?: Record<string, unknown>,
    touchableWrapperProps?: Record<string, unknown>,
    boxProps?: Record<string, unknown>,
    showPicker?: boolean,
    placeholder?: string,
    variant?: string,
    renderLabel?: (props?) => React.ReactNode,
    renderValue?: (props?) => React.ReactNode,
    renderItemValue?: (props?) => React.ReactNode,
};

const InputTextView = ({
    selectedItem: propSelectedItem = {},
    placeholder,
    variant = "default",
    boxProps,
    showPicker,
    renderLabel,
    renderValue,
    renderItemValue,
}: Props) => {
    const theme = React.useContext(ThemeContext);
    const selectedItem = propSelectedItem || {};

    return (
        <Box
            {...boxProps}
            variant={variant}
            borderColor={showPicker ? 'secondary' : 'greyLight'}
            paddingY={selectedItem.value ? '6px' : 14}
        >
            {selectedItem.value ? (
                <View>
                    <LabelText {...testProp('label')}>
                        {renderLabel ? renderLabel(selectedItem) : placeholder}
                    </LabelText>
                    {renderItemValue ? (
                        renderItemValue(selectedItem)
                    ) : (
                            <ValueText {...testProp('value')}>
                                {renderValue ? renderValue(selectedItem) : selectedItem.label}
                            </ValueText>
                        )}
                </View>
            ) : (
                    <View>
                        <PlaceHolderText {...testProp('placeholder')}>
                            {placeholder}
                        </PlaceHolderText>
                    </View>
                )}
            <IconChevron
                theme={theme}
            />
        </Box>
    );
};

export default InputTextView;
