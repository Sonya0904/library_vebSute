const books = [
    {
        id:"modalWindow",
        title: "The little prince",
        author: "Antoine de Saint-Exupéry",
        year: 1942,
        evaluation: 4.7,
        image: "./images/litte.jpg",
        genre: "Фэнтези",
        data_descript:"modalWindow"

    },
    {
        id:2,
        title: "Little women",
        author: " Louisa May Alcott ",
        year: 1888,
        evaluation: 4.7,
        image: "./images/wom.jpg",
        genre:"Художественная литература"
    },
    {
        id:3,
        title: "Pride and Prejudice",
        author: " Jane Austen",
        year: 1817,
        evaluation: 4.7,
        image: "./images/PandP.jpg",
        genre:"Художественная литература"
    },
    {
        id:4,
        title: "Harry Potter",
        author: "J.K. Rowling",
        year: 1997,
        evaluation: 4.7,
        image: "./images/harry.jpg",
        genre:"Фантастика"
    },
    {
        id:5,
        title: "The little prince",
        author: "Antoine de Saint-Exupéry",
        year: 1942,
        evaluation: 4.7,
        image: "./images/litte.jpg",
        genre:""
    },
];




const btn = document.querySelector(".btn-toggle");
btn.addEventListener("click", function() {
  document.body.classList.toggle("dark-team");
});

if (localStorage.getItem('team') === 'dark') {
  document.body.classList.add('dark-team');
}



const star = document.getElementsByClassName("star"); 
const output = document.getElementsByClassName("output");


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
  const cards = document.querySelectorAll('.card')
  const search_query = document.getElementById("searchbox").value;
  for (var i = 0; i < cards.length; i++) {
    if(cards[i].innerText.toLowerCase()
      .includes(search_query.toLowerCase())) {
        cards[i].classList.remove("is-hidden");
    } else {
      cards[i].classList.add("is-hidden");
    }
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const category = document.querySelectorAll('#dropdown .dropdown-link');
  const search = document.getElementById('searchbox');

  category.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); 

      const selectedCategory = link.getAttribute('data-catedoria');

      if (search) {
        search.value = selectedCategory;
      }
      if (typeof liveSearch === 'function') {
        liveSearch();
      }
    });
  });
});




  const openButtons = document.querySelectorAll('#open');
  const closeButtons = document.querySelectorAll('#close');

  openButtons.forEach(button => {
  button.addEventListener('click', () => {
    const dialogId = button.getAttribute('data-descript');
    const dialog = document.getElementById(dialogId);
    if (dialog) {
      dialog.showModal();
    }  
  });
});

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const dialog = button.closest('dialog');
    if (dialog) {
      dialog.close();
    }
  });
});


function opendropdown(){
    document.getElementById('dropdown').classList.toggle("show");
}

