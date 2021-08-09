

window.onload = function() {
    document.getElementById("btnHint1").onclick = showHint1;
    document.getElementById("btnEnter1").onclick = checkC1;

    document.getElementById("btnHint2").onclick = showHint2;
    document.getElementById("btnEnter2").onclick = checkC2;
}

function showHint1() {
    var x = document.getElementById("hint1");
    if (x.style.display == "inline") {
      x.style.display = "none";
    } else {
      x.style.display = "inline";
    }
  } 

  function checkC1(){
      var x =  document.getElementById("flag1").value;
      
      if(x == "flag_{sUbMiT_tHiS_wHoLe_LiNe}"){
          alert("Congrats! You have completed the first challenge.");
        document.getElementById("flag1").value = "Correct!"
      }else{
        document.getElementById("flag1").value = "Incorrect"
      }
  }

  function showHint2() {
    var x = document.getElementById("hint2");
    if (x.style.display == "inline") {
      x.style.display = "none";
    } else {
      x.style.display = "inline";
    }
  }

  function checkC2(){
    var x =  document.getElementById("flag2").value;
    
    if(x == "u_R_H@ck3r"){
        alert("Congrats! You have completed the second challenge.");
      document.getElementById("flag2").value = "Correct!"
    }else{
      document.getElementById("flag2").value = "Incorrect"
    }
}