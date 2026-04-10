import { LibraryItem,ResourceMeta,countAvailableItems} from "./ResourceStore.js";

const item1 = new LibraryItem(101,"JAVA",true);
const item2 = new LibraryItem(102,"FULLSTACK",true);
const item3 = new LibraryItem(103,"Python",true);
const item4 = new LibraryItem(104,"IPR",false);
const item5 = new LibraryItem(105,"IOT_MATERIAL",false);
//const item6 = new LibraryItem(106,"DAA",true);

console.log(item1.getDetails())
console.log()
console.log(item2.getDetails()+'\n')
console.log(item3.getDetails()+'\n')
console.log(item4.getDetails()+'\n')
console.log(item5.getDetails()+'\n')
//console.log(item6.getDetails()+'\n')


console.log("Resource Meta : "+ResourceMeta);

const itemArray:LibraryItem[] = [item1,item2,item3,item4,item5];
countAvailableItems(itemArray);
