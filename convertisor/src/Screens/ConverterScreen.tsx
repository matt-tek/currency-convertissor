import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Separator from "../Components/Separator";
import currency from '../Utils/constant';
import CurrencyMenu from "../Components/Modal";
import { CurrencyType } from "../Utils/interface";
import { Button } from "@rneui/base";

const ConverterScreen = () => {
    const [number, setNumber] = useState('')
    const [selected, setSelected] = useState({key: 0, currency: "", asset_path: ""});

    return (
        <View style={Styles.container}>
            <View style={Styles.menu}>
                <CurrencyMenu onSelect={setSelected}/>
            </View>
            <View style={Styles.convert}>
                <TextInput 
                    style={Styles.input} 
                    placeholder="Sum to be converted" 
                    keyboardType="numeric"
                    value={number}
                    onChangeText={setNumber}
                />
                <Separator />
                <TouchableOpacity style={Styles.touch}>
                    <Text>Convert to {selected.currency}</Text>
                </TouchableOpacity>
                <Text>{number}</Text>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
        backgroundColor: 'green'
    },
    menu: {
        flex: 1,
        alignSelf: 'flex-start',
        backgroundColor: 'cyan',
        marginBottom: '100%'
    },
    convert: {
        backgroundColor: 'blue',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    touch: {
        alignItems: 'center',
        backgroundColor: 'cyan',
        borderBlockColor: 'black',
        borderRadius: 10
    }
})
export default ConverterScreen

