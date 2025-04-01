class LinkedList{
    constructor() {
        this.head = null;

    }
    append(value){
       const newNode = new Node(value); // create node as set to null
        if(this.head == null){
            this.head=newNode;
            return;
        }
        else {    
        let current = this.head;
        while (current.nextNode){
            current = current.nextNode
        }
        current.nextNode=newNode;
    }
    return this;
    }
    prepend(value) {
        const newNode = new Node(value);
        if(this.head == null) {
            this.head = newNode;
            return;
        }
        newNode.nextNode = this.head;
        this.head = newNode;
    }
    
    size(value){
        let count = 0;
        let current = this.head;
        while (current) {
            current = current.nextNode;
            count++;            
        }
        return count;
    }

    getHead(value) {
        return this.head;
    }
    getTail() {
        let current = this.head;
        while(current.nextNode){
            current=current.nextNode
            
        }
        return current;
    }
    at(index){
        if(this.head==null){
           const newNode = new Node(value);
        }
        if (index <= -1)
            return null;
        let current = this.head;
        let count = 0;
        while(current){
            if (current.nextNode  = null) return null
            if(current == index) return current;
            count++;
        }
    }
    pop() {
        let temp = this.head;
        let temp2=this.head;
        while(temp.nextNode) {
            temp2=temp;
            temp=temp.nextNode;
        }
        
        temp=temp2;
         
        temp2.nextNode=null  
        
        this.length--;
        return temp2;
    }
    contains(value){
        let current = this.head;
        let isBool = false;
        while(current) {
            if(current.value === value){
                  isBool=true;
                  break; 
            }
            current = current.nextNode;          
        }
        return isBool;
    }
    find(value){
        let current = this.head;
        let i=0;
        while(current) {
            if (current.value === value){
                i;
                break;
            }
            current=current.nextNode;
            i++;
        }
        return i;
    }

    insertAt(value, index){
        let current = this.head;
        const newNode = new Node(value);
        index--;
        while(index!=1) {
            current=current.nextNode;
            index--;
        }
        newNode.nextNode=current.nextNode;
        current.nextNode=newNode;
        return this;
    }
    removeAt(index){
        let current = this.head;
        let previous = this.head;
        while(index!=1) {
            previous=current
            current=current.nextNode;
            index--;
        }
        previous.nextNode=current.nextNode;
        current=null;
        return this;
    }
    toString(){
        let result="";
        let current = this.head;
        while (current) {
            result += `[${current.value}] -> `
            current = current.nextNode
        }
        result+="null";
        return result;
    }
   
}
class Node{
   constructor (value=null, nextNode=null) {
        this.value=value;
        this.nextNode=nextNode;
   }
}

const list = new LinkedList();
/*list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());
*/
list.append("dog");
list.append("cat");
list.prepend("hamster");
list.pop();
//console.log("there is contains");
console.log("hey"+list.insertAt('cow', 2));
console.log("removing" + list.removeAt(2));
//list.contains("dog");
//console.log("poping..."+list.pop());
console.log(list.contains("hamster"));
console.log(list.find("x"));
console.log(list.size());
console.log(list.head);
console.log(list.getTail())
console.log(list.toString())
