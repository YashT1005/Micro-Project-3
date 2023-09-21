// import main Data (json file)
const Overall = require('./Data.json');

    // All food items
    function allFoodItems(sample) {
        return sample.map(item => item.foodname);
    }
    console.log("All Food Items : ", allFoodItems(Overall));


    // All the food items with category vegetables 
    function vegetableCategory(sample) {
        return sample.filter(item => item.category === "Vegetable")
    }
    console.log("Vegetables : ", vegetableCategory(Overall));


    // All the food items with category fruit
    function fruitCategory(sample) {
        return sample.filter(item => item.category == "Fruit");
    }
    console.log("Fruits : ", fruitCategory(Overall));


    // All the food items with category protein
    function proteinCategory(sample) {
        return sample.filter(item => item.category == "Protein");
    }
    console.log("Proteins : ", proteinCategory(Overall));


    // All the food items with category nuts
    function nutsCategory(sample) {
        return sample.filter(item => item.category == "Nuts");
    }
    console.log("Nuts : ", nutsCategory(Overall));


    // All the food items with category grains
    function grainsCategory(sample) {
        return sample.filter(item => item.category == "Grain");
    }
    console.log("Grains : ", grainsCategory(Overall));


    // All the food items with category dairy
    function dairyCategory(sample) {
        return sample.filter(item => item.category == "Dairy");
    }
    console.log("Dairy : ", dairyCategory(Overall));


    // All the food items with calorie above 100
    function calorieAbove100(sample) {
        return sample.filter(item => item.calorie > 100);
    }
    console.log("Calorie above 100 : ", calorieAbove100(Overall));


    // All the food items with calorie below 100
    function calorieBelow100(sample) {
        return sample.filter(item => item.calorie < 100);
    }
    console.log("Calorie below 100 : ", calorieBelow100(Overall));


    // All the food items with highest protien content to lowest
    function proteinHighToLow(sample) {
        return sample.sort((a, b) => {
            return b.protiens - a.protiens;
        });
    }
    console.log("Protein - High to Low : ", proteinHighToLow(Overall));


    // All the food items with lowest cab content to highest
    function cabLowToHigh(sample) {
        return sample.sort((a, b) => {
            return a.cab - b.cab;
        });
    }
    console.log("Cab - Low to High : ", cabLowToHigh(Overall));