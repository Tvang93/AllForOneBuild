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
const pipboyResponse1 = document.getElementById("pipboyResponse1");
const pipboyResponse2 = document.getElementById("pipboyResponse2");
const inputField = document.getElementById("inputField");
const inputField2 = document.getElementById("inputField2");
const inputDirections = document.getElementById("inputDirections");
const input2Directions = document.getElementById("input2Directions");
const input2Container = document.getElementById("input2Container");



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
    inputField.value = "";
})

inputField.addEventListener("focusout", () => {
    inputDirections.classList.add("hidden");
})

inputField.addEventListener("keypress", (event) => {
    if(event.key === "Enter"){
    input2Container.classList.remove("hidden");
    pipboyResponse1.classList.remove("hidden");
    }
})

inputField2.addEventListener("focusin", () => {
    input2Directions.classList.remove("hidden");
    inputField2.value = "";
})

inputField2.addEventListener("focusout", () => {
    input2Directions.classList.add("hidden");
})

inputField2.addEventListener("keypress", async(event) => {
    if(event.key === "Enter"){
        let response = await HelloWorldFetch(inputField.value, inputField2.value);
        pipboyResponse2.innerText = `PipBoy: ${response}`;
    }
})

const HelloWorldFetch = async(input1, input2) => {
    const promise = await fetch(`https://allforonebuild-a9fgfcgkh5cnf6f7.westus-01.azurewebsites.net/AskingQuestions/WakeUpTime/${input1}/${input2}`);
    const data = await promise.text();
    return data;
}