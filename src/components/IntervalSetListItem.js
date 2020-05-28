import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Text, Label, Button, RowContainer} from './CustomComponents';
import {SecondsToString, CalculateTotalIntervalSetTime} from '../util/conversions';
import theme from '../util/theme';

const IntervalSetListItem = ({onPress, intervalSet}) => {

    return(
        <TouchableOpacity onPress={onPress} style={{paddingVertical: 20, borderBottomWidth: 1}} activeOpacity={theme.activeOpacity}>
            <RowContainer style={{width: '100%', justifyContent: 'space-between'}}>
                <Label>{intervalSet.name}</Label>
                <View>
                    <Text>{intervalSet.intervals.length} intervals</Text>
                    <Text>{CalculateTotalIntervalSetTime(intervalSet.intervals)}</Text>
                </View>
            </RowContainer>
        </TouchableOpacity>
    );
};

export default IntervalSetListItem;
