function profile(){
    if(!localStorage.getItem("email_id"))
    {
        window.location.replace("http://localhost/guvi_user/index.html")
    }
    else
    {
    var email_id=localStorage.getItem("email_id");
    $(document).ready(function() {
        $.ajax({
            url: 'http://localhost/guvi_user/php/profile.php',
            method: 'POST',
            data: {
                'email_id': email_id,
            },
            success: function(response) {
                var res=JSON.parse(response);
                console.log(res.id,res.name,res.email_id,res.pno,res.dob);
                document.getElementById('name').innerHTML+=res.name;
                document.getElementById('email_id').innerHTML+=res.email_id;
                document.getElementById('pno').innerHTML+=res.pno;
                document.getElementById('dob').innerHTML+=res.dob;
                document.getElementById('disp').innerHTML = res.name;
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        })
        
      })
    }
}
function signout(){
    window.alert("Are you sure Do you want to Signout")
    localStorage.removeItem("email_id");
    window.location.replace("http://localhost/guvi_user/index.html"); 
}
function home()
{
    if(localStorage.getItem("email_id")){
    var email_id=localStorage.getItem("email_id");
    $(document).ready(function() {
        $.ajax({
            url: 'http://localhost/guvi_user/php/profile.php',
            method: 'POST',
            data: {
                'email_id': email_id,
            },
            success: function(response) {
                var res=JSON.parse(response);
                console.log(res.id,res.name,res.email_id,res.pno,res.dob);
                document.getElementById('disp').innerHTML = "Welcome , "+res.name;
                document.getElementById('ind').innerHTML = ""
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        })
        
      })
    }

}