import PrimaryButton from "@/components/PrimaryButton";
import { customColors } from "@/constants/Colors";
import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";

interface Props {
    onPickNum: (val: number) => void;
}

const StartGameScreen = ({ onPickNum }: Props) => {
    const [number, setNumber] = useState('');

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

    return (
        <View style={styles.inputContainer}>
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
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        borderRadius: 8,
        padding: 16,
        marginHorizontal: 24,
        backgroundColor: "#4e0329",
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
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