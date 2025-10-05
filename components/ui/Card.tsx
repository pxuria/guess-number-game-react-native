import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

const Card = ({ children }: { children: ReactNode }) => {
    return (
        <View style={styles.card}>{children}</View>
    )
}

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 36,
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
});