const linkSet1 = [
    document.getElementById("helloWorldLink"),
    document.getElementById("askingQuestionsLink"),
    document.getElementById("add2NumLink"),
    document.getElementById("oddOrEvenLink"),
    document.getElementById("madLibLink"),
]

const linkSet2 = [
    document.getElementById("magic8BallLink"),
    document.getElementById("restaurantLink"),
    document.getElementById("reverseItANLink"),
    document.getElementById("reverseItNOLink"),
    document.getElementById("greaterLessThanLink"),
]

const moreNavBtn = document.getElementById("moreNavBtn");
const pipboyResponse = document.getElementById("pipboyResponse");
const inputField = document.getElementById("inputField");
const inputContainer = document.getElementById("inputContainer");
const inputDirections = document.getElementById("inputDirections");

let animal1 = "";
let container1 = "";
let leastFavColor = "";
let bodyCovering = "";
let verb1 = "";
let favoriteThing = "";
let favoriteFood = "";
let activityToDo = "";
let changeAppearance = "";
let favColor = "";

moreNavBtn.addEventListener("click", () => {
    console.log("butoon click")
    if(moreNavBtn.classList.contains("rotate-180")){
        console.log("does it");
        LinksSwitch(linkSet1, linkSet2);
        moreNavBtn.classList.remove("rotate-180");
    }else{
        console.log("hopefully");
        LinksSwitch(linkSet2, linkSet1);
        moreNavBtn.classList.add("rotate-180");
    }

})

const LinksSwitch = (set1, set2) => {
    set1.forEach(element => {
        element.classList.remove("hidden")
    });
    set1.forEach(element => {
        element.classList.add("active")
    })
    set2.forEach(element => {
        element.classList.remove("active")
    });
    set2.forEach(element => {
        element.classList.add("hidden")
    })
}

inputField.addEventListener("focusin", () => {
    inputDirections.classList.remove("hidden");
})

inputField.addEventListener("focusout", () => {
    inputDirections.classList.add("hidden");
})

inputField.addEventListener("keypress", async(event) => {
    if(event.key === "Enter" && animal1 == ""){
        console.log("1")
        animal1 = inputField.value;
        pipboyResponse.innerText = `PipBoy: Type in a type of container.`;
        inputField.value = "";
    }else if(event.key === "Enter" && (container1 == "") && (animal1 !== "")){
        console.log("2")
        container1 = inputField.value;
        pipboyResponse.innerText = `PipBoy: Type in your least favorite color.`;
        inputField.value = "";
    }else if(event.key === "Enter" && leastFavColor == "" && container1 !== ""){
        leastFavColor = inputField.value;
        pipboyResponse.innerText = `PipBoy: Type in a type of material that covers animals.`;
        inputField.value = "";
    }else if(event.key === "Enter" && bodyCovering == "" && leastFavColor !== ""){
        bodyCovering = inputField.value;
        pipboyResponse.innerText = `PipBoy: Type in a verb or action.`;
        inputField.value = "";
    }else if(event.key === "Enter" && verb1 == "" && bodyCovering !== ""){
        verb1 = inputField.value;
        pipboyResponse.innerText = `PipBoy: Type in your favorite material object or thing.`;
        inputField.value = "";
    }else if(event.key === "Enter" && favoriteThing == "" && verb1 !== ""){
        favoriteThing = inputField.value;
        pipboyResponse.innerText = `PipBoy: Type in your favorite food.`;
        inputField.value = "";
    }else if(event.key === "Enter" && favoriteFood == "" && favoriteThing !== ""){
        favoriteFood = inputField.value;
        pipboyResponse.innerText = `PipBoy: Type in something you want to do but never have.`;
        inputField.value = "";
    }else if(event.key === "Enter" && activityToDo == "" && favoriteFood !== ""){
        activityToDo = inputField.value;
        pipboyResponse.innerText = `PipBoy: Type in a way to change your appearance.`;
        inputField.value = "";
    }else if(event.key === "Enter" && changeAppearance == "" && activityToDo !== ""){
        changeAppearance = inputField.value;
        pipboyResponse.innerText = `PipBoy: Type in your favorite color.`;
        inputField.value = "";
    }else if(event.key === "Enter" && favColor == "" && changeAppearance !== ""){
        console.log("10")
        favColor = inputField.value;
        pipboyResponse.innerText = `Please press the input field and press enter one more time, as I generate a story for you.`;
        inputField.value = "";
    }else if(event.key === "Enter" && favColor !== ""){
        console.log(animal1, container1, leastFavColor, bodyCovering, verb1, favoriteThing, favoriteFood, activityToDo, changeAppearance, favColor)
        let response = await MadLibFetch(animal1, container1, leastFavColor, bodyCovering, verb1, favoriteThing, favoriteFood, activityToDo, changeAppearance, favColor);
        pipboyResponse.innerText = `PipBoy: ${response}`;
        pipboyResponse.classList.remove("text-[4rem]");
        pipboyResponse.classList.add("text-[2rem]")
        inputContainer.classList.add("hidden");
    }
})

const MadLibFetch = async(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10) => {
    const promise = await fetch(`https://allforonebuild-a9fgfcgkh5cnf6f7.westus-01.azurewebsites.net/MadLibNoModel/MadLib/${t1}/${t2}/${t3}/${t4}/${t5}/${t6}/${t7}/${t8}/${t9}/${t10}`);
    const data = await promise.text();
    return data;
}