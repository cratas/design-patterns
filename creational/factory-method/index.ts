// Factory method 
// ---------------------
// Factory Method is a creational design pattern that provides an interface for creating objects
// in a superclass, but allows subclasses to alter the type of objects that will be created.

interface Product {
    operation(): string;
}

abstract class Creator {
    public abstract factoryMethod(): Product;

    public someOperation(): string {
        const product =  this.factoryMethod();

        return product.operation();
    };
}

class ConcreteCreator1 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}

class ConcreteProduct1 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct1}';
    }
}

class ConcreteProduct2 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct2}';
    }
}

const clientCode = (creator: Creator) => {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
}

console.log('App: Launched with the ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log('');

console.log('App: Launched with the ConcreteCreator2.');
clientCode(new ConcreteCreator2());