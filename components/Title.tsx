import { customColors } from "@/constants/Colors";
import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

interface Props {
    children: ReactNode;
}

const Title = ({ children }: Props) => {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: customColors.accent500,
        textAlign: "center",
        padding: 12,
        borderWidth: 2,
        borderColor: customColors.accent500,
    }
});