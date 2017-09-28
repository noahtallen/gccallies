var elements = ["about", "resources", "leaders"];
var bttns = ["aboutBttn", "resourcesBttn", "leadersBttn"];
function hideElements() {
  for(var i = 0; i < elements.length; i++)
  {
    var el = document.getElementById(elements[i])
    el.style.display = 'none'
  }
}
function changeButtonColor() {
  for(var i = 0; i < bttns.length; i++)
  {
    var bttn = document.getElementById(bttns[i])
    bttn.style.backgroundColor = " #008f95"
  }
}
function showElement(element) {
  hideElements()
  changeButtonColor()
  var showEl = document.getElementById(element)
  var showBttn = document.getElementById(element+'Bttn')
  showBttn.style.backgroundColor = '#eb6e80'	
  showEl.style.display = 'block'
}
function showBttns() {
  var ham = document.getElementById("showButtons")

  if(ham.classList.contains("is-active")) {
    ham.classList.remove("is-active")
    for(var i = 0; i < bttns.length; i++) {
      b = document.getElementById(bttns[i])
      b.style.display = 'none';
      if(i === bttns.length-1) {
        document.getElementById(bttns[i]).style.boxShadow = "none"
      }
    }
  }
  else {
    ham.classList.add("is-active")
    for(var i = 0; i < bttns.length; i++) {
      b = document.getElementById(bttns[i])
      b.style.display = 'block';
      if(i === bttns.length-1) {
        document.getElementById(bttns[i]).style.boxShadow = "2px 2px 3px rgba(0, 0, 0, 0.4)"
      }
    }
  }
}
