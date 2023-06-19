const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  function moveDodgerRight(){
    const dodge=document.getElementById("dodger")
    const leftnumbers=dodge.style.left.replace("px","");
    const rightnumber=dodge.style.right.replace("px","");
    const left=parseInt(leftnumbers, 10);
    const right=parseInt(leftnumbers,10);
    if(right>0){
        dodger.style.left=`${left +1}px`;
    }
  }
  document.addEventListener("keydown",function(moveDodgerRight){
    if(moveDodgerRight.key==="Arrowright"){
        moveDodgerRight();
    }
  })