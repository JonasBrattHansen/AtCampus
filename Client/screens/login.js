import {
    Button,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    FlatList
} from "react-native";
import {StatusBar} from "expo-status-bar";
import {SafeAreaView} from "react-native-safe-area-context";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {login} from "../actions/auth";

export default function Login({navigation}) {
	const dispatch = useDispatch();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function attemptLogin() {
		dispatch(login(email, password))
	}

    return (
        <KeyboardAvoidingView style={styles.container}  >
            <ScrollView>
                <StatusBar style="auto" />

                <SafeAreaView>
                    <TextInput
	                    style={styles.input}
	                    placeholder={"Email"}
	                    value={email}
	                    onChangeText={text => setEmail(text)}
                    />

                    <TextInput
	                    style={styles.input}
	                    placeholder={"Password"}
	                    value={password}
	                    onChangeText={text => setPassword(text)}
                    />
                </SafeAreaView>

                <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot password?</Text>
                </TouchableOpacity>

                <Text style={styles.textService}>
                    By continuing, you agree to our
                    <TouchableOpacity>
                        <Text style={styles.terms}> Terms of Service </Text>
                    </TouchableOpacity>
                    and
                    <TouchableOpacity>
                        <Text style={styles.policy}> Privacy Policy.</Text>
                    </TouchableOpacity>
                </Text>

                <TouchableOpacity
	                style={styles.button}
	                onPress={() => attemptLogin()}
                >
                    <Text style={styles.buttonText}>Logg in</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    login:{
        fontSize: 25,
        marginBottom: 10
    },
    input:{
        alignSelf: "center",
        height: 50,
        width: 300,
        margin: 5,
        marginTop: 40,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        borderColor: "#d3d3d3"
    },
    forgot:{
        marginLeft: 20,
        fontSize: 15,
        fontWeight: "bold",
        color: "#7C7FCA",
        textAlign: "left",
        marginBottom: 90
    },
    textService:{
        width: 330,
        marginTop:130
    },
    button:{
        alignSelf: "center",
        width: 300,
        height:50,
        backgroundColor: "#7C7FCA",
        marginTop: 20,
        borderRadius: 30
    },
    buttonText:{
        color:"#fff",
        fontSize: 18,
        marginTop: 10,
        alignSelf: "center"
    },
    policy:{
        marginTop: 2,
        color: "#7C7FCA",
    },
    terms:{
        marginTop: 2,
        color: "#7C7FCA",
    }

});
