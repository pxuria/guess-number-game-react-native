import Card from "@/components/ui/Card";
import InstructionText from "@/components/ui/InstructionText";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Title from "@/components/ui/Title";
import { customColors } from "@/constants/Colors";
import { useState } from "react";
import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, useWindowDimensions, View } from "react-native";

interface Props {
    onPickNum: (val: number) => void;
}

const StartGameScreen = ({ onPickNum }: Props) => {
    const [number, setNumber] = useState('');
    const { width, height } = useWindowDimensions();

    function inputHandler(enteredNumber: string) {
        setNumber(enteredNumber)
    }

    function confirmHandler() {
        const chosenNumber = parseInt(number);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number!',
                'Number has to be a number between 1 and 99',
                [{ text: "OK", style: "destructive", onPress: resetHandler }])
            return;
        }

        onPickNum(chosenNumber);
    }

    function resetHandler() {
        setNumber('');
    }

    const marginTop = height > 380 ? 30 : 100;

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View style={[styles.rootContainer, { marginTop }]}>
                    <Title>Guess My Number</Title>

                    <Card>
                        <InstructionText text="Enter a Number" />
                        <TextInput
                            style={styles.textInput}
                            maxLength={2}
                            value={number}
                            onChangeText={inputHandler}
                            keyboardType="number-pad"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />

                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>
                                <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.button}>
                                <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screen: { flex: 1 },
    rootContainer: {
        flex: 1,
        // marginTop: deviceHeight < 380 ? 30 : 100,
        alignItems: 'center'
    },
    textInput: {
        width: 50,
        textAlign: "center",
        fontSize: 32,
        borderBottomColor: customColors.accent500,
        borderBottomWidth: 2,
        color: customColors.accent500,
        marginVertical: 8,
        fontWeight: "bold"
    },
    buttonContainer: {
        flexDirection: "row",
    },
    button: {
        flex: 1
    }
});