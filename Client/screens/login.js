import {Button, StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
            <Text>This is Login!</Text>
            <StatusBar style="auto" />
            <Button
                title="Home page"
                onPress={() => {
                    navigation.navigate("firstStack");
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
