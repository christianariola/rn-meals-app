import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Categories from "./screens/Categories";
import MealsOverview from "./screens/MealsOverview";
import MealDetails from "./screens/MealDetails";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <NavigationContainer>
                <Stack.Navigator initialRouteName="MealsCategories" screenOptions={{
                    headerStyle: { backgroundColor: '#351401' },
                    headerTintColor: 'white',
                    contentStyle: { backgroundColor: '#3f2f25'}
                }}>
                    <Stack.Screen
                        name="MealsCategories"
                        component={Categories}
                        options={{ 
                          title: 'All Categories',
                        }}
                    />
                    <Stack.Screen
                        name="MealsOverview"
                        component={MealsOverview}
                        // options={({ route, navigation }) => {
                        //   const catId = route.params.categoryId
                        //   return {
                        //     title: catId,
                        //   }
                        // }}
                    />
                    <Stack.Screen
                        name="MealDetail"
                        component={MealDetails}
                        // options={{
                        //   headerRight: () => {
                        //     return <Button title="Tap me!" onPress={'test'}></Button>
                        //   }
                        // }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({});
