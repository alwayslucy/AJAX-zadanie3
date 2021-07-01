$(document).ready( function () {

////// Wariant 1
 /*   $('#get-data').click(function () {

        $.get('https://akademia108.pl/api/ajax/get-post.php')
            .done(function(data) {

                let pId = $('<p></p>').text(`Post ID: ${data.id}`);
                let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
                let pTitle = $('<p></p>').text(`Title: ${data.title}`);
                let pBody = $('<p></p>').text(`Body: ${data.body}`);
                let hr =$('<hr>');

                $('#get-data').after(hr);
                $('#get-data').after(pBody);
                $('#get-data').after(pTitle);
                $('#get-data').after(pUserId);
                $('#get-data').after(pId);

            })

            .fail(function(error) {
                console.error(error);
            })
        }) */


///// Wariant 2

    $('#get-data').click(function () {

        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function(data) {
    
                let pId = $('<p></p>').text(`Post ID: ${data.id}`);
                let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
                let pTitle = $('<p></p>').text(`Title: ${data.title}`);
                let pBody = $('<p></p>').text(`Body: ${data.body}`);
                let hr =$('<hr>');
    
                $('#get-data').after(hr);
                $('#get-data').after(pBody);
                $('#get-data').after(pTitle);
                $('#get-data').after(pUserId);
                $('#get-data').after(pId);
    
            })
    
            .fail(function(error) {
                console.error(error);
            })
        })



})