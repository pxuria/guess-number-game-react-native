import GameScreen from "@/screens/Game.screen";
import StartGameScreen from "@/screens/StartGame.screen";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";

export default function HomeScreen() {
    const [userNumber, setUserNumber] = useState<number | null>();

    function pickedNumberHandler(pickedNumber: number) {
        setUserNumber(pickedNumber);
    }

    let screen = <StartGameScreen onPickNum={pickedNumberHandler} />;

    if (userNumber) {
        screen = <GameScreen />;
    }

    return (
        <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.root}>
            <ImageBackground
                source={require('../assets/images/background.png')}
                resizeMode="cover"
                style={styles.root}
                imageStyle={{ opacity: 0.3 }}
            >
                <SafeAreaView style={styles.root}>
                    {screen}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
});
