class Key{
    private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(){
      return this.signature;
  }
}

class Person {
    private key: Key;

    constructor(key: Key){
        this.key = key;
    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean = false;
    protected tenants: Person[] =[];
    constructor(protected key: Key){}

    comeIn(person: Person): void{
        if(this.door){
            this.tenants.push(person);
            console.log("Door is opened");
        } else {
            console.log("Door is closed");
        }
    }

    abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    openDoor(key: Key){
        if(key.getSignature() === this.key.getSignature()){
            this.door = true;
            console.log("The key fits the lock, the door is open.");
        } else {
            console.log("The key does not fit the lock, the door remains closed.");
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};