document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submit").addEventListener("click", function(event){
        event.preventDefault();
        var userName = document.getElementById("fname").value;
        var userEmail = document.getElementById("email").value;

        if (userName == null || userName == "" || email == null || email == ""){
            txt = "Missing details";
        }
        else{
            txt="Thank you for your enquiry "+userName+"! \nWe will get back in touch as soon as possible.\nExpect an email back to "+userEmail+" from our team in the coming days.";
        }
        alert(txt);
        console.log("is this happening.")
    
    });
});