function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  var className = document.getElementById('nested').getElementsByClassName('target');
    for (var i=0, l=className.length; i<l; i++){
      return className[i];
  }
}

function increaseRankBy(n){
    var rankedList = document.getElementsByClassName('ranked-list');
    for (var i=0, l=rankedList.length; i<l; i++){
      rankedList[i].innerHTML = parseInt(rankedList[i])+n;
    }
}

function deepestChild(){
  var chosenChild = document.querySelector('div#grand-node div div div div');
  return chosenChild;
}
