import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { StatusBar } from "expo-status-bar";
import {CreateUserContext} from "../../global/CreateUserContext";
import {useContext} from "react";
import ShowUserInfo from "../../components/ShowUserInfo";

export default function MakeUserComplete({ navigation }) {

  const {
    firstname,
    lastname,
    email,
    phoneNr,
    school,
    program,
  } = useContext(CreateUserContext)



  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text>Add profile picture</Text>
        <Image
            style={styles.image}
            source={require("../../Images/student.png")}
        />
      </View>
      <Text>Summary</Text>
      <ShowUserInfo userInfo={firstname} userText={"First name"}/>
      <ShowUserInfo userInfo={lastname} userText={"Last name"}/>
      <ShowUserInfo userInfo={school} userText={"School"}/>
      <ShowUserInfo userInfo={program} userText={"Program"}/>
      <Text>ACCOUNT INFORMATION</Text>
      <ShowUserInfo userInfo={email} userText={"Email"}/>
      <ShowUserInfo userInfo={phoneNr} userText={"Phone number"}/>
      <View>
        <TouchableOpacity
            style={styles.button}
            title="Complete"
            onPress={() => {
              navigation.navigate("frontPage");}}
        >
          <Text style={styles.next}>Complete</Text>
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
  viewWrap:{
    borderWidth: 1,
    borderColor: "#f3f2f2",
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
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
  next: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 15
  },
  widthText:{
    width: 150
  },
  widthValue: {
    width: 150
  }
});
