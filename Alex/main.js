var script_url = "https://script.google.com/macros/s/AKfycbyCZgroR9eWOkfMPzXPNMe0L2YLL7oBBGJHZyLSGQKyXgPupNYp/exec";


function insert_value() {
    var name = $("#name").val();
    var zID = $("#zID").val();
    var email = $("#email").val();
    var degree = $("#degree option:selected").val();
    var yearOfStudy = $("#yearOfStudy").val();
    var isArcMember = $("#isArcMember").val();
    var includeML = $("#includeML").val();
    var url = script_url + "?callback-ctrlq&name=" + name + "&zID=" + zID + "&email=" + email + "&degree=" + degree + "&yearOfStudy=" + yearOfStudy + "&isArcMember=" + isArcMember + "&includeML=" + includeML + "&action=insert";
    alert(url);
    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });
    document.getElementById("form").reset();
}
function ctrlq(e){
    alert("Congrats! Registed Successfully")
}
