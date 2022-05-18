import {View, StyleSheet, Text, TouchableOpacity} from "react-native";


const LoginButton = ({navigation, title}) => {
    return(
        <View>
            <TouchableOpacity
                style={styles.button}
                title={title}
                onPress={() => {
                    navigation.navigate("makeUserPassword");}}
            >
                <Text style={styles.next}>Next</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    button: {
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: "#7C7FCA",
        width: 300,
        borderRadius: 20,
        padding: 10,
        margin: 10,
        marginTop:70,
    },
    next: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 15
    }
});


export default LoginButton