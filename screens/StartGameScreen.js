import { TextInput, Pressable, View, Text, Alert } from "react-native";
import { useState } from "react";

import { styles } from "../styles/styles";

const StartGameScreen = (props) => {
    const [enteredNum, setEnteredNum] = useState("");
    const startGameHandler = () => {
        const enteredInt = parseInt(enteredNum);
        if (isNaN(enteredInt) || enteredInt < 1 || enteredInt > 99) {
            Alert.alert(
                "Invalid number entered.",
                "Number must be between 0 and 99.",
                [
                    {
                        text: "Confirm",
                        style: "cancel",
                        onPress: () => {
                            setEnteredNum("");
                        },
                    },
                ]
            );
            return;
        }

        props.userNumberHandler(enteredNum);
    };
    const restartGameHandler = () => {
        console.log("Game restart");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>The Guessing Game</Text>
            <Text style={styles.text}>Enter a number to begin!</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    maxLength={2}
                    keyboardType={"number-pad"}
                    autoCapitalize="none"
                    value={enteredNum}
                    onChangeText={setEnteredNum}
                />
                <Pressable
                    style={styles.button}
                    onPress={startGameHandler}
                    android_ripple={{ color: "green" }}
                >
                    <Text style={styles.buttonText}>Start</Text>
                </Pressable>
                <Pressable
                    style={styles.button}
                    onPress={restartGameHandler}
                    android_ripple={{ color: "green" }}
                >
                    <Text style={styles.buttonText}>Restart</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default StartGameScreen;
