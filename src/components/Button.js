import React from 'react';
import {TouchableOpacity} from 'react-native';
import Text from './Text';
import theme from '../util/theme';

const Button = ({title, style, textStyle, onPress}) => {

    return (
        <TouchableOpacity
            activeOpacity={theme.activeOpacity}
            style={[{borderRadius: 10, width: 100, height: 48, backgroundColor: theme.accentColor2, justifyContent: 'center', alignItems: 'center'}, {...style}]}
            onPress={onPress}>
                <Text style={{...textStyle}}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;
