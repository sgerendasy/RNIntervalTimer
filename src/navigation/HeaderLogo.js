import React from 'react';
import {TouchableOpacity} from 'react-native';
import Text from '../components/Text';
import {CommonActions } from '@react-navigation/native';
import {StackActions} from '@react-navigation/routers';

const HeaderLogo = ({route, titleOverride}) =>{
    return (
        <Text>{titleOverride}</Text>
    );
};

export default HeaderLogo;
