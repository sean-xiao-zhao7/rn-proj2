import { View, Text } from "react-native";
import { useState } from "react";

const GameScreen = () => {
    const [numberGuessed, setNumberGuessed] = useState();
    return (
        <View>
            <Text>Game start!</Text>
        </View>
    );
};

export default GameScreen;
