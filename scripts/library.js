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

function loadPage(page, options = {}) {

    if (options.changeHash === undefined) {
        options.changeHash = true;
    }
    if (options.next === undefined) {
        options.next = true;
    }
    if (options.scroll === undefined) {
        options.scroll = true;
    }
    if (options.changeHash) {
        document.location.hash = "#" + page.hash;
    }
    if ($("#" + page.hash).size() == 0) {
        if (options.next) {
            $("#content").append('<div id="' + page.hash + '"></div>');
        } else {
            $("#content").prepend('<div id="' + page.hash + '"></div>');
        }
        $("#loader").show();
        jQuery.ajax({
            url: "/book/" + page.file,
            success: function(result) {
                var converter = new showdown.Converter();
                var html = converter.makeHtml(result);
                $("#" + page.hash).html(html);
                if(page.animation!==undefined){
                  $("#" + page.hash).prepend('<div id="animation-'+page.hash+'" style="'+page.animation.style+'"></div>');
                  var vivus=new Vivus('animation-'+page.hash, {duration: page.animation.duration, file: '/svg/'+page.animation.svg, type:'oneByOne'}, finishedDrawing);
                }
                $("#loader").fadeOut();
                if (options.scroll) {
                    $('html,body').animate({
                        scrollTop: $("#" + page.hash).offset().top
                    }, 300, 'swing');
                }
            }
        });
    }
}