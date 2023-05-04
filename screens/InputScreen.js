import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';


export default function InputScreen() {

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Add to show screen</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        width: 270,
        padding: 5,
        borderRadius: 10,
        paddingLeft: 10,
        marginTop: 50,
        marginBottom: 20,
    },
    button: {
        width: 150,
        borderRadius: 10,
        backgroundColor: '#ec6e5b',
        padding: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    },
});
