import React from 'react'
import { StyleSheet, View, Text,Button,FlatList,List, ImageBackground, TouchableHighlight } from 'react-native'
import {ButtonContainer, ButtonElem} from '../components/Button'
import {Question} from '../components/Question'
import SQLite from 'react-native-sqlite-storage';


   function errorCB(err) {
        console.log("SQL Error: " + err);
        }

   function successCB() {
        console.log("SQL executed fine");
        }

    function openCB() {
        console.log("Database OPENED");
        }


const db = SQLite.openDatabase({name: 'test.db',createFromLocation: "~sqliteexample.db"  },errorCB,openCB,successCB);

class PlayScreen extends React.Component <{}> {

    constructor(props) {
        super(props);
            this.state = {
                data: [],
                graphicData:[{y:0, question:'', correct:''}],
                correctCount: 0,
                activeQuestionInd: 1,
                answerCorrect: false,
                rating: 0
            }

        db.transaction((tx) => {
          tx.executeSql('SELECT * FROM MC_Questions ',[], (tx, results) => {
              console.log("query completed")
              const temp = []
              const len = results.rows.length;

              for (let i=0; i<41; i++){
                const row=results.rows.item(i);
                temp.push({question:row.Question,
                           id:row._id,
                           WA1:row.WA1,
                           WA2:row.WA2,
                           WA3:row.WA3,
                           Correct:row.CorrectAnswer,
                           rating:row.rating }
                )
              }

              this.setState({
                data: temp,
              })

            });
        });
    }


   nextQuestion = () => {
       this.setState(prevState => {



         let activeId = prevState.activeQuestionInd < this.state.data.length - 1
         ? prevState.activeQuestionInd + 1
         : prevState.activeQuestionInd

         prevState.graphicData.push({
          y:this.state.rating,
          question: this.state.data[activeId].question,
          correct: this.state.data[activeId].Correct
         })

         let rating = prevState.rating + this.state.data[activeId].rating

         if(this.state.data[activeId].WA2 === this.state.data[activeId].Correct){
            console.log('true')
            //prevState.rating + this.state.data[activeId].rating
         }else{
            rating
            console.log('false')
         }
       return {activeQuestionInd: activeId,
               rating}
       })

     }


    render() {
        const data = this.state.data
        const active = this.state.activeQuestionInd
        const navigation = this.props.navigation
        const Rating = this.state.rating
        const graphicData = this.state.graphicData
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={{width:'100%', height:'100%'}}
                    source={require('./bgr1.jpg')}
                >
                    <TouchableHighlight
                      onPress={() => navigation.navigate("Rating", {
                        data,
                        rating:Rating,
                        graphicData
                      })}
                      style={styles.rating}
                    >
                        <View>
                          <Text style={styles.ratingText}>{Rating}</Text>
                        </View>
                    </TouchableHighlight>
                  {data.map(item => {
                    return(
                       <View >
                          {item.id === active &&
                             <Question
                                data={item}
                                active={active}
                                nextQuestion={this.nextQuestion}
                             />}
                        </View>
                    )})}
                </ImageBackground>
            </View>

        )

    }
   }
const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
  },
  rating:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'grey',
    marginHorizontal:'80%',
    marginVertical: 25,
    opacity: .4,
    height: '8%',
    width: '17%',

  },
  ratingText:{
    fontSize: 18,
    color: '#fff'
  }
})

export default PlayScreen
