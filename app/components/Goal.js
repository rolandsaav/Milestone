import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Slider } from '@react-native-assets/slider'
import Thumb from './Thumb';

const Goal = ({onAddButtonPressed}) => {
  return (
    <View style={styles.goal}>
      <View style={styles.left}>
        <View style={styles.top}>
          <View style={styles.header}>
            <Text style={styles.title}>
              Title
            </Text>
            <Text style={styles.desc}>
              Description
            </Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.bl}>
            <Slider 
              minimumValue={0}
              maximumValue={30}
              value={12}
              step={1}
              enabled={false}
              trackHeight={20}
              thumbSize={50}
              thumbStyle={styles.thumb}
              thumbTintColor={"#17B978"}
              minimumTrackTintColor={"#A5D9C4"}
              maximumTrackTintColor={"#000"}
              CustomThumb={Thumb}
            />
          </View>
        </View>
      </View>
      <View style={styles.right}>
        <View style={styles.top}>
          <TouchableOpacity style={styles.tr} onPress={onAddButtonPressed}>
            <Ionicons name='add' size={70} style={styles.add} />
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.br} onPress={() => console.log("Press")}>
            <Ionicons name='play' size={70} style={styles.play} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Goal

const styles = StyleSheet.create({
  goal: {
    width: 360,
    height: 260,
    flexShrink: 0,
    borderRadius: 30,
    backgroundColor: "#FCFDEC",
    borderWidth: 1,
    flexDirection: "row"
  },
  left: {
    width: 240
  },
  right: {
    width: 120,
  },
  top: {
    height: 120,

  },
  bottom: {
    height: 140,
  },
  tr: {
    justifyContent: "center",
    alignItems: "center",
    height: 120,
  },
  add: {
    backgroundColor: "#17B978",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
    overflow: "hidden",
    borderRadius: 35
  },
  play: {
    backgroundColor: "#17B978",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingLeft: 8,
    textAlign: "center",
    overflow: "hidden",
    borderRadius: 40,
    fontSize: 60,
    width: 80,
    height: 80
  },
  br: {
    justifyContent: "center",
    alignItems: "center",
    height: 140,
  },
  header: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    textAlign: "left"
  },
  title: {
    fontSize: 30
  },
  desc: {
    fontSize: 16
  },
  thumb: {
    borderWidth: 5,
    borderColor: "#24651E",
  },
  bl: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 50
  }
})