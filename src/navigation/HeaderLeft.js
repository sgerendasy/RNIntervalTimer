import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Text from '../components/Text';
import { HeaderBackButton } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/routers';
import theme from '../util/theme';

const HeaderLeft = ({navigation, route}) => {

    function handleBack(){
        if (navigation.canGoBack()){
            navigation.goBack();
        }
    }

    switch (route.name){
        case 'HomeScreen':
            return (
                <TouchableOpacity activeOpacity={theme.activeOpacity} onPress={() => console.log()} style={{marginLeft: 20}}>
                    <Text>Edit</Text>
                </TouchableOpacity>
            );
        case 'CreateSetScreen':
            return (
                <TouchableOpacity activeOpacity={theme.activeOpacity} onPress={() => handleBack()} style={{marginLeft: 20}}>
                    <Text>Cancel</Text>
                </TouchableOpacity>
            )
        default:
            return (
                <TouchableOpacity activeOpacity={theme.activeOpacity} onPress={() => handleBack()} style={{marginLeft: 20}}>
                    <Text>Back</Text>
                </TouchableOpacity>
            )
    }
};

export default HeaderLeft;

