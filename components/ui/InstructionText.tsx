import { customColors } from "@/constants/Colors";
import { StyleSheet, Text } from "react-native";

interface Props {
    text: string;
    style?: any;
}

const InstructionText = ({ text, style }: Props) => {
    return (
        <Text style={[styles.instructionText, style]}>{text}</Text>
    )
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        color: customColors.accent500,
        fontSize: 24
    },
});