
// script.js



// 책장
function 기본책장() {
  window.location.href = "기본_책장.html";
}

function 아침_부흥을_위한_거룩한_말씀() {
  window.location.href = "아침_부흥을_위한_거룩한_말씀.html";
}



// 성경
function filterBooks(inputId, dropdownIndex) {
  var input, filter, div, a, i, txtValue;
  input = document.getElementById(inputId);
  filter = input.value.toUpperCase();
  div = document.getElementsByClassName("dropdown-content")[dropdownIndex];
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

var bookDictionary = {
  "참다운 교회생활을 위해 모든 것을 포함하신 그리스도를 알고 체험하고 삶": "참다운_교회생활을_위해 모든_것을_포함하신_그리스도를_알고_체험하고_삶.html",

};

function openBook(book) {
  var href = bookDictionary[book];
  if (href) {
    window.location.href = href;
  }
}


function openBookOnEnter(event) {
  if (event.key === "Enter") {
    var input = document.getElementById("bookSearch").value;
    openBook(input);
  }
}


document.getElementById("oldTestamentSearch").addEventListener("keyup", function() {
  filterBooks("oldTestamentSearch", 0);
});


var bookLinks = document.querySelectorAll(".dropdown-content a");
for (var i = 0; i < bookLinks.length; i++) {
  bookLinks[i].addEventListener("click", function(event) {
    event.preventDefault();
    var book = this.innerText;
    openBook(book);
  });
}

