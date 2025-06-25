import Title from "@/components/Title";
import { StyleSheet, Text, View } from "react-native";

const GameScreen = () => {
    return (
        <View style={styles.screen}>
            <Title>Oppenents Guess</Title>

            <View>
                <Text></Text>
            </View>
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
});