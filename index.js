//In a MAX Binary Heap, Parent Nodes are ALWAYS LARGER than child nodes.
//In a MIN Binary Heap, Parent Nodes are ALWAYS SMALLER than child nodes.
//NO ORDER between left and right.
//Left Children should be filled out first
//Commonly used for Priority Queues

//STORING IN ARRAY: We can store a heap in a flat array.
//In order to figure out the left child of a node, we take it's index,
//double it and add 1. 
//In order to figure out the right child, we take it's index,
//double it, and add 2.
//In order to figure out the parent of a node, we subtract 1 and divide by 2.

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  //Method to insert a node into maxheap
  insert(val) {
    this.values.push(val); //push to end of arr of values

    //bubble up to place last element into correct spot
    this.bubbleUp();

  }

  //method to bubble up until we find right spot to place new value
  bubbleUp() {
    let index = this.values.length - 1; //index of last element
    let element = this.values[index]; //actual element

    //keep looping to try to find where to put the new value
    //if index is 0 we already know it's the largest element so we stop
    //we also BREAK out of the loop if element is less or equal to parent
    //this means we already found it's spot and no further swapping is needed
    while (index > 0) {
      //set the parentindex
      //find the right parent in the arr by subtracting one 
      //from the last element and dividing by 2
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex]; //actual parent element

      //if element is less or equal to parent, we can break
      if (element <= parent) break;

      //if not...swap current parent with element
      this.values[parentIndex] = element;
      this.values[index] = parent;
      //update current el index to be that of it's recently swapped parent
      index = parentIndex;
    }
  }

  //Method to remove the max parent by removing the it and replacing it with 
  //the most recent insertion (last element) and then swap (bubble down) 
  //into the right place
  removeMax() {
    //swap max el for last el
    const max = this.values[0]; //get first value
    const end = this.values.pop(); //remove and get last value
    this.value[0] = end; //make last be first

    //bubble down to find right place for new first el
    
  }

  //method to bubble down in the arr until
  //we find the right spot for the newly swapped first element
  bubbleDown() {
    let index = 0; //index, start at the beginning
    let length = this.values.length; //length of arr
    let element = this.values[0]; //the first element that we want to move

    while(true) {
      let leftChildIndex = 2 * index + 1; //formula to get left child
      let rightChildIndex = 2 * index + 2; //formula to get right child
      let leftChild;
      let rightChild;
      let swap = null; //to keep track of swaps

      //if left index is not out of bounds
      if (leftChildIndex < length) {
        //set actual left child element
        leftChild = this.values[leftChildIndex];

        //if the left child is greater than the element...
        if (leftChild > element) {
          swap = leftChildIndex; //to keep track of which index is bigger
        }
      }
      //if right index is not out of bounds
      if (rightChildIndex < length) {
        //set actual right child element
        rightChild = this.values[rightChildIndex];

        //if we haven't already swapped the left child
        //AND the right child is greater than the element,
        //OR 
        //if we HAVE already swapped the left child
        //BUT (AND) the right child happens to be bigger than the left
        if (
          (!swap && rightChild > element) || 
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex; //make swap be the right index
        }
      }
      
      //break out of loops if there were no swaps
      if (swap === null) break;

      //if there were swap(s), swap with the correct one
      this.values[index] = this.values[swap];
      
    }
  }
  
}