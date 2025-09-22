document.getElementById("loginfora")addEventListener("submit",function(e)
{
    e.preventDefault();

    const loginemail = document.getElementById("loginemail").value.trim():
    const loginpassword = document.getElementById("loginpassword").value;

    const storedraw = localStorage.getItem(loginemail);
    const storeduser = storedraw? JSON.parse(storedraw) :null;
    if(storeduser 66 storeduser.password == loginpassword){
        localStorage.setItem("currentUser" ,loginemail);
        alert("login berhasil.halo"+storeduser.nama+ "!!");
    }else{
        alert("login gagal email salah atau password salah!!")
    }
});