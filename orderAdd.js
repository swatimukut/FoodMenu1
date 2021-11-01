

//To store login details of user in local repository and to create a field in db
user_name= localStorage.getItem("uname");

document.getElementById("uname").innerHTML="Hello "+user_name

function userDetails(){
    userName=document.getElementById("uname").value;
    phNumber=document.getElementById("phoneNumber").value;

   
    localStorage.setItem("uname",userName);
    localStorage.setItem("phoneNumber",phNumber);
    localStorage.setItem("pizza",0);
    localStorage.setItem("wraps",0);
    localStorage.setItem("alferdo",0);
    localStorage.setItem("lasagna",0);
    localStorage.setItem("Spaghetti",0);
    
    localStorage.setItem("arabiata",0);
    localStorage.setItem("pancake",0);
    localStorage.setItem("sandwich",0);

  
    window.location="index.html";

    
}

function readOrder(){
    var user_name=localStorage.getItem("uname")
    var phoneNumber=localStorage.getItem("phoneNumber")
    var pizza1=localStorage.getItem("pizza")
    var lasagna1=localStorage.getItem("lasagna")
    var wraps1=localStorage.getItem("wraps")
    var alferdo1=localStorage.getItem("alferdo")
    
    var Spaghetti1=localStorage.getItem("Spaghetti");
    var arabiata1=localStorage.getItem("arabiata");
    var pancake1=localStorage.getItem("pancake");
    var sandwich1=localStorage.getItem("sandwich"); 

    
   document.getElementById("pizza").innerHTML=pizza1;
   document.getElementById("pizzaCost").innerHTML=pizza1*50;
   document.getElementById("lasagna").innerHTML=lasagna1;
   document.getElementById("lasagnaCost").innerHTML=lasagna1*50;
   document.getElementById("wraps").innerHTML=wraps1;
   document.getElementById("wrapsCost").innerHTML=wraps1*100;
   document.getElementById("alferdo").innerHTML=alferdo1;
   document.getElementById("alferdoCost").innerHTML=alferdo1*250;
   document.getElementById("Spaghetti").innerHTML=Spaghetti1;
   document.getElementById("SpaghettiCost").innerHTML=Spaghetti1*50;
   document.getElementById("arabiata").innerHTML=arabiata1;
   document.getElementById("arabiataCost").innerHTML=arabiata1*100;
   document.getElementById("pancake").innerHTML=pancake1;
   document.getElementById("pancakeCost").innerHTML=pancake1*100;
   document.getElementById("sandwich").innerHTML=sandwich1;
   document.getElementById("sandwichCost").innerHTML=sandwich1*100;
   document.getElementById("totalBill").innerHTML=(pizza1*50)+(lasagna1*50)+(wraps1*100)+(alferdo1*250)+Spaghetti1*50+arabiata1*100+pancake1*100+sandwich1*100
 
}


// to increase the count of item
function addOrder(dish){
    var num1=parseInt(localStorage.getItem(dish));
    console.log(num1);
    num1=num1+1;
    localStorage.setItem(dish,num1);
    readOrder();

}

function logout(){
    localStorage.clear();
    
    window.location = "index.html";
}