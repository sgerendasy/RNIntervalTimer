import React from 'react';
import {View} from 'react-native';

const Spacer = ({height}) => {
    return (
        <View style={{height: height || 20}}/>
    )
};

export default Spacer;
