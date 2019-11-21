import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    TouchableOpacity
} from 'react-native';
const ButtonView = ({ count, handleIncrement, handleDrecement }) => {
    console.log("count", count)
    if (count > 6) {

    }
    return (
        <View style={styles.container}>
            <View style={styles.circleContainetr} >
                {count > 4 && count <= 5 ? alert('Session 1 Completed') : null}
                {count > 9 && count <= 10 ? alert('Session 2 Completed') : null}
                {count > 14 && count <= 15 ? alert('Session 3 Completed') : null}
                {count > 19 && count <= 20 ? alert('Session 4 Completed') : null}
                {count > 24 && count <= 25 ? alert('Session 5 Completed') : null}
                <Text style={styles.textColor} >{count != 0 ?
                    <Text> Your Count value is {count}</Text>
                    : 'Please Click to increse count value'}</Text>
                <View style={{ flexDirection: 'row-reverse', }} >
                    <View style={styles.buttonIncrement}>
                        <Button style={styles.buttonIncrement} title="+" onPress={handleIncrement} />

                    </View>

                    <View style={styles.buttonDecrement}>
                        {count > 0 ? <Button style={styles.buttonDecrement} title="-" onPress={handleDrecement} /> : null}
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ButtonView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 280,
        //alignContent:'space-between'
    },
    circleContainetr: {

        justifyContent: 'center',
        backgroundColor: '#1E1240',
        width: 300,
        height: 300,
        borderRadius: 300 / 2,
        alignItems: 'center',
        alignContent:'center'
    },
    buttonIncrement: {
        flex: 1,
        flexDirection: 'row-reverse',
        marginTop: 20,
        width: 160,
        marginLeft: 30,
        //backgroundColor: 'red'
    },
    buttonDecrement: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 30,
        borderRadius: 10,
        width: 160,
        //height:60
        //backgroundColor: 'red'
    },
    textColor: {
        color: '#ADD8E6',
    },
});