import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import {VictoryChart, VictoryLine, VictoryScatter, VictoryAxis} from 'victory-native'

export const Graphic = props => {

    return(
        <View>
            <VictoryChart
                height={290}
                style={{parent:{marginHorizontal:'2%'}}}>
                <VictoryLine
                   interpolation='basis' data={props.dataGraphic}
                   style={{ data: { stroke: "white" } }}
                />
                <VictoryAxis dependentAxis/>
                <VictoryScatter data={props.dataGraphic}
                   size={2}
                   style={{ data: { fill: "white" } }}
                />
            </VictoryChart>
        </View>
    )
}