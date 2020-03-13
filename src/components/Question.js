import React from 'react'
import {ButtonElem} from './Button'
import {View, Text, StyleSheet} from 'react-native'

export const Question = props => {
    return(
        <View style={styles.questionBox}>
            <View style={styles.question}>
                <Text style={styles.text}>{props.data.id === props.active && props.data.question}</Text>
            </View>
           <ButtonElem
             data={props.data}
             key={props.data.id}
             handleChangeId={props.nextQuestion}
           />
        </View>
    )

}

const styles = StyleSheet.create({
  questionBox: {
    width: '90%',
    height: '100%',
    justifyContent: 'center',
    marginHorizontal: '5%',
  },
  question:{
    justifyContent:'center',
    alignItems: 'center',
    height: '20%',
    paddingBottom:'15%'
  },
  text:{
    justifyContent:'center',
    alignItems: 'center',
    fontSize: 22,
    color: 'white'
  }
})
