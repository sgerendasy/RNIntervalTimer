import React from 'react';
import {View, Text as RNText} from 'react-native';
import theme from '../util/theme';

const Text = (props) => {
    return (
        <RNText style={[{color: theme.textColor, fontSize: 16}, {...props?.style}]}>{props.children}</RNText>
    );
};

export default Text;

export const Label = (props) => {
    return (
        <RNText style={[{color: theme.textColor, fontSize: 20}, {...props?.style}]}>{props.children}</RNText>
    );
};
