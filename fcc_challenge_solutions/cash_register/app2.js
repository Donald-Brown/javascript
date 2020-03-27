/**
 * JavaScript Algorithms and Data Structures Projects: Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (DOLLAR)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
 * 

 checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
 */
const denominations = ['ONE HUNDRED', 'TWENTY', 'TEN', 'FIVE', 'ONE', 'QUARTER', 'DIME', 'NICKEL', 'PENNY'];
const moneyDict = {
    'PENNY': 1,
    'NICKEL': 5,
    'DIME': 10,
    'QUARTER': 25,
    'ONE': 100,
    'FIVE': 500,
    'TEN': 1000,
    'TWENTY': 2000,
    'ONE HUNDRED': 10000
};

const lessMoneyFromCid = (amountLeftToPay, cidObj, changeBack, moneyType) => {
    if(amountLeftToPay >= moneyDict[moneyType] && cidObj[moneyType]){
        if(amountLeftToPay >= cidObj[moneyType]){
            const amountToSubtract = cidObj[moneyType];
            amountLeftToPay -= amountToSubtract;
            changeBack.push([moneyType, amountToSubtract / 100]);
            cidObj[moneyType] = 0;
        }else{
            const amountToSubtract = Math.floor(amountLeftToPay / moneyDict[moneyType]) * moneyDict[moneyType];
            amountLeftToPay -= amountToSubtract;
            changeBack.push([moneyType, amountToSubtract/100]);
            cidObj[moneyType] -= amountToSubtract;
        }
    }
    return [amountLeftToPay, cidObj, changeBack];
};

function checkCashRegister(price, cash, cid) {
    let amountLeftToPay = Math.round((cash - price) * 100);

    let cidObj = cid.reduce((acc, [moneyType, amount]) => {
        return {
            ...acc,
            [moneyType]: Math.round(amount * 100)
        }
    }, {});

    let changeBack = [];

    denominations.forEach(moneyType => {
        [amountLeftToPay, cidObj, changeBack] = lessMoneyFromCid(amountLeftToPay, cidObj, changeBack, moneyType);
    });

    if(amountLeftToPay > 0){
        return {status: 'INSUFFICIENT_FUNDS', change: []};
    }

    const amountLeftInCid = Object.values(cidObj).reduce((acc, amount) => acc + amount, 0);

    if(amountLeftInCid > 0){
        return {status: 'OPEN', change: changeBack};
    }

    return {status: "CLOSED", change: cid};
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));