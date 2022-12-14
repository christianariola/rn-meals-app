import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
// import { useRoute } from '@react-navigation/native';

import { MEALS, CATEGORIES } from "../data/dummy-data";

const MealsOverview = ({ route, navigation }) => {
    // const route = useRoute()
    // const alternateCatID = route.params.categoryId
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });
    


    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title

        navigation.setOptions({
            title: categoryTitle
        })
    }, [catId, navigation])



    const renderMealItem = (itemData) => {

        const item = itemData.item;

        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        }

        return (
            <MealItem {...mealItemProps} />
        );
    };

    return (
        <>
            <View style={styles.container}>
                {/* <Text>Meals Overview Screen - {catId}</Text> */}
                <FlatList
                    data={displayedMeals}
                    keyExtractor={(item) => item.id}
                    renderItem={renderMealItem}
                />
            </View>
        </>
    );
};

export default MealsOverview;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});
