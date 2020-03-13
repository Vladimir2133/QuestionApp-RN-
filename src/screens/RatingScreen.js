import React from 'react'
import { StyleSheet, View, Text, ImageBackground, ScrollView } from 'react-native'
import { Graphic } from '../components/Graphic'

function RatingScreen({navigation, route}) {
 const {data} = route.params
 const {rating} = route.params
 const {graphicData} = route.params



 return (
    <View style={styles.container}>
        <ImageBackground
        style={{width:'100%', height:'100%'}}
        source={require('./bgr1.jpg')}
    >
        <View style={styles.rating}>
            <Text style={styles.text}>Рейтинг</Text>
            <Text style={styles.text}>{rating}</Text>
        </View>

        <ScrollView>
           <Graphic dataGraphic={graphicData} />
           {graphicData.map(item => {
              return(
              <View style={styles.questionBox}>
                <View style={styles.question}>
                    <Text style={styles.questionText}>{item.question}</Text>
                </View>
                <View style={styles.correctBox}>
                    <Text>{item.correct}</Text>
                </View>
              </View>
              )
           })}
        </ScrollView>
        </ImageBackground>
    </View>
 )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    color: '#fff'
  },
  rating:{
    justifyContent:'center',
    alignItems:'center',
    width: '35%',
    height:'17%',
    backgroundColor: 'grey',
    opacity:.4,
    borderRadius:15,
    marginVertical: 25,
    marginHorizontal:'32.5%',
    },
  questionBox:{
    flex: 2,
    flexDirection:'row',
    marginHorizontal:'1%',
    justifyContent:'center',
    margin: 5,

  },
  question:{
    width:'60%',
    alignItems:'center',
    marginRight: 15,

  },
  correctBox:{
    width: '35%',
    justifyContent:'center',
    alignItems:'center',
  },
  questionText:{
    color:'white',
    fontSize:16,
  }

})

export default RatingScreen
