


// script_Songs.js



// Songs

function Songs() {
  window.location.href = "Songs.html";
}

function Bookroom() {
  window.location.href = "Bookroom.html";
}

function SingingWithGrace() {
  window.location.href = "Singing_with_Grace.html";
}


// Songs

function toggleDropdown() {
  var dropdown = document.querySelector(".dropdown-content");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}


function filterSongs(inputId, dropdownIndex) {
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


function getSong(song, 노래) {
  var doc;
  if (노래) {
    doc = 노래사전[song];
  } else {
    doc = songDict[song];
  }
  if (doc) {
    document.getElementById("songContent").srcdoc = doc;

    // Remove underline from links within the iframe content
    var iframe = document.getElementById("songContent");
    iframe.onload = function() {
      var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      var links = iframeDoc.getElementsByTagName("a");
      var text = iframeDoc.getElementsByTagName("b");
      for (var i = 0; i < links.length; i++) {
        text[i].style.fontSize = "40px";
        text[i].style.fontFamily = "Sans-Serif";
      }
      for (var i = 0; i < links.length; i++) {
        links[i].style.textDecoration = "none";
        links[i].style.color = "blue";
        links[i].setAttribute("target", "_blank");
      }
    };
  }
}



function getSongOnEnter(event, 노래) {
  if (event.key === "Enter") {
    var input = document.getElementById("songSearch").value;
    getSong(input, 노래);
  }
}


document.getElementById("songSearch").addEventListener("keyup", function() {
  filterSongs("songSearch", 0);
});

document.getElementById("노래검색").addEventListener("keyup", function() {
  filterSongs("노래검색", 1);
});

var songLinks = document.querySelectorAll(".dropdown-content a");
for (var i = 0; i < songLinks.length; i++) {
  songLinks[i].addEventListener("click", function(event) {
    event.preventDefault();
    var song = this.innerText;
    var 노래 = this.parentNode.parentNode.classList.contains("korean-songs");
    getSong(song, 노래);
  });
}


