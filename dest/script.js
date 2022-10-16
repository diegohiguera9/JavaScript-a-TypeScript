"use strict";
class NewAccount extends Object {
    constructor(number, balance) {
        super();
        (this.number = number), (this.balance = balance);
    }
}
const accounts = [];
function open(number, balance) {
    const newInfo = new NewAccount(number, balance);
    accounts.push(newInfo);
}
function getBalance(number) {
    const account = accounts.find((element) => element.number === number);
    if (!account) {
        throw new Error("La cuenta no se encontro ");
    }
    return account.balance;
}
function deposit(number, amount) {
    const account = accounts.find((element) => element.number === number);
    if (!account) {
        throw new Error("La cuenta no se encontro ");
    }
    account.balance += amount;
}
function withdraw(number, amount) {
    const account = accounts.find((element) => element.number === number);
    if (!account) {
        throw new Error("La cuenta no se encontro ");
    }
    account.balance -= amount;
}
open("111", 0);
deposit("111", 1000);
console.log(getBalance("111"));
withdraw("111", 500);
console.log(getBalance("111"));
