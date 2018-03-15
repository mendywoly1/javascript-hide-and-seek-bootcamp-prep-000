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

  for (let i = 0; i < arl[0].children.length; i++){
    arl[0].children[i].innerHTML.push(console.log(parseInt(arl[0].children[i].innerHTML) + n))
  }
  
    for (let i = 0; i < arl[1].children.length; i++){
      console.log(parseInt(arl[1].children[i].innerHTML) + n)
    }

}

