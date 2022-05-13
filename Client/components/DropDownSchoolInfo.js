import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import {Picker} from "@react-native-picker/picker";


const DropDownSchoolInfo = () => {

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

    const [valueSchool, setValueSchool] = useState("Høyskolen kristiania");
    const [valueProgram, setValueProgram] = useState("");

    function getProgramFromSchool(){
        const school = SchoolInfo.find((element) => element.SchoolName === valueSchool)
        return school.program
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textSchool}>School</Text>
                <Picker style={styles.styleSchool}
                    selectedValue={valueSchool}
                    onValueChange={(itemValue, itemIndex) => setValueSchool(itemValue)}
                >
                    {SchoolInfo.map((value, i) => (
                        <Picker.Item key={i} label={value.SchoolName} value={value.SchoolName} />
                    ))}
                </Picker>
            <Text style={styles.textProgram}>Program</Text>
                <Picker style={styles.styleProgram}
                    selectedValue={valueProgram}
                    onValueChange={(itemValue, itemIndex) => setValueProgram(itemValue)}
                >
                    {getProgramFromSchool().map((value, i) => (
                        <Picker.Item  key={i} label={value} value={value}   />
                    )) }
                </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
    },
    styleSchool:{
        height: 50,
        marginBottom: 20,
        width: 300,

    },
    styleProgram:{
        height: 50,
        width: 300,
        marginBottom: 20,
    },
    textSchool:{
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 10,
        marginRight:230

    },
    textProgram:{
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 10,
        marginRight:210
    }
});

export default DropDownSchoolInfo