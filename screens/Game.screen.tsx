import Title from "@/components/Title";
import { StyleSheet, Text, View } from "react-native";

function generateRandomeBetween(min: number, max: number, exclude: number) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomeBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

const GameScreen = () => {
    return (
        <View style={styles.screen}>
            <Title>Oppenents Guess</Title>


            <View>
                <Text>Higher or lower?</Text>
                +
                -
            </View>

            <View>LOG ROUNDS</View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        marginTop: 16,
    },
    title: {
        fontSize: 18,

    }
});