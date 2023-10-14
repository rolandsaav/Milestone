import { setStatusBarBackgroundColor } from "expo-status-bar";
import { SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, StatusBar } from "react-native";

const KeyboardAvoidingContainer = ({children, style, backgroundColor}) => {
    return <SafeAreaView style = {{flex: 1,
    backgroundColor: backgroundColor || "f9fafb"}}>
        <KeyboardAvoidingView style = {{flex: 1}}
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[styles.contentContainer, style]}
        >
            {children}
        </ScrollView>
        </KeyboardAvoidingView>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    contentContainer: {
        padding: 20,
        paddingTop: Platform.OS === "android" ?
        setStatusBar.currentHeight + 50: 50,
    }
})

export default KeyboardAvoidingContainer;