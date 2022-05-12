import { StyleSheet, Text, View, TouchableOpacity, Image} from "react-native";
import { StatusBar } from "expo-status-bar";
import SvgAtCampus from "../components/SvgAtCampus";

export default function FrontPage({ navigation }) {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View>
            <SvgAtCampus/>
        </View>
        <View>
            <Image
                style={styles.image}
                source={require("../Images/student.png")}
            />
        </View>
        <View>
            <Text style={styles.bio} >Nye måter å jobbe sammen på</Text>
        </View>
        <View>
            <TouchableOpacity
                style={styles.createAccount}
                title="CreateAccount"
                onPress={() => {
                    navigation.navigate("makeUserName");
                }}
            >
                <Text style={styles.text}>Create account</Text>
            </TouchableOpacity>
        </View>
        <View>
            <Text style={styles.questionAccount}>
                Have an account?
                <TouchableOpacity
                    title="Next"
                    onPress={() => {
                        navigation.navigate("Login");
                    }}
                >
                    <Text style={styles.login}>Log in</Text>
                </TouchableOpacity>
            </Text>
        </View>
       <View>
           <TouchableOpacity
               title="Next"
               onPress={() => {
                   navigation.navigate("");
               }}
           >
               <Text style={styles.guest}>Try as Guest</Text>
           </TouchableOpacity>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
    text: {
        padding: 10,
        fontSize: 20,
        color: "#ffffff"
    },
    login: {
      width:50,
        marginLeft: 5,
        color: "#7C7FCA",

    },
    createAccount: {
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: "#7C7FCA",
        width: 200,
        marginTop: 60,
        borderRadius: 20

    },
    guest:{
      marginTop: 30,
        fontSize: 20,
        alignSelf: "center",
        alignItems: "center",
        color: "#7C7FCA",
    },
    bio:{
      fontWeight: "bold",
        width: 250,
        padding: 10,
        fontSize: 25,
        textAlign: "center"
    },
    image: {
        width: 200,
        height: 200,
        margin: 20,
    },
    questionAccount:{
      textAlign: "center",
      width: 300,
      marginTop: 20
    }


});
