function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}


function deepestChild(){
  var deepchild = document.querySelectorAll('#grand-node div')
  return deepchild[deepchild.length - 1]
}

function increaseRankBy(n){
  // node of all class .ranked-list
  var arl = document.querySelectorAll('.ranked-list')
  // make a variable for both lists
 var firstList = arl[0]
  var secondList = arl[1]
  // to get to list go to firstList.children[].innerHTML
  for (let i = 0, l = ; i < l; i++){
    parseInt(firstList.children[i].innerHTML) + n
  }
  
    for (let i = 0; i < secondList.children.length; i++){
      parseInt(secondList.children[i].innerHTML) + n
    }

}

