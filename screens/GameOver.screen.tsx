import PrimaryButton from "@/components/ui/PrimaryButton";
import Title from "@/components/ui/Title";
import { customColors } from "@/constants/Colors";
import { Image, StyleSheet, Text, View } from "react-native";

interface Props {
    roundsNumber: number;
    userNumber: number;
    onStartGame: () => void;
}

const GameOverScreen = ({ roundsNumber, userNumber, onStartGame }: Props) => {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/success.png')} />
            </View>
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
            </Text>

            <PrimaryButton onPress={onStartGame}>Start New Game</PrimaryButton>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',

    },
    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: customColors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontSize: 24,
        marginVertical: 24,
        textAlign: 'center'
    },
    highlight: {
        color: customColors.primary500
    },
});