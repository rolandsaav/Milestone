import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Touchable} from 'react-native';
import InputTextField from '../../components/InputTextField';
import KeyboardAvoidingContainer from '../../components/KeyboardAvoidingContainer';
import SocialButton from '../../components/SocialButton';
const facebookImg = require("../../assets/Facebook.png")
const googleImg = require("../../assets/Google.png")

const LoginScreen = () => {
  return (
    <KeyboardAvoidingContainer style={styles.container}>
        <View>
            <View style={{marginTop: 60, alignItems: "center", justifyContent: "center"}}>
                <Image source = {require('../../assets/logo.png')} style={styles.mainLogo}></Image>
            </View>
            <View style={{marginTop: 48, flexDirection: "row", justifyContent: "center"}}>
                <SocialButton name={"Facebook"} imageSource={facebookImg}/>
                <SocialButton name={"Google"} imageSource={googleImg}/>
            </View>

            <Text style={[styles.text, {color: "#ABB4BD", fontSize: 15, textAlign: "center", marginVertical: 20}]}
            >
                Or
            </Text>
        
            <InputTextField title="Email"></InputTextField>
            <InputTextField 
                style={{marginTop: 32, marginBottom: 8}} 
                title="Password" 
                isSecure={true}
            ></InputTextField>

            <Text style={[styles.text, styles.link, {textAlign: "right"}]}>Forgot Password?</Text>

            <TouchableOpacity style={styles.submitContainer}>
                <Text style={[styles.text, {color: "#fff", fontWeight: "600", fontSize: 16}]}>Login</Text>
            </TouchableOpacity>

            <Text style={[styles.text, {fontSize: 14, color: "#ABB4BD", textAlign: "center", marginTop: 24}]}>
                Don't have an account? <Text style={[styles.text, styles.link]}>Register Now</Text>
            </Text>
        </View>
    </KeyboardAvoidingContainer>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        felx: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 30
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
    mainLogo: {
        width: 300,
        height: 200,
        marginRight: 8,
    },
    socialLogo: {
        width: 16,
        height: 16,
        marginRight: 8,
    },
    link: {
        color: "#17b978",
        fontSize: 14,
        fontWeight: "500"
    },
    submitContainer: {
        backgroundColor: "#17b978",
        fontSize: 16,
        borderRadius: 4,
        paddingVertical: 12,
        marginTop: 32,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "rgba(171, 180, 0.35)",
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: .5,
        shadowRadius: 5,
    }
  });