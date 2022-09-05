import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Categories from "./screens/Categories";

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <Categories />
        </>
    );
}

const styles = StyleSheet.create({});
