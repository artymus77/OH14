import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


export default function ShowScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My messages:</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        marginBottom: 30,
        marginTop: 80,
        fontSize: 22,
    },
});
