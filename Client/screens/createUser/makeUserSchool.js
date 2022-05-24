import { Modal, StyleSheet, Text, TouchableOpacity, TouchableOpacityComponent, View} from "react-native";
import { StatusBar } from "expo-status-bar";
import {Picker} from "@react-native-picker/picker";
import {useContext, useState} from "react";
import LoginButton from "../../components/LoginButton";
import {AntDesign} from "@expo/vector-icons";
import {CreateUserContext} from "../../global/CreateUserContext";

export default function MakeUserSchool({ navigation }) {

    const SchoolInfo = [
        {
            SchoolName: "Høyskolen kristiania",
            program: [
                "Frontend og mobilutvikling",
                "Programmering",
                "E-bussnins",
                "interaktivt-Dessign",
                "Marketsføring"
            ]
        },
        {
            SchoolName: "OsloMet",
            program: [
                "Jeg vet ikke hva de har",
                "men det er sikkert",
                "noe",
                "Bra",
            ]
        },
        {
            SchoolName: "UIO",
            program: [
                "Help",
                "Me",
            ]
        }
    ]


    const [isModalSchoolVisible, setIsModalSchoolVisible] = useState(false)
    const [isModalProgramVisible, setIsModalProgramVisible] = useState(false)

    const {
        setSchool,
        setProgram,
        school,
        program
    } = useContext(CreateUserContext)

    function getProgramFromSchool(){
        const schoolInfo = SchoolInfo.find((element) => element.SchoolName === school)
        return schoolInfo.program
    }

    function getProgram(itemValue){
        setSchool(itemValue)
        const firstProgram = SchoolInfo.find((element) => element.SchoolName === itemValue)
        setProgram(firstProgram.program[0])
    }

    function onPress(){
        navigation.navigate("makeUserPassword")
    }

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View>
            <Text style={styles.title}>Create your account</Text>
        </View>

        <Text style={styles.textSchool} >School</Text>
        <TouchableOpacity style={styles.modalSchool} onPress={() => setIsModalSchoolVisible(true)}>
            <View
                style={styles.schoolInfoWrap}>
                <Text>{school}</Text>
                <AntDesign name="caretdown" size={15} color="black"/>
            </View>
        </TouchableOpacity>

        <Text style={styles.textProgram}>Program</Text>
        <TouchableOpacity style={styles.modalProgram} onPress={() => setIsModalProgramVisible(true)}>
            <View
                style={styles.schoolInfoWrap}>
                <Text>{program}</Text>
                <AntDesign name="caretdown" size={15} color="black"/>
            </View>
        </TouchableOpacity>

        <Modal
        transparent={false}
        animationType="fade"
        visible={isModalSchoolVisible}
        nRequestClose={() => setIsModalSchoolVisible(false)}
        >
            <View style={styles.backgroundModal}>
                <View style={styles.modalViewSchool}>
                    <Text style={styles.textSchool} >School</Text>
                    <View style={styles.styleSchool}>
                        <Picker
                            selectedValue={school}
                            onValueChange={(itemValue, itemIndex) => {getProgram(itemValue)}}
                        >
                            {SchoolInfo.map((value, i) => (
                                <Picker.Item key={i} label={value.SchoolName} value={value.SchoolName} />
                            ))}
                        </Picker>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => setIsModalSchoolVisible(false)}>
                        <Text style={styles.done}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </Modal>
        <Modal
            transparent={false}
            animationType="fade"
            visible={isModalProgramVisible}
            nRequestClose={() => setIsModalProgramVisible(false)}
        >
            <View style={styles.backgroundModal} >
                <View style={styles.modalViewSchool}>
                    <Text style={styles.textProgram}>Program</Text>
                    <View style={styles.styleProgram}>
                        <Picker
                            selectedValue={program}
                            onValueChange={(itemValue, itemIndex) => {setProgram(itemValue)}}
                        >
                            {getProgramFromSchool().map((value, i) => (
                                <Picker.Item  key={i} label={value} value={value}   />
                            )) }
                        </Picker>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => setIsModalProgramVisible(false)}>
                        <Text style={styles.done} >Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
        <LoginButton navigation={navigation} title={"Next"} onPress={onPress}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
    title: {
        padding: 20,
        marginBottom:20,
        fontSize: 25,
        fontWeight: "bold",
    },
    modalSchool: {
        borderColor: "#d3d3d3",
        margin: 10,
        borderRadius: 10,
        borderWidth:1
    },
    modalProgram: {
        borderColor: "#d3d3d3",
        margin: 10,
        borderRadius: 10,
        borderWidth:1,
    },
    textSchool:{
        fontWeight: "bold",
        fontSize: 20,
        margin: 10,
        marginLeft: 15

    },
    textProgram:{
        fontWeight: "bold",
        fontSize: 20,
        margin: 10,
        marginLeft: 15
    },
    schoolInfoWrap:{
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    backgroundModal: {
        backgroundColor: "#5b5b5b",
        height: "100%"
    },
    button: {
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: "#7C7FCA",
        width: 300,
        borderRadius: 20,
        padding: 10,
        margin: 10,
    },
    done: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 15
    },
    styleSchool:{
        borderWidth: 1,
        width: "110%",
        borderColor: "#d3d3d3",
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 10,
    },
    styleProgram:{
        borderWidth: 1,
        width: "110%",
        borderColor: "#d3d3d3",
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 10,

    },
    modalViewSchool: {
        marginTop: 130,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 40,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }
});