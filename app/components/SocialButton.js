import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const SocialButton = ({imageSource, name}) => {
    return (
        <TouchableOpacity>
            <View style={styles.socialButton}>
                <Image source={imageSource} style={styles.socialLogo}></Image>
                <Text style={styles.text}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    socialLogo: {
        width: 16,
        height: 16,
        marginRight: 8,
    },
    text: {
        fontFamily: "Avenir Next",
        color: "#1D2029"
      },
      socialButton: {
        flexDirection: "row",
        marginHorizontal: 12,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "rgba(171, 180, 189, 0.65)",
        borderRadius: 4,
        backgroundColor: "#fff",
        shadowColor: "rgba(171, 180, 0.35)",
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: .5,
        shadowRadius: 5,
        elevation: 1
      },
})

export default SocialButton