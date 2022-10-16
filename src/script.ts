
class NewAccount extends Object {
  number: string;
  balance: number;
  constructor(number: string, balance: number) {
    super();
    (this.number = number), (this.balance = balance);
  }
}
const accounts: Array<NewAccount> = [];

function open(number: string, balance: number): void {
  const newInfo = new NewAccount(number, balance);
  accounts.push(newInfo);
}

function getBalance(number: string) {
  const account: NewAccount | undefined = accounts.find(
    (element) => element.number === number
  );
  if (!account) {
    throw new Error("La cuenta no se encontro ");
  }
  return account.balance;
}

function deposit (number:string, amount:number):void{
  const account: NewAccount | undefined = accounts.find(
    (element) => element.number === number
  );
  if (!account) {
    throw new Error("La cuenta no se encontro ");
  }

  account.balance += amount
}

function withdraw (number:string,amount:number):void {
  const account: NewAccount | undefined = accounts.find(
    (element) => element.number === number
  );
  if (!account) {
    throw new Error("La cuenta no se encontro ");
  }

  account.balance -= amount
}

open("111", 0)

deposit("111", 1000)
console.log(getBalance("111"))

withdraw("111", 500)
console.log(getBalance("111"))
