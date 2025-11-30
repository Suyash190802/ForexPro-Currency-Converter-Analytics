const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(" form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg=document.querySelector(".msg");


for(let select of dropdowns){
    for(currcode in countryList){
        let newOption= document.createElement("option");
        newOption.innerText = currcode;
        newOption.value = currcode;
        if(select.name === "from" && currcode === "USD") {
            newOption.selected = "selected";
            
        }
        else if(select.name === "to" && currcode === "INR") {
            newOption.selected = "selected";
            
        }
        select.append(newOption);
    }
     select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });

}
const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
let amtValue = amount.value;
if(amtValue === "" || amtValue <1) {
    amtValue = 1;
    amount.value="1";
}
const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  console.log(data);
  let from = fromCurr.value.toLowerCase();
  console.log(from);
  let to = toCurr.value.toLowerCase();
  console.log(to);

  let rate = data[from][to];

let finalAmount = amtValue * rate;
msg.innerText = `${amtValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;

};
const updateFlag= (element)   => {
let currcode = element.value;
let countryCode = countryList[currcode];
let newSrc=`https://flagsapi.com/${countryCode }/shiny/64.png`;
let img=element.parentElement.querySelector("img");
img.src=newSrc;
}

btn. addEventListener("click", async(evt) => {
evt.preventDefault();
updateExchangeRate();
});
window.addEventListener("load",() => {
 updateExchangeRate();

}
);

