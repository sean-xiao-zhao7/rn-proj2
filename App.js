import { useState, useEffect } from "react";
import { ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { styles } from "./styles/styles";

export default function App() {
    const [screen, setScreen] = useState("StartGameScreen");
    const [userNum, setUserNum] = useState();

    useEffect(() => {
        if (userNum) {
            setScreen("GameScreen");
        }
    }, [userNum]);

    const userNumberHandler = (num) => {
        setUserNum(num);
    };

    let screenComp;

    switch (screen) {
        case "StartGameScreen":
            screenComp = (
                <StartGameScreen userNumberHandler={userNumberHandler} />
            );
            break;
        case "GameScreen":
            screenComp = <GameScreen />;
            break;
        default:
            screenComp = (
                <StartGameScreen userNumberHandler={userNumberHandler} />
            );
    }

    return (
        <LinearGradient
            colors={[
                "rgb(230, 255, 224)",
                "rgb(126, 209, 228)",
                " rgb(120, 222, 123)",
            ]}
            style={styles.linearGradient}
        >
            <ImageBackground
                source={require("./assets/favicon.png")}
                resizeMode={"repeat"}
                style={styles.imageBackground}
                imageStyle={styles.imageBackgroundImage}
            >
                {screenComp}
            </ImageBackground>
        </LinearGradient>
    );
}
