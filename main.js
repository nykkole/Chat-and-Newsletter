function populateDates(e){
    e.preventDefault();
    
    $('#chatTuesdays').html('');
    $('#newsletterDays').html('');
    
    var chosenYear = $('#year').val();

    function getChatDates(s) {

        // --------- get chat dates to display as 'Month XX'
        var chatDates = new Array();
        chatDates = s.toDateString().split(' '); // split date object where spaces are
        $('#chatTuesdays').append('<li>' + chatDates[1] + ' ' + chatDates[2] + '</li>'); //display only month and date of array

        // --------- get the date 9 days after each chat Tuesday
        var followingThursday = new Date(s.getFullYear(), s.getMonth(), s.getDate() + 9);

        // --------- get newsletter dates to display as 'Month XX'
        var newsletterDates = new Array();
        newsletterDates = followingThursday.toDateString().split(' '); // split date object where spaces are
        $('#newsletterDays').append('<li>' + newsletterDates[1] + ' ' + newsletterDates[2] + '</li>'); //display only month and date of array
    }

// -------- this function returns chat dates
    function getTuesdays(weekday, n, date) {
            var date = new Date(date.getFullYear(), date.getMonth(), 1);
            var add = (weekday - date.getDay() + 7) % 7 + (n - 1) * 7;
            date.setDate(1 + add);

            return date;
    }

// -------- loop toDateString get second and fourth Tuesday of a month
    for (i=0; i<12; i++) {
                 // Second Tuesday of month i of chosen year.
    getChatDates(getTuesdays(2, 2, new Date(chosenYear, i)));
                 // Fourth Tuesday of month i of chosen year.
    getChatDates(getTuesdays(2, 4, new Date(chosenYear, i)));
    }
};


$('#year').on('keydown', function(e) {
    if (e.keyCode === 13) {
    populateDates(e);
}
});


$('#button').on('click', populateDates);


