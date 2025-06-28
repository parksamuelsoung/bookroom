
// script.js



// 책장

function study() {
  window.location.href = "study.html";
}

function songs() {
  window.location.href = "songs.html";
}

function bookroom() {
  window.location.href = "bookroom.html";
}

function 아침_부흥을_위한_거룩한_말씀() {
  window.location.href = "아침_부흥을_위한_거룩한_말씀.html";
}

function 메시지() {
  window.location.href = "메시지.html";
}



const textarea = document.getElementById('userInput');
textarea.addEventListener('input', autoResize);

function autoResize(event) {
  const el = event.target;
  el.style.height = 'auto'; // Reset height
  el.style.height = el.scrollHeight + 'px'; // Set to scroll height
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
  "메시지 1 참다운 교회생화을 위해 그리스도 자신께로 돌아옴": "메시지 1 참다운 교회생화을 위해 그리스도 자신께로 돌아옴.html",
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

var bookLinks = document.querySelectorAll(".dropdown-content a");
for (var i = 0; i < bookLinks.length; i++) {
  bookLinks[i].addEventListener("click", function(event) {
    event.preventDefault();
    var book = this.innerText;
    openBook(book);
  });
}

