function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.left)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}

function findOrAdd(rootNode, newNode){
  if (rootNode.data === newNod)
  if (rootNode.right < newNode.data){
    
  }
}

function max(rootNode){
  if (rootNode.right){
    max(rootNode.right)
  } else {
    return rootNode.right
  }
}

function min(){
  if (rootNode.left){
    min(rootNode.left)
  } else {
    return rootNode.left
  }
}