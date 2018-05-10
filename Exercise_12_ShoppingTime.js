function shoppingTime(memberId, money) {
    // you can only write your code here!
    var memMon = (memberId, money)
    var memberID = memberId
    var sisaUang = money
    var belanjaan = []
    var counter = 0;

    if (memberID === '' || memMon === undefined) {
        return ("Mohon maaf, toko X hanya berlaku untuk member saja")
    } else if (money < 50000) {
        return ("Mohon maaf, uang tidak cukup")
    } else {

        var shopObj = {}
        shopObj.memberId = memberId
        shopObj.money = money

        if (money >= 1500000) {
            sisaUang = sisaUang - 1500000
            belanjaan.push('Sepatu Stacattu')
            //console.log("sisa sepatu " + sisaUang)
        } if (sisaUang >= 500000) {
            belanjaan.push('Baju Zoro')
            sisaUang = sisaUang - 500000
            //console.log("sisa baju zoro " + sisaUang)
        } if (sisaUang >= 250000) {
            belanjaan.push('Baju H&N')
            sisaUang = sisaUang - 250000
            //console.log("sisa H&N " + sisaUang)
        } if (sisaUang >= 175000) {
            belanjaan.push('Sweater Uniklooh')
            sisaUang = sisaUang - 175000
            //console.log("sisa unikloh " + sisaUang)
        } if (sisaUang >= 50000)
            belanjaan.push('Casing Handphone')
            sisaUang = sisaUang - 50000
            //console.log("sisa casing " + sisaUang)
    }
        if (sisaUang < 0) {
            sisaUang = 0
        } else {
            sisaUang = sisaUang
        }
    shopObj.listPurchased = belanjaan
    shopObj.changeMoney = sisaUang
    return shopObj
}




// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
// console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
// console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
// console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
