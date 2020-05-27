import React from 'react';
import {View, TextInput as RNTextInput} from 'react-native';
import theme from '../util/theme';

const TextInput = (props) => {
    
    return (
        <RNTextInput 
            placeholderTextColor={theme.accentColor1} 
            placeholder={props?.placeholder ?? ''}
            style={[{borderBottomWidth: 1, borderBottomColor: theme.accentColor1, fontSize: 16, color: theme.textColor}, {...props?.style}]}/>
    )
};

export default TextInput;
