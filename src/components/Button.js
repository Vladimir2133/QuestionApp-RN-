import React from 'react'
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native'

export const ButtonElem = (props) => {
    return(
        <View>
            <TouchableOpacity onPress={() => props.handleChangeId()} style={styles.button}>
                <Text style = {styles.text}> {props.data.WA1} </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.handleChangeId()} style={styles.button}>
                <Text style = {styles.text}> {props.data.WA2} </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.handleChangeId()} style={styles.button}>
                <Text style = {styles.text}> {props.data.WA3} </Text>
            </TouchableOpacity>
       </View>
    )
}

export const ButtonContainer = (props) => {
    return(
        <View style={styles.buttonContainer}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent:'center',
        alignItems:'center',
        width: '98%',
        height: 70,
        backgroundColor: '#696969',
        margin: 10,
        borderRadius: 15,
        marginHorizontal: '1%',
        opacity: .6,
    },
    buttonContainer: {
        justifyContent:'flex-end',
        width:400,
        height: '100%',
    },
    text: {
      fontSize: 25,
      color: 'white'
    }
})
