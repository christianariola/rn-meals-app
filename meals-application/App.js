import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Categories from "./screens/Categories";
import MealsOverview from "./screens/MealsOverview";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="dark" />
            <NavigationContainer>
              <Stack.Navigator initialRouteName="MealsCategories">
                <Stack.Screen name="MealsCategories" component={Categories} />
                <Stack.Screen name="MealsOverview" component={MealsOverview} />
              </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({});
