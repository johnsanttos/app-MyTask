import { StyleSheet } from "react-native";
import { Platform } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#121214'
    },
    container: {
        flex: 1,
        backgroundColor: '#121214',
        paddingHorizontal: 30,
        paddingVertical: 50

    },

    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },

    input: {
        backgroundColor: '#29292e',
        color: '#f1f1f1',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    button: {
        backgroundColor: '#eba417',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#121214',
        fontSize: 18,
        fontWeight: 'bold'
    },
    titleText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 50
    },
    buttonTask: {
        backgroundColor: '#29292e',
        padding: 10,
        marginTop: 10,
        borderRadius: 50,
        alignItems: 'center'
    },
    textTask: {
        color: '#f1f1f1',
        fontSize: 20,
        fontWeight: 'bold'
    }
})