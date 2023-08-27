import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import ConverterScreen from '../Screens/ConverterScreen';
import TaxesScreen from '../Screens/TaxesScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <Stack.Navigator initialRouteName='Converter'>
            <Stack.Screen name='Select an option' component={HomeScreen}/>
            <Stack.Screen name='Converter' component={ConverterScreen}/>
            <Stack.Screen name='Taxes' component={TaxesScreen}/>
        </Stack.Navigator>
    )
}

export default Navigator