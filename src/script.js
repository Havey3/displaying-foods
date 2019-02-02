fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        console.table(parsedFoods)

        const foodElement = document.querySelector(".foodList");
        let htmlString = "";

        parsedFoods.forEach(food => {
            
            const luna = (food, category, ethnicity) => {
                return `<h1> ${food} </br>${category} </br> ${ethnicity}</h1>`
            }
            const nameString = `${luna(food.name, food.category, food.ethnicity)}`
            htmlString += nameString
    })
    foodElement.innerHTML = htmlString;
})