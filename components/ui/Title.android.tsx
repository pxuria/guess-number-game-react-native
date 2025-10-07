import { ReactNode } from "react";
import { Platform, StyleSheet, Text } from "react-native";

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
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        borderWidth: Platform.select({ ios: 0, android: 2 }),
        borderColor: 'white',
        maxWidth: '80%',
        width: 300
    }
});