import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Text from '../components/Text';
import { HeaderBackButton } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/routers';
import {Context as DataContext} from '../context/DataContext';
import theme from '../util/theme';

const HeaderRight = ({navigation, route}) => {

    const {state, SaveStagedSet} = useContext(DataContext);
    
    switch (route.name){
        case 'HomeScreen':
            return (
                <TouchableOpacity activeOpacity={theme.activeOpacity} onPress={() => navigation.navigate('CreateSetScreen')} style={{marginRight: 20}}>
                    <Text>Create</Text>
                </TouchableOpacity>
            );
        case 'CreateSetScreen':
            return (
                <TouchableOpacity activeOpacity={theme.activeOpacity} onPress={() => SaveStagedSet()} style={{marginRight: 20}}>
                    <Text>Save</Text>
                </TouchableOpacity>
            );
        default:
            return null;
    }
};

export default HeaderRight;
