import React, {useContext} from 'react';
import {TouchableOpacity, FlatList} from 'react-native';
import {Text, Container, RowContainer} from '../components/CustomComponents';
import {Context as DataContext} from '../context/DataContext';
import IntervalSetListItem from '../components/IntervalSetListItem';

const HomeScreen = ({route, navigation}) => {

    const {state} = useContext(DataContext);

    return (
        <Container>
            {state.intervalSets.length == 0 ? <Text style={{textAlign: 'center'}}>No sets</Text>
            :
            <FlatList
                style={{width: '100%'}}
                data={state.intervalSets}
                renderItem={({item}) => {
                    return <IntervalSetListItem onPress={() => navigation.navigate('IntervalSetScreen', item)} intervalSet={item} />
                }}
                keyExtractor={(entry) => {
                    console.log(entry);
                    entry.id.toString()}} />
            }
        </Container>
    );
};

export default HomeScreen;
