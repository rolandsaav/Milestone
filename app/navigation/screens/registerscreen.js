import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import InputTextField from '../../components/InputTextField';
import KeyboardAvoidingContainer from '../../components/KeyboardAvoidingContainer';
import SocialButton from '../../components/SocialButton';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useContext, useState } from 'react';
import { AuthContext } from '../../App';
const facebookImg = require("../../assets/Facebook.png")
const googleImg = require("../../assets/Google.png")

const RegisterScreen = ({ navigation }) => {
    const [user, setUser] = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const onRegister = () => {
        var uid;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCred) => {
                console.log(userCred.user);
                const user = userCred.user;
                setUser(user);
                uid = user.uid;
                addUser(uid, username, name, email);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    const addUser = async (uid, username, name, email) => {
        try {
            const response = await fetch('http://128.61.63.216:8080/api/users', {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: username, name: name, uid: uid, email: email }),
            });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <KeyboardAvoidingContainer style={styles.container}>
            <View>
                <View style={{ marginTop: 60, alignItems: "center", justifyContent: "center" }}>
                    <Image source={require('../../assets/logo.png')} style={styles.mainLogo}></Image>
                </View>
                <View style={{ marginTop: 48, flexDirection: "row", justifyContent: "center" }}>
                    <SocialButton name={"Facebook"} imageSource={facebookImg} />
                    <SocialButton name={"Google"} imageSource={googleImg} />
                </View>

                <Text style={[styles.text, { color: "#ABB4BD", fontSize: 15, textAlign: "center", marginVertical: 20 }]}
                >
                    Or
                </Text>

                <View style={{ gap: 20 }}>
                    <InputTextField title="Name" onChange={e => {
                        console.log(e);
                        setName(e);
                    }} style={{}}></InputTextField>
                    <InputTextField title="Username" onChange={e => {
                        console.log(e);
                        setUsername(e);
                    }} style={{}}></InputTextField>
                    <InputTextField title="Email" onChange={e => {
                        console.log(e);
                        setEmail(e);
                    }} style={{}}></InputTextField>
                    <InputTextField onChange={e => {
                        console.log(e);
                        setPassword(e);
                    }}
                        title="Password"
                        isSecure={true}
                    ></InputTextField>
                </View>


                <TouchableOpacity style={styles.submitContainer} onPress={onRegister}>
                    <Text style={[styles.text, { color: "#fff", fontWeight: "600", fontSize: 16 }]}>Register</Text>
                </TouchableOpacity>

                <Text style={[styles.text, { fontSize: 14, color: "#ABB4BD", textAlign: "center", marginTop: 24 }]}>
                    Already have an account? <Text style={[styles.text, styles.link]} onPress={() => { navigation.navigate("Login") }}>Login Now</Text>
                </Text>
            </View>
        </KeyboardAvoidingContainer>
    )
};


export default RegisterScreen;