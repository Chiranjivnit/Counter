import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
} from 'react-native';
const ButtonView = ({ count, handleIncrement, handleDrecement }) => {
    console.log("count", count)
    return (
        <View>
            <Text>{count != 0 ?
                <Text> Your Count value is {count}</Text>
                : 'Please Click Button to increse count value'}</Text>
            <Button title="Increment" onPress={handleIncrement} />
            { count > 0 ? <Button title="Decrement" onPress={handleDrecement} />:null}
            
        </View>
    )

}

export default ButtonView;