import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Text, Label, Button, RowContainer} from './CustomComponents';
import {SecondsToString} from '../util/conversions';
import theme from '../util/theme';

const IntervalListItem = ({onPress, interval}) => {

    return(
        <TouchableOpacity onPress={onPress} style={{paddingVertical: 20, borderBottomWidth: 1}} activeOpacity={theme.activeOpacity}>
            <RowContainer style={{width: '100%', justifyContent: 'space-between'}}>
                <Label>{interval.name}</Label>
                <Text>{SecondsToString(interval.length)}</Text>
            </RowContainer>
        </TouchableOpacity>
    );
};

export default IntervalListItem;
