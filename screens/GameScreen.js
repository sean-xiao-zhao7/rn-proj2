import { View, Text, TextInput, Pressable } from "react-native";
import { useState, useEffect } from "react";

import { styles } from "../styles/styles";

const GameScreen = ({ initialNum }) => {
    const [numGuessed, setNumGuessed] = useState("");
    const [aiNum, setAINum] = useState();
    const [gameState, setGameState] = useState("");

    useEffect(() => {
        setAINum(Math.floor(Math.random() * initialNum));
    }, []);

    const guessHandler = () => {
        if (+numGuessed === aiNum) {
            setGameState("won");
        } else if (+numGuessed < aiNum) {
            setGameState("more");
        } else {
            setGameState("less");
        }
    };

    let stateComp;
    switch (gameState) {
        case "won":
            stateComp = (
                <Text style={styles.text}>You've won! Number was {aiNum}!</Text>
            );
            break;
        case "more":
            stateComp = (
                <Text style={styles.text}>
                    Nope, it's higher than {numGuessed}!
                </Text>
            );
            break;
        case "less":
            stateComp = (
                <Text style={styles.text}>
                    Nope, it's lower than {numGuessed}!
                </Text>
            );
            break;
        default:
            stateComp = null;
            break;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Game start!</Text>
            <Text style={styles.text}>
                Try to guess the number the computer has.
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    maxLength={2}
                    keyboardType={"number-pad"}
                    autoCapitalize="none"
                    value={numGuessed}
                    onChangeText={(v) => {
                        setGameState("");
                        setNumGuessed(v);
                    }}
                />
                <Pressable
                    style={styles.button}
                    onPress={guessHandler}
                    android_ripple={{ color: "green" }}
                >
                    <Text style={styles.buttonText}>Guess</Text>
                </Pressable>
            </View>
            {stateComp && (
                <View style={styles.inputContainer}>{stateComp}</View>
            )}
        </View>
    );
};

export default GameScreen;
