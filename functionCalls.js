//CHECK AGE
const checkAge = age => {
    if (age >= 18) {
        return true
    }
    return false
}

//GREET SOMEONE
const greetAdult = age => {
    if (checkAge(age)) {
        return "Hello there"
    }
    return "Hey kiddo"
}

console.log(greetAdult(17))


//VAT EXERCISE 1

const VATCalculation = (basePrice, VATPercentage) => {
    return basePrice * (VATPercentage / 100)
}

const totalPriceWithVAT = (basePrice, VATPercentage) => {
    const VATAmount = (basePrice, VATPercentage)
    return basePrice + VATAmount
}

console.log(totalPriceWithVAT(500, 21))


//VAT EXERCISE 2
const CalculateBasePrice = (totalPriceWithVAT, VATPercentage) => {
    const basePrice = totalPriceWithVAT / ((VATPercentage / 100) + 1)
    return basePrice
}

const BasePriceAndVAT = (totalPriceWithVAT, VATPercentage) => {
    const basePrice = CalculateBasePrice(totalPriceWithVAT, VATPercentage)
    const VATAmount = (totalPriceWithVAT - basePrice)
    return [basePrice, VATAmount]
}

console.log(BasePriceAndVAT(500, 21))