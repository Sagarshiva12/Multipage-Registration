 
 var pattern=/\s/g;
 
 function white(data)
 {
   var isSpace=pattern.test(data);
   var alert=document.getElementById("alert1");
    if(isSpace) 
    {
      alert.innerText="Space is not allowed!"
      return false
    }else 
    {
      alert.innerText=""
      return true
    }
 }

 if(white())
 {
   console.log(white())
 }
 
 
 
 
 function datasubmit()
{
     
    var data1=document.getElementById("f1").value
    var data2=document.getElementById("f2").value
    var data3=document.getElementById("f3").value
    var data4=document.getElementById("f4").value
    var data5=document.getElementById("f5").value
    var data6=document.getElementById("f6").value
    var data7=document.getElementById("f7").value
    var data8=document.getElementById("f8").value
    var data9=document.getElementById("f9").value
    var data10=document.getElementById("f10").value
    var data11=document.getElementById("f11").value
    var data12=document.getElementById("f12").value
    var data13=document.getElementById("f13").value
    var data14=document.getElementById("f14").value
    var data15=document.getElementById("Gender1").value
    var data16=document.getElementById("Gender2").value

    

    var data17=[data1+" "+data2]
    var data18=[data5+" "+data6]
    var data19=[data7+" "+data8]
    var data20=["Street: "+data10+","+"City: "+data11+","+"Country: "+data12]



    var data21=document.getElementById("f15").value
    var data22=document.getElementById("f16").value
    var data23=document.getElementById("f17").value
    var data24=document.getElementById("f18").value
    var data25=document.getElementById("f19").value
    var data26=document.getElementById("f20").value
    var data27=document.getElementById("f21").value
    var data28=document.getElementById("f22").value
    var data29=document.getElementById("f23").value
    var data30=document.getElementById("f24").value



    if(!data1 == "" && !data2 == "" && !data3 == "" && !data4 == "" && !data5 == "" && !data6 == "" && !data7 == "" && !data8 == ""
    && !data9 == "" && !data10 == "" && !data11 == "" && !data12 == "" &&  !data14 == "" && (!data15 == "" || !data16 == "") &&  !data21 == "" && 
     !data22 == "" &&  !data23 == "" &&  !data24 == "" &&  !data25 == "" &&  !data26 == "" &&  !data27 == ""  &&  !data28 == "" &&  !data29 == ""
      &&  !data30 == ""  )
    {
      if (white()) 
      {
        var local1= localStorage.setItem("Name",data17)
        var local3= localStorage.setItem("DOB",data3)
        var local4= localStorage.setItem("Email",data4)
        var local5= localStorage.setItem("Father's Name",data18)
        var local7= localStorage.setItem("Mother's Name",data19)
        var local9= localStorage.setItem("Gender",data15 || data16)
        var local10= localStorage.setItem("Nationality",data9)
        var local11= localStorage.setItem("Address",data20)
        var local12= localStorage.setItem("Telephone-Home",data13)
        var local13= localStorage.setItem("Telephone-Mobile",data14)
 
        var local14=localStorage.setItem("HSC Institution name",data21)
        var local15=localStorage.setItem("HSC Board",data22)
        var local16=localStorage.setItem("Score in HSC in percentage",data23)
        var local17=localStorage.setItem("SSC Institution name",data24)
        var local18=localStorage.setItem("SSC Board",data25)
        var local19=localStorage.setItem("Score in SSC in percentage",data26)
        var local20=localStorage.setItem("Currently pursuing",data27)
        var local21=localStorage.setItem("Current educational institution name",data28)
        var local22=localStorage.setItem("Overall percentage",data29)
        var local23=localStorage.setItem("Current backlogs if any",data30)
        alert("Data submitted successfully")
      } 
      else 
      {
        alert("please fill all the details correctly!")
      }
    }
    else
    {
      alert("Data submition failed!")
    }
}



 function image()
{
    var value=localStorage.getItem("Recent passport size photograph")

    if (!value == "")
    { 
        console.log("image present here")
    } 
    else
    {
        document.getElementById("f25").addEventListener("change",function ()
        {
        const reader=new FileReader();
    
        reader.addEventListener("load",()=>{
            localStorage.setItem("Recent passport size photograph",reader.result)
            console.log(reader.result)
        })
    
        reader.readAsDataURL(this.files[0]);
       })
    }   
}
image();



function image1()
{
    var value=localStorage.getItem("HSC mark sheet")

    if (!value == "")
    { 
        console.log("image present here")
    } 
    else
    {
        document.getElementById("f26").addEventListener("change",function ()
        {
        const reader=new FileReader();
    
        reader.addEventListener("load",()=>{
            localStorage.setItem("HSC mark sheet",reader.result)
            console.log(reader.result)
        })
    
        reader.readAsDataURL(this.files[0]);
       })
    }
}
image1();

function image2()
{
    var value=localStorage.getItem("SSC mark sheet")

    if (!value == "")
    { 
        console.log("image present here")
    } 
    else
    {
        document.getElementById("f27").addEventListener("change",function ()
        {
        const reader=new FileReader();
    
        reader.addEventListener("load",()=>{
            localStorage.setItem("SSC mark sheet",reader.result)
            console.log(reader.result)
        })
    
        reader.readAsDataURL(this.files[0]);
       })
    }
}
image2();

function image3()
{
    var value=localStorage.getItem("All semesters mark sheet in a single PDF or docs")

    if (!value == "")
    { 
        console.log("image present here")
    } 
    else
    {
        document.getElementById("f28").addEventListener("change",function ()
        {
        const reader=new FileReader();
    
        reader.addEventListener("load",()=>{
            localStorage.setItem("All semesters mark sheet in a single PDF or docs",reader.result)
            console.log(reader.result)
        })
    
        reader.readAsDataURL(this.files[0]);
       })
    }
}
image3();



var currentTab = 0; 
showTab(currentTab);


function showTab(n)
 {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
   
    if (n == 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
      document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
      document.getElementById("nextBtn").innerHTML = "Next";
    }
    
    fixStepIndicator(n)
  }



  function nextPrev(n) 
  {
    var x = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
      document.getElementById("regForm").submit();
      return datasubmit()
    }
    showTab(currentTab);
  }



  function validateForm() 
  {
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    
    for (i = 0; i < y.length; i++) {
      if (y[i].value == "") 
      {
        y[i].className += " invalid";
        valid = true;
      }
    }
    if (valid) 
    {
      document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; 
  }



  function fixStepIndicator(n) 
  {
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    
    x[n].className += " active";
  }