$(function () {

    var getData = function () {
        var val1 = $('#firstname').val();
        var val2 = $('#password').val();
        var parameters = {firstname: val1, password: val2};
        console.log("getData");

        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/beddit',
            crossDomain: true,
            data: {
                firstname: val1, password: val2
            },
            success: function (resp) {
                alert('successfully posted' + resp);
                heartRate(resp);
            }

        });


    }
    // to get session data
    var getSessionData = function () {
        var val1 = $('#firstname').val();
        var val2 = $('#password').val();
        var parameters = {firstname: val1, password: val2};
        console.log("getData");

        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/sessiondata',
            crossDomain: true,
            data: {
                firstname: val1, password: val2
            },
            success: function (resp) {
                alert('successfully posted' + resp);
                heartRate(resp);
            }

        });


    }

    // invite a person to group
    var invite = function () {
        var val1 = $('#invitetext').val();
        console.log("invite");

        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/invite',
            crossDomain: true,
            data: {
                invite: val1
            },
            success: function (resp) {
                alert('successfully posted');
                //   heartRate(resp);
            }

        });


    }

    var heartRate = function(){
        // alert('inside heartRate ajax'+dataJson);
        var val1 = $('#firstname').val();
        var val2 = $('#password').val();
        $.ajax({
            url: 'http://localhost:8080/heartRate.js',
            type: "GET",
            data : {firstname: val1, password: val2},
            crossDomain: true,

        })

    }


    //sending email
    var sendmail = function () {
        console.log("send File");
        var val1 = $('#fromemail').val();
        var val2 = $('#toemail').val();
        var val3 = $('#subject').val();
        var val4 = $('#bodyarea').val();
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/sendmail',
            // crossDomain: true,
            data:  {
                fromemail: val1, toemail: val2, subject:val3, bodyarea:val4,
            },

            success: function (resp) {
                alert('successfully posted' + resp);
                //  heartRate(resp);
            }

        });


    }

    // getting group info

    var groupsinfo = function () {
        console.log("inside group info");

        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/groupinfo?firstname=mamidiravali1@gmail.com&password=ravaliraj',
            crossDomain: true,
            success: function (resp) {
                alert('successfully posted' + resp);
                //  heartRate(resp);
            }
        });
    }

    //to achieve acheivements

    var achieve = function () {
        console.log("inside achievements");

        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/achievements?firstname=mamidiravali1@gmail.com&password=ravaliraj',
            crossDomain: true,
            success: function (resp) {
                alert('successfully posted' + resp);
                //  heartRate(resp);
            }
        });
    }
    
    //$('#submit').click(getData);
    $('#submit').click(heartRate);
    $('#invite').click(invite);
    $('#sendmail').click(sendmail);
    $('#session').click(getSessionData);
    //$('#heartrate').click(heartRate);
    $('.groupsinfo').click(groupsinfo);
    $('#achieve').click(achieve);

});