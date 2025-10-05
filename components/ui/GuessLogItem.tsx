import { customColors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

interface Props {
    roundNumber: number;
    guess: number;
}

const GuessLogItem = ({ roundNumber, guess }: Props) => {
    return (
        <View style={styles.listItem}>
            <Text>#{roundNumber}</Text>
            <Text>Opponent&apos;s Guess: {guess}</Text>
        </View>
    )
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: customColors.primary800,
        borderRadius: 40,
        borderWidth: 1,
        padding: 12,
        marginVertical: 8,
        backgroundColor: customColors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3
    }
});