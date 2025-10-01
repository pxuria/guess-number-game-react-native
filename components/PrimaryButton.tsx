import { customColors } from "@/constants/Colors";
import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
    children: ReactNode;
    onPress: () => void;
}

const PrimaryButton = ({ children, onPress }: Props) => {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) => pressed ? [styles.pressed, styles.container] : styles.container}
                onPress={onPress}
                android_ripple={{ color: customColors.primary600 }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden"
    },
    container: {
        backgroundColor: customColors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: "white",
        textAlign: "center"
    },
    pressed: {
        opacity: 0.75
    }
});
