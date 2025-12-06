import "./styles.css";
import { HashMap } from "./hash-map";
import { HashSet } from "./hash-set";

const testMap = new HashMap;
const testSet = new HashSet;


testMap.set('apple', 'red')
testMap.set('banana', 'yellow')
testMap.set('carrot', 'orange')
testMap.set('dog', 'brown')
testMap.set('elephant', 'gray')
testMap.set('frog', 'green')
testMap.set('grape', 'purple')
testMap.set('hat', 'black')
testMap.set('ice cream', 'white')
testMap.set('jacket', 'blue')
testMap.set('kite', 'pink')
testMap.set('lion', 'golden')
testMap.set('oliver', 'goldenrod')


testSet.set('apple');
testSet.set('banana');
testSet.set('orange');
testSet.set('kiwi');
testSet.set('strawberry');
testSet.set('blueberry');
testSet.set('pear');
testSet.set('grape');
testSet.set('plum');
testSet.set('passionfruit');
testSet.set('mango');
testSet.set('pineapple');

console.log(testSet.entries());



