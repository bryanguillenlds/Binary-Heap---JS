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
    while(index > 0) {
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
}