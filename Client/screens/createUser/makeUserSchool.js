import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { StatusBar } from "expo-status-bar";
import DropDownSchoolInfo from "../../components/DropDownSchoolInfo";

export default function MakeUserSchool({ navigation }) {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View>
            <Text style={styles.text}>Create your account</Text>
        </View>
        <DropDownSchoolInfo style={styles.schoolInfo}/>
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
        padding: 10,
        fontSize: 30,
        fontWeight: "bold"
    },
    schoolInfo:{
    },
    button: {
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: "#7C7FCA",
        width: 300,
        borderRadius: 20,
        padding: 10,
    },
    next: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 15
    }
});