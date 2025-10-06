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
        color: 'white',
        textAlign: "center",
        padding: 12,
        borderWidth: 2,
        borderColor: 'white',
        maxWidth: '80%',
        width: 300
    }
});