import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { StatusBar } from "expo-status-bar";
import LoginInput from "../../components/LoginInput";
import DropDownSchoolInfo from "../../components/DropDownSchoolInfo";

export default function MakeUserSchool({ navigation }) {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.text}>Create your account</Text>
        </View>
        <DropDownSchoolInfo/>
        <StatusBar style="auto" />
        <View>
            <TouchableOpacity
                style={styles.button}
                title="Next"
                onPress={() => {
                    navigation.navigate("makeUserPassword");
                }}
            >
                <Text style={styles.next}>Next</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
    text: {
        paddingBottom: 50,
        padding: 10,
        fontSize: 30,
        fontWeight: "bold"
    },
    button: {
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: "#7C7FCA",
        width: 300,
        borderRadius: 20,
        padding: 10,
        marginTop: 40,
    },
    next: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 15
    }
});