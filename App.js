import { useState, useEffect } from "react";
import {
    ImageBackground,
    SafeAreaView,
    KeyboardAvoidingView,
    ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { styles } from "./styles/styles";

export default function App() {
    const [screen, setScreen] = useState("StartGameScreen");
    const [initialNum, setInitialNum] = useState();

    useEffect(() => {
        if (initialNum) {
            setScreen("GameScreen");
        }
    }, [initialNum]);

    const [fontsLoaded] = useFonts({
        "kdam-thmor-pro": require("./assets/fonts/KdamThmorPro-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const userNumberHandler = (num) => {
        setInitialNum(num);
    };

    let screenComp;

    switch (screen) {
        case "StartGameScreen":
            screenComp = (
                <StartGameScreen userNumberHandler={userNumberHandler} />
            );
            break;
        case "GameScreen":
            screenComp = <GameScreen initialNum={initialNum} />;
            break;
        default:
            screenComp = (
                <StartGameScreen userNumberHandler={userNumberHandler} />
            );
    }

    return (
        <ScrollView contentContainerStyle={styles.flex1}>
            {/* <KeyboardAvoidingView style={styles.flex1} behavior={"position"}> */}
                <LinearGradient
                    colors={[
                        "rgb(230, 255, 224)",
                        "rgb(126, 209, 228)",
                        " rgb(120, 222, 123)",
                    ]}
                    style={styles.flex1}
                >
                    <ImageBackground
                        source={require("./assets/favicon.png")}
                        resizeMode={"repeat"}
                        style={styles.flex1}
                        imageStyle={styles.imageBackgroundImage}
                    >
                        <SafeAreaView style={{ flex: 1 }}>
                            {screenComp}
                        </SafeAreaView>
                    </ImageBackground>
                </LinearGradient>
            {/* </KeyboardAvoidingView> */}
        </ScrollView>
    );
}
