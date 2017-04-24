$("#signin").click(function() {
    var url = "http://membershipwebapi977290.azurewebsites.net/api/Members/signin?";
    url += "username=" + $("#username").val();
    url += "&password=" + $("#password").val();
    console.log(url);
    $.get(url, function(data, status) {
        console.log(data);
        if (data.Status == true) {
            console.log("Status = " + data.Status);
            $("#suc").show();
        } else {
            console.log("Status = " + data.Status);
            $("#err").show();
        }
    });
});
