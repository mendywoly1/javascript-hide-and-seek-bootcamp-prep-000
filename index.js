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

  // to get to list go to firstList.children[].innerHTML
  for (let i = 0; i < arl[0]children.length; i++){
    parseInt(arl[0].children[i].innerHTML) + n
  }
  
    for (let i = 0; i < arl[1].children.length; i++){
      parseInt(arl[1].children[i].innerHTML) + n
    }

}

