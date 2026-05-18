let books = [
    {
        id:1,
        title: "The little prince",
        author: "Antoine de Saint-Exupéry",
        year: 1942,
        evaluation: 4.7,
        kategoria: "Фэнтези",
        image: "./images/litte.jpg",
        description: "book about..."

    },
    {
        id:2,
        title: "Little women",
        author: " Louisa May Alcott ",
        year: 1888,
        evaluation: 4.7,
        image: "./images/wom.jpg"
    },
    {
        id:3,
        title: "Pride and Prejudice",
        author: " Jane Austen",
        year: 1817,
        evaluation: 4.7,
        image: "./images/PandP.jpg"
    },
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        year: 1997,
        evaluation: 4.7,
        image: "./images/harry.jpg"
    },
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
  document.body.classList.toggle("dark-team");
});

if (localStorage.getItem('team') === 'dark') {
  document.body.classList.add('dark-team');
}



let star = 
    document.getElementsByClassName("star");
let output = 
    document.getElementById("output");


function stars(n) {
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
  let cards = document.querySelectorAll('.card')
  let search_query = document.getElementById("searchbox").value;
  for (var i = 0; i < cards.length; i++) {
    if(cards[i].innerText.toLowerCase()
      .includes(search_query.toLowerCase())) {
        cards[i].classList.remove("is-hidden");
    } else {
      cards[i].classList.add("is-hidden");
    }
  }
}

async function getBook(){
  
}





// function cardBook(books){

// const container = document.getElementById('book');

//   for (let book of books){
//     `<div>
//         
//     </div>`
//     container.innerHTML += 
//   }
// }

document.addEventListener('DOMContentLoaded', () => {
    fetch('Zolotariova_onloneLibrary.php')
        .then(response => response.json())
        .then(books => {
            const container = document.querySelector('.card_cont');
            
            books.forEach(book => {
                const card = document.createElement('div');
                card.className = 'card';
                
                card.innerHTML = `
                    <img src="${books.image}" onclick="description('${books.id}')">
                    <h5>${books.title}</h5>                
                    <div>${books.evaluation}</div>                  
                    <button onclik="reviews('${books.id}')">Reviews</button>
                `;  //свойство вставить код в html
                
                container.appendChild(card); //метод добавленія элемент внутрь card_cont
            });
        })
        .catch(error => console.error('Ошибка:', error));
});

function description(booksId){
   console.lof(booksId);
}

function reviews(booksId){
   console.lof(booksId);
}