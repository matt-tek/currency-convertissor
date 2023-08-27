import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import Separator from "../Components/Separator";
import { Props } from "../Utils/interface";

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={Styles.container}>
            <View style={Styles.button}>
                <Button title="Convert currency" color='' onPress={() => navigation.navigate('Converter')}/>
            </View>
            <Separator />
            <View style={Styles.button}>
                <Button title="Calcul taxes" onPress={() => navigation.navigate('Taxes')}/>
            </View>
        </View>
    )
}


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 8
    }
})
export default HomeScreen;
