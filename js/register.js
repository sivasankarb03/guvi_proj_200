function register(){
    var name=document.getElementsByName('name')[0].value;
    var email_id=document.getElementsByName('email_id')[0].value;
    var pass=document.getElementsByName('pass')[0].value;
    var cpass=document.getElementsByName('cpass')[0].value;
    var pno=document.getElementsByName('pno')[0].value;
    var dob=document.getElementsByName('dob')[0].value;
    console.log("hhh");
    if(pass!=cpass){
        alert("Password Mismatched");
    }
    else{
    $(document).ready(function() {
        console.log("hlo");
        $.ajax({
            url: 'http://localhost/guvi_user/php/register.php',
            method: 'POST',
            data: {
                'name':name,
                'email_id': email_id,
                'pass':pass,
                'pno':pno,
                'dob':dob
            },
            success: function(response) {
                var res=JSON.parse(response);
                if(res.status==='success'){
                    alert("Account Created Successfully");
                    window.location.replace("http://localhost/guvi_user/login.html");
                }
                else{
                    alert("Email already exists");
                }
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        })

      })
    }
}

