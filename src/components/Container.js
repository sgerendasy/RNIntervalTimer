import React from 'react';
import {View} from 'react-native';
import theme from '../util/theme';

const Container = (props) => {
    return (
        <View style={[{flex: 1, backgroundColor: theme.backgroundColor, padding: 20}, {...props?.style}]}>{props.children}</View>
    );
};

export default Container;

export const RowContainer = (props) => {
    return (
        <View style={[{flexDirection: 'row', backgroundColor: theme.backgroundColor}, {...props?.style}]}>{props.children}</View>
    );
};
