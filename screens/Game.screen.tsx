import NumberContainer from "@/components/game/NumberContainer";
import Card from "@/components/ui/Card";
import GuessLogItem from "@/components/ui/GuessLogItem";
import InstructionText from "@/components/ui/InstructionText";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Title from "@/components/ui/Title";
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, useWindowDimensions, View } from "react-native";

function generateRandomeBetween(min: number, max: number, exclude: number) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomeBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

interface Props {
    userNumber: number;
    onGameover: (val: number) => void;
}

let minBoundary = 1,
    maxBoundary = 100;

const GameScreen = ({ userNumber, onGameover }: Props) => {
    const intialGuess = generateRandomeBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(intialGuess);
    const [guessRounds, setGuessRounds] = useState([intialGuess]);
    const { width } = useWindowDimensions();

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameover(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameover, guessRounds])

    function nextGuessHandler(direction: 'lower' | 'greater') {
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't Lie!", "You know that this is wrong...",
                [{ text: 'Sorry!', style: 'cancel' }]
            );
            return;
        }
        if (direction === 'lower') maxBoundary = currentGuess;
        else minBoundary = currentGuess + 1;
        const newRandNumber = generateRandomeBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandNumber);
        setGuessRounds(prev => [newRandNumber, ...prev]);
    }

    const guessRoundsListLength = guessRounds.length;

    let content = (
        <>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText} text="Higher or lower?" />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="remove" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </>
    );

    if (width > 500) {
        content = (
            <View style={styles.buttonContainerWide}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="remove" size={24} color="white" />
                    </PrimaryButton>
                </View>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="add" size={24} color="white" />
                    </PrimaryButton>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.screen}>
            <Title>Oppenents Guess</Title>
            {content}
            <View style={styles.listContainer}>
                {/* {guessRounds.map(guessRound => (<Text key={guessRound}>{guessRound}</Text>))} */}
                <FlatList
                    data={guessRounds}
                    renderItem={itemData => <GuessLogItem roundNumber={guessRoundsListLength} guess={itemData.item} />} />

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
        alignItems: 'center'
    },
    instructionText: {
        marginBottom: 12
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainerWide: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 1
    },
    listContainer: {
        flex: 1,
        padding: 16,
    }
});