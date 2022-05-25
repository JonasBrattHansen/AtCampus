import {Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityComponent, View} from "react-native";
import { StatusBar } from "expo-status-bar";
import {CreateUserContext} from "../../global/CreateUserContext";
import {useContext} from "react";
import ShowUserInfo from "../../components/ShowUserInfo";
import {Touchable} from "react-native-web";
import * as ImagePicker from "expo-image-picker";
import {login, register} from "../../actions/auth";
import {useDispatch} from "react-redux";

export default function MakeUserComplete({ navigation }) {
  const dispatch = useDispatch();

  const {
    firstname,
    lastname,
    email,
    phoneNr,
    school,
    program,
      image,
      setImage
  } = useContext(CreateUserContext)

  async function onChangeProfilePicture() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (result.uri)
    setImage(result.uri)

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }

  function attemptCreateUser() {
    console.log("kom jeg hit");
    dispatch(register(firstname,lastname, email, phoneNr, school, program, image))
    navigation.navigate("Frontpage")
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.addPicTxt}>Add profile picture</Text>
        <TouchableOpacity
        onPress={onChangeProfilePicture}
        >
          <Image
              style={styles.image}
              source={{uri: image}}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.summary}>Summary</Text>
      <ShowUserInfo userInfo={firstname} userText={"First name"}/>
      <ShowUserInfo userInfo={lastname} userText={"Last name"}/>
      <ShowUserInfo userInfo={school} userText={"School"}/>
      <ShowUserInfo userInfo={program} userText={"Program"}/>
      <Text style={styles.summary}>ACCOUNT INFORMATION</Text>
      <ShowUserInfo userInfo={email} userText={"Email"}/>
      <ShowUserInfo userInfo={phoneNr} userText={"Phone number"}/>
      <View>
        <TouchableOpacity
            style={styles.button}
            title="Complete"
            onPress={() => attemptCreateUser()}
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
    alignSelf: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    margin: 20,
    borderRadius: 50,
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
  },
  summary: {
    color: "grey",
    textAlign: "left",
    margin: 10
  },
  addPicTxt: {
    alignSelf: "center",
    alignItems: "center",
    padding: 10
  }
});
