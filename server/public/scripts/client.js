console.log('js sourced');

$(document).ready(start);

function start () {
    $('.santa').on('click', canSantaFly);
    $('#addNewGift').on('click', addNewGift);
    getGifts();
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
} //end canSantaFly

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
} //end getGifts

function addNewGift () {
    let newGift = $('#giftName').val();
    $('#giftName').val('');
    console.log('new gift:', newGift);
    
    $.ajax({
        method: 'POST',
        url: '/gifts',
        data: {newGift: newGift},
        //request went to the server..waiting for response
        success: function(response) { //got a response
            console.log('added a new gift', response);
            getGifts();
        },
        error: function (response) {
            console.log('error adding gift!', response);   
        } // if server can't find route
    });
} //end addNewGift
