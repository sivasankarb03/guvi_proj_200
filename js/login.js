function start(){
    var email_id=document.getElementsByName('email_id')[0].value;
    var pass=document.getElementsByName('pass')[0].value;
    $(document).ready(function() {
        $.ajax({
            url: 'http://localhost/guvi_user/php/login.php',
            method: 'POST',
            data: {
                'email_id': email_id,
                'pass':pass
            },
            success: function(response) {
                var res=JSON.parse(response);
                if(res.status==='success'){
                    localStorage.setItem("email_id",email_id);
                    alert("Signed In successfully");
                    window.location.replace("http://localhost/guvi_user/profile.html");
                }
                else{
                    alert("Invalid Credentials");
                }
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        })
        
      })
}