
$(document).ready(function() {
  $('#content').load('html/Matariki.html');

  $('#links a').click(function() {
    var url = $(this).attr('href');
    urlsplit = url.split('&');
    var page = urlsplit[0];
    var desc = urlsplit[1];
    //alert(urlsplit);

    $('#content').load('html/' + page + '.html');

    document.getElementById("title").innerHTML = page;
    document.getElementById("desc").innerHTML = desc;

    if (page == "Matariki"){
        document.getElementById("background").className = "matariki";
    }
    if (page == "Waitaa"){
        document.getElementById("background").className = "waitaa";
    }
    if (page == "Waitii"){
        document.getElementById("background").className = "waitii";
    }
    if (page == "Tapu-aa-rangi"){
        document.getElementById("background").className = "tapu-aa-rangi";
    }
    if (page == "Tapu-aa-nuku"){
        document.getElementById("background").className = "tapu-aa-nuku";
    }
    if (page == "Ururangi"){
        document.getElementById("background").className = "ururangi";
    }
    if (page == "Waipuna-aa-rangi"){
        document.getElementById("background").className = "waipuna-aa-rangi";
    }

    urlsplit = [];

    return false;



  });
});
