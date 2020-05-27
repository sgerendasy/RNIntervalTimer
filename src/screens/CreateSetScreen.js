import React, {useState, useContext} from 'react';
import {TouchableOpacity, Image, FlatList, TextInput} from 'react-native';
import {Text, Container, RowContainer, Checkbox, Spacer, Label, Button} from '../components/CustomComponents';
import {Context as DataContext} from '../context/DataContext';
import IntervalListItem from '../components/IntervalListItem';
import theme, {screenWidth} from '../util/theme';
import Modal from 'react-native-modal';


const CreateSetScreen = ({route, navigation}) => {

    const {state, StageIntervalSet, AddIntervalToStagedSet} = useContext(DataContext);
    const [newIntervalName, setNewIntervalName] = useState('');
    const [newIntervalLength, setNewIntervalLength] = useState('');
    const [showNewIntervalModal, setShowNewIntervalModal] = useState(false);

    console.log(state);

    function setName(name){
        StageIntervalSet({...state.stagedSet, name});
    }

    function setRepeatForever(shouldRepeatForever){
        StageIntervalSet({...state.stagedSet, shouldRepeatForever});
    }

    function CreateNewInterval(){
        setShowNewIntervalModal(true);
    }

    function EditInterval(){

    }

    function SaveNewInterval(){
        AddIntervalToStagedSet({name: newIntervalName, length: newIntervalLength, id: Math.floor(Math.random() * 10000)});
        setNewIntervalLength('');
        setNewIntervalName('');
        setShowNewIntervalModal(false);
    }

    return (<>
        <Container>
            <TextInput 
                placeholder='Enter interval set name' 
                placeholderTextColor={theme.accentColor1}
                style={{borderBottomWidth: 1, borderBottomColor: theme.accentColor1, fontSize: 16, color: theme.textColor, width: '90%'}}
                value={state.stagedSet.name} 
                onChangeText={(value) => setName(value) } />
            <Spacer />
            <Checkbox
                title='Repeat Forever'
                checked={state.stagedSet.shouldRepeatForever}
                onPress={() => setRepeatForever(!state.stagedSet.shouldRepeatForever)} />
            <Spacer height={60}/>
            <RowContainer style={{justifyContent: 'space-between', width: '100%'}}>
                <Label>Intervals</Label>
                <TouchableOpacity activeOpacity={theme.activeOpacity} onPress={CreateNewInterval}>
                    <Image source={require('../assets/images/plus-icon.png')} style={{width: 30, height: 30, tintColor: theme.accentColor1}}/>
                </TouchableOpacity>
            </RowContainer>
            <Spacer/>
            <FlatList
                style={{width: '100%'}}
                data={state.stagedSet.intervals}
                renderItem={({item}) => {
                    return <IntervalListItem onPress={() => EditInterval(item)} interval={item} />
                }}
                keyExtractor={(entry) => entry.id.toString()} />
        </Container>
        <Modal isVisible={showNewIntervalModal} 
            propagateSwipe
            style={{alignSelf: 'center', justifyContent: 'center'}}
            onBackButtonPress={() => setShowNewIntervalModal(false)}
            onBackdropPress={() => setShowNewIntervalModal(false)}>
            <Container style={{width: screenWidth*.8, height: 300, flex: 0}}>
                <TextInput 
                    placeholder='Interval name' 
                    placeholderTextColor={theme.accentColor1}
                    style={{borderBottomWidth: 1, borderBottomColor: theme.accentColor1, fontSize: 16, color: theme.textColor, width: '90%'}}
                    value={newIntervalName} 
                    onChangeText={setNewIntervalName} />
                <Spacer/>
                <TextInput 
                    placeholder='Seconds' 
                    placeholderTextColor={theme.accentColor1}
                    style={{borderBottomWidth: 1, borderBottomColor: theme.accentColor1, fontSize: 16, color: theme.textColor, width: '90%'}}
                    value={newIntervalLength} 
                    onChangeText={setNewIntervalLength} />
                <RowContainer style={{flex: 1, alignSelf: 'center', alignItems: 'space-between', width: '100%', justifyContent: 'space-between'}}>
                    <Button title='Cancel' style={{backgroundColor: theme.errorColor}} textStyle={{color: theme.backgroundColor}} onPress={() => setShowNewIntervalModal(false)}/>
                    <Button title='Save' style={{backgroundColor: theme.successColor}} textStyle={{color: theme.backgroundColor}} onPress={SaveNewInterval}/>
                </RowContainer>
            </Container>
        </Modal>
        </>
    );
};

export default CreateSetScreen;
