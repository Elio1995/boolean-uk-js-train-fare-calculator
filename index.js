// let travelledkm = Number(prompt("How far are you going to travel'in km'?"))
// let pricepertravelledkm = 0.21
// let travelprice = pricepertravelledkm * travelledkm
// let travelprice20 = (pricepertravelledkm * travelledkm) * 0.8
// let travelprice40 = (pricepertravelledkm * travelledkm) * 0.6
// let travelpricefixed = travelprice.toFixed(2)
// let travelprice20fixed = travelprice20.toFixed(2)
// let travelprice40fixed = travelprice40.toFixed(2)
// let yourAge= Number(prompt("How old are you?"))
// if (yourAge < 18) alert(`You have 20% discount. You will have to pay ${travelprice20fixed}.`)
// if (yourAge > 65) alert(`You have 40% discount. You will have to pay ${travelprice40fixed}.`)
// if (yourAge > 18) alert(`You will have to pay ${travelpricefixed}.`)

// console.log("Travelled KM: ", travelledkm)
// console.log("Price Per Travelled KM: ", pricepertravelledkm)
// console.log("Your Age ", yourAge)
// console.log("Travel Price when you are under 18: ", travelprice20fixed)
// console.log("Travel Price when you are over 65: ", travelprice40fixed)
// console.log("Travel Price when you are from 18 to 65: ", travelpricefixed)


let travelkmLIMN = 120
let travelkmLOMN = 130
let travelkmLOLI = 140
let pricepertravelledkmtoLIMN = 0.9
let pricepertravelledkmtoLOMN = 0.8
let pricepertravelledkmtoLOLI = 0.7
let travelpriceLIMN = pricepertravelledkmtoLIMN * travelkmLIMN
let travelpriceLOMN = pricepertravelledkmtoLOMN * travelkmLOMN
let travelpriceLOLI = pricepertravelledkmtoLOLI * travelkmLOLI
let travelpriceLIMN18 = (pricepertravelledkmtoLIMN * travelkmLIMN) * 0.8
let travelpriceLOMN18 = (pricepertravelledkmtoLOMN * travelkmLOMN) * 0.8
let travelpriceLOLI18 = (pricepertravelledkmtoLOLI * travelkmLOLI) * 0.8
let travelpriceLIMN65 = (pricepertravelledkmtoLIMN * travelkmLIMN) * 0.6
let travelpriceLOMN65 = (pricepertravelledkmtoLOMN * travelkmLOMN) * 0.6
let travelpriceLOLI65 = (pricepertravelledkmtoLOLI * travelkmLOLI) * 0.6

let yourAge= Number(prompt("How old are you?"))
let starting = prompt("Choose your Starting Point: Manchester, London, Liverpool")
let destination = prompt("Choose your Destination: Manchester, London, Liverpool")
if (starting == "London" && destination == "Manchester" && yourAge>18) alert (`The price is ${travelpriceLOMN}`) 
if (starting == "Manchester" && destination == "London" && yourAge>18) alert (`The price is ${travelpriceLOMN}`) 
if (starting == "London" && destination == "Liverpool" && yourAge>18) alert (`The price is ${travelpriceLOLI}`) 
if (starting == "Liverpool" && destination == "London" && yourAge>18) alert (`The price is ${travelpriceLOLI}`) 
if (starting == "Liverpool" && destination == "Manchester" && yourAge>18) alert (`The price is ${travelpriceLIMN}`) 
if (starting == "Manchester" && destination == "Liverpool" && yourAge>18) alert (`The price is ${travelpriceLIMN}`) 
if (starting == "London" && destination == "Manchester" && yourAge<18) alert (`The price is ${travelpriceLOMN18}`) 
if (starting == "Manchester" && destination == "London" && yourAge<18) alert (`The price is ${travelpriceLOMN18}`) 
if (starting == "London" && destination == "Liverpool" && yourAge<18) alert (`The price is ${travelpriceLOLI18}`) 
if (starting == "Liverpool" && destination == "London" && yourAge<18) alert (`The price is ${travelpriceLOLI18}`) 
if (starting == "Liverpool" && destination == "Manchester" && yourAge<18) alert (`The price is ${travelpriceLIMN18}`) 
if (starting == "Manchester" && destination == "Liverpool" && yourAge<18) alert (`The price is ${travelpriceLIMN18}`) 
if (starting == "London" && destination == "Manchester" && yourAge>65) alert (`The price is ${travelpriceLOMN65}`) 
if (starting == "Manchester" && destination == "London" && yourAge>65) alert (`The price is ${travelpriceLOMN65}`) 
if (starting == "London" && destination == "Liverpool" && yourAge>65) alert (`The price is ${travelpriceLOLI65}`) 
if (starting == "Liverpool" && destination == "London" && yourAge>65) alert (`The price is ${travelpriceLOLI65}`) 
if (starting == "Liverpool" && destination == "Manchester" && yourAge>65) alert (`The price is ${travelpriceLIMN65}`) 
if (starting == "Manchester" && destination == "Liverpool" && yourAge>65) alert (`The price is ${travelpriceLIMN65}`) 
