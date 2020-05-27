import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {Text, RowContainer} from './CustomComponents';
import theme from '../util/theme';

/* Example usage:
    <Checkbox
        title='Repeat'
        checked={shouldRepeat}
        onPress={() => setRepeat(!shouldRepeat)}/>
*/
const Checkbox = (props) => {
    
    return(
        <TouchableOpacity onPress={props.onPress} style={{width: '100%'}} activeOpacity={theme.activeOpacity}>
            <RowContainer >
                <View style={{height: 24, width: 24, borderWidth: 1, borderRadius: 3, justifyContent: 'center', alignItems: 'center', 
                                            borderColor: theme.accentColor2, backgroundColor: props.checked ? theme.accentColor2 : 'transparent'}}>
                    {props.checked && <Image source={require('../assets/images/checkmark.png')} style={{width: 14, height: 14, tintColor: theme.backgroundColor}} /> }
                </View>
                <Text style={{marginLeft: 15, textAlignVertical: 'center'}}>{props.title}</Text>
            </RowContainer>
        </TouchableOpacity>
    );
};

export default Checkbox;
