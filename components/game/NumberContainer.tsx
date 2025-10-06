import { customColors } from "@/constants/Colors";
import { ReactNode } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

interface Props {
    children: ReactNode;
}

const NumberContainer = ({ children }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: customColors.accent500,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: customColors.accent500,
        fontSize: deviceWidth < 380 ? 28 : 36,
        fontWeight: 'bold'
    }
});