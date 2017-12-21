console.log('js sourced');

$(document).ready(start);

function start () {
    $('.santa').on('click', canSantaFly);
}//end start

function canSantaFly() {
    $.ajax({
        method: 'GET',
        url: '/santa',
        //request goes to the server...
        success: function(response){ //run this when you receive a response from the server
            //res.send in server file becomes our response here
            console.log('get /santa response: ', response);
            getGifts();
        }//end success
    });//end ajax
}

function getGifts () {
    $.ajax({
        method: 'GET',
        url: '/gifts',
        //request goes to the server...
        success: function(response){ //run this when you receive a response from the server
            //res.send in server file becomes our response here
            console.log('get /gifts response: ', response);
        }//end success
    });//end ajax
}