import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Row } from 'react-native-simple-elements/components/Container';
import Text from 'react-native-simple-elements/components/Text';
import { customStyled } from '../../utils/StyledUtils';

const InputAccessoryViewBox = customStyled(Row, {
    height: 45,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingX: 4,
    background: props => props.theme.colors.greyLight,
    border: '1px solid',
    borderColor: 'grey',
    zIndex: 2,
});

const ButtonText = customStyled(Text, {
    background: 'transparent',
    color: 'tertiaryBlue',
});

const ButtonCancel = customStyled(ButtonText, {
    fontWeight: 400,
});

type Props = {
    doneText?: string,
    cancelText?: string,
    onDonePress?: (evt?) => void,
    onCancelPress?: (evt?) => void,
};

const InputAccessoryView = ({
    doneText,
    cancelText,
    onDonePress,
    onCancelPress,
}: Props) => {
    return (
        <InputAccessoryViewBox>
            {!!cancelText && (
                <TouchableOpacity onPress={onCancelPress} accessible={false}>
                    <View>
                        <ButtonCancel>{cancelText}</ButtonCancel>
                    </View>
                </TouchableOpacity>
            )}
            {!!doneText && (
                <TouchableOpacity onPress={onDonePress} accessible={false}>
                    <View>
                        <ButtonText>{doneText}</ButtonText>
                    </View>
                </TouchableOpacity>
            )}
        </InputAccessoryViewBox>
    );
};

InputAccessoryView.defaultProps = {
    doneText: "Done",
    cancelText: "Cancel",
}

export default InputAccessoryView;
