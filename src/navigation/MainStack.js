import React, {useContext, useState, useMemo} from 'react';
import {SafeAreaView} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import theme from '../util/theme';
import HomeScreen from '../screens/HomeScreen';
import CreateSetScreen from '../screens/CreateSetScreen';
import EditSetScreen from '../screens/EditSetScreen';
import IntervalSetScreen from '../screens/IntervalSetScreen';
import HeaderLeft from './HeaderLeft';
import HeaderLogo from './HeaderLogo';
import HeaderRight from './HeaderRight';
import DeviceInfo from 'react-native-device-info';

const Stack = createStackNavigator();

const MainStack = () => {
  
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({navigation, route}) =>  ({
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: theme.headerColor, height: DeviceInfo.hasNotch() ? theme.headerHeight + 30 : theme.headerHeight },
        headerLeft: () => <HeaderLeft navigation={navigation} route={route} />,
        headerTitle: () => <HeaderLogo navigation={navigation} route={route} />,
        headerRight: () => <HeaderRight navigation={navigation} route={route}/>
      })}
    >
      <Stack.Screen
        name="HomeScreen"
        options={{
          headerTitle: () => <HeaderLogo titleOverride='Interval Timer' />
        }}
        component={HomeScreen}/>
      <Stack.Screen
        name="CreateSetScreen"
        options={{
          headerTitle: () => <HeaderLogo titleOverride='Create Set' />
        }}
        component={CreateSetScreen}/>
      <Stack.Screen
        name="EditSetScreen"
        options={{
          headerTitle: () => <HeaderLogo titleOverride='Edit Set' />
        }}
        component={EditSetScreen}/>
    <Stack.Screen
        name="IntervalSetScreen"
        options={{
          headerTitle: () => <HeaderLogo titleOverride='Interval Set' />
        }}
        component={IntervalSetScreen}/>
    </Stack.Navigator>
  );
}


export default MainStack;
