let books = [
    {
        title: "The little prince",
        author: "Antoine de Saint-Exupéry",
        year: 1942,
        evaluation: 4.7,
        image: "./images/litte.jpg"
    },
];

// function addBookToLibrary(title, author) {
//     const book = { title, author };
//     myLibrary.push(book);
//     renderLibrary();
//     localStorage.setItem('library', JSON.stringify(myLibrary));
// }

// function loadPage(page, options = {}) {

//     if (options.changeHash === undefined) {
//         options.changeHash = true;
//     }
//     if (options.next === undefined) {
//         options.next = true;
//     }
//     if (options.scroll === undefined) {
//         options.scroll = true;
//     }
//     if (options.changeHash) {
//         document.location.hash = "#" + page.hash;
//     }
//     if ($("#" + page.hash).size() == 0) {
//         if (options.next) {
//             $("#content").append('<div id="' + page.hash + '"></div>');
//         } else {
//             $("#content").prepend('<div id="' + page.hash + '"></div>');
//         }
//         $("#loader").show();
//         jQuery.ajax({
//             url: "/book/" + page.file,
//             success: function(result) {
//                 var converter = new showdown.Converter();
//                 var html = converter.makeHtml(result);
//                 $("#" + page.hash).html(html);
//                 if(page.animation!==undefined){
//                   $("#" + page.hash).prepend('<div id="animation-'+page.hash+'" style="'+page.animation.style+'"></div>');
//                   var vivus=new Vivus('animation-'+page.hash, {duration: page.animation.duration, file: '/svg/'+page.animation.svg, type:'oneByOne'}, finishedDrawing);
//                 }
//                 $("#loader").fadeOut();
//                 if (options.scroll) {
//                     $('html,body').animate({
//                         scrollTop: $("#" + page.hash).offset().top
//                     }, 300, 'swing');
//                 }
//             }
//         });
//     }
// }

// const burger = document.getElementById('burger');
// const menu = document.getElementById('menu');

// burger.addEventListener('click', () => {
//   menu.classList.toggle('active');
//   burger.classList.toggle('active');
// });

const btn = document.querySelector(".btn-toggle");
btn.addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");
});

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
}

let star = 
    document.getElementsByClassName("star");
let output = 
    document.getElementById("output");


function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        star[i].className = "star " + cls;
    }
    output.innerText = "Rating is: " + n + "/5";
}

function remove() {
    let i = 0;
    while (i < 5) {
        star[i].className = "star";
        i++;
    }
}

function liveSearch() {
  // Locate the card elements
  let cards = document.querySelectorAll('.card')
  // Locate the search input
  let search_query = document.getElementById("searchbox").value;
  // Loop through the cards
  for (var i = 0; i < cards.length; i++) {
    // If the text is within the card...
    if(cards[i].innerText.toLowerCase()
      // ...and the text matches the search query...
      .includes(search_query.toLowerCase())) {
        // ...remove the `.is-hidden` class.
        cards[i].classList.remove("is-hidden");
    } else {
      // Otherwise, add the class.
      cards[i].classList.add("is-hidden");
    }
  }
}