import { customColors } from "@/constants/Colors";
import GameScreen from "@/screens/Game.screen";
import GameOverScreen from "@/screens/GameOver.screen";
import StartGameScreen from "@/screens/StartGame.screen";
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";

export default function HomeScreen() {
    const [userNumber, setUserNumber] = useState<number | null>();
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);

    function pickedNumberHandler(pickedNumber: number) {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    const gameoverHandler = (rounds: number) => {
        setGameIsOver(true);
        setGuessRounds(rounds);
    };

    const startNewGame = () => {
        setUserNumber(null);
        setGuessRounds(0);
    }

    let screen = <StartGameScreen onPickNum={pickedNumberHandler} />;

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameover={gameoverHandler} />;
    }

    if (gameIsOver && userNumber) {
        screen = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onStartGame={startNewGame} />;
    }

    return (
        <>
            <StatusBar style="light" />
            <LinearGradient colors={[customColors.primary700, customColors.accent500]} style={styles.root}>
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
        </>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
});
