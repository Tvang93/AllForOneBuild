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
const optionsContainer = document.getElementById("optionsContainer");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");

let choice = "";

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

option1.addEventListener("click", async() => {
    if(option1.innerText == "Chicken"){
        choice = option1.innerText;
        let response = await RestaurantPickerFetch(option1.innerText);
        pipboyResponse.innerText = `PipBoy: ${response}`;
        option1.innerText = "No, give me something else.";
        option2.innerText = "Sure, sounds good.";
        option3.innerText = "I want to go back."
    }else{
        let response = await RestaurantPickerFetch(choice);
        pipboyResponse.innerText = `PipBoy: ${response}`;
    }
})

option2.addEventListener("click", async() => {
    if(option2.innerText == "Beef"){
        choice = option2.innerText;
        let response = await RestaurantPickerFetch(option2.innerText);
        pipboyResponse.innerText = `PipBoy: ${response}`;
        option1.innerText = "No, give me something else.";
        option2.innerText = "Sure, sounds good.";
        option3.innerText = "I want to go back."
    }else{
        pipboyResponse.innerText = `PipBoy: Glad I can be of service.`;
    }
})

option3.addEventListener("click", async() => {
    if(option3.innerText == "Seafood"){
        choice = option3.innerText;
        let response = await RestaurantPickerFetch(option3.innerText);
        pipboyResponse.innerText = `PipBoy: ${response}`;
        option1.innerText = "No, give me something else.";
        option2.innerText = "Sure, sounds good.";
        option3.innerText = "I want to go back."
    }else{
        option1.innerText = "Chicken";
        option2.innerText = "Beef";
        option3.innerText = "Seafood";
        pipboyResponse.innerText = `PipBoy: Are you hungry? What do you feel like eating?`;
    }
})

const RestaurantPickerFetch = async(text) => {
    const promise = await fetch(`https://allforonebuild-a9fgfcgkh5cnf6f7.westus-01.azurewebsites.net/RestaurantPicker/RestuarantPicker/${text}`);
    const data = await promise.text();
    return data;
}