// JavaScript code
// Access the button element by its ID
let firstContainer = document.getElementById("first");
let secondContainer = document.getElementById("second");
let belowContainerEl = document.createElement("Container");



var button = document.getElementById('ButtonEl');
var firstNamejsEl = document.getElementById('firstNamejs');
var lastNamejsEl = document.getElementById('lastNamejs');
var positionJsEl = document.getElementById('positionJs');
var companySelectorEle = document.getElementById('companyJs');
var businessArenaElement = document.getElementById('businessarenaJs');
var EmployeElement = document.getElementById('EmployesJs');
var agrCheckbox = document.getElementById('agrCheckbox');

var checkBox1El = document.getElementById('checkBox1');
var checkBox2El = document.getElementById('checkBox2');
var checkBox3El = document.getElementById('checkBox3');

var radioBtn1El = document.getElementById('radioBtn1');
var radioBtn2El = document.getElementById('radioBtn2');
var streetNameEl = document.getElementById('streetName');
var adiitionalInfoEl = document.getElementById('adiitionalInfo');
var zipCodeEl = document.getElementById('zipCode');
var placeNativeEl = document.getElementById('placeNative');
var countrysNativeEl = document.getElementById('countrysNative');

var zoneCodeEl = document.getElementById('zoneCode');
var mobileNumberEl = document.getElementById('mobileNumber');
var emailVerify = document.getElementById('emailVerify');



let details = {
    firstName:"",
    lastName:"",
    position:"",
    companyName:"",
    businessArena:"",
    Employees:"",
    isAgreed:"",
    degrees:{
                iit:"",
                btech:"",
                mtech:"",
            },
    gender:{
                male:"",
                female:"",
            },
    adress:"",
    additionalInfo:"",
    zipcode:"",
    place:"",
    country:"",
    zonecode:"",
    mobileNumber:"",
    email:"",
}



function printDeatils(details) {
     
     let bottomDetailConatiner = document.createElement("div");
     bottomDetailConatiner.classList.add("detailConatinerStyling")
     document.body.appendChild(bottomDetailConatiner);

     let mainBottomContainer = document.createElement("div");
     mainBottomContainer.classList.add("bottomMiniContiner")
     bottomDetailConatiner.appendChild(mainBottomContainer)

     let detailsObject1 = document.createElement("h1");
     detailsObject1.textContent = "Name : " + details.firstName+details.lastName;
     detailsObject1.classList.add("detailsObjectStyling")
     mainBottomContainer.appendChild(detailsObject1);

     let detailsObject2 = document.createElement("h1");
     detailsObject2.textContent = "Position : " + details.position;
     detailsObject2.classList.add("detailsObjectStyling")
     mainBottomContainer.appendChild(detailsObject2);

     let detailsObject3 = document.createElement("h1");
     detailsObject3.textContent = "Company : " + details.companyName;
     detailsObject3.classList.add("detailsObjectStyling")
     mainBottomContainer.appendChild(detailsObject3);

     let detailsObject4 = document.createElement("h1");
     detailsObject4.textContent = "BusinessArena : " + details.businessArena;
     detailsObject4.classList.add("detailsObjectStyling")
     mainBottomContainer.appendChild(detailsObject4);

     let detailsObject5 = document.createElement("h1");
     detailsObject5.textContent = "Employees : " + details.Employees;
     detailsObject5.classList.add("detailsObjectStyling")
     mainBottomContainer.appendChild(detailsObject5);

     let detailsObject6 = document.createElement("h1");
     detailsObject6.textContent = "Terms : " + details.isAgreed;
     detailsObject6.classList.add("detailsObjectStyling")
     mainBottomContainer.appendChild(detailsObject6);

     // let detailsObject7 = document.createElement("h1");
     // detailsObject7.textContent = " : " + details.isAgreed;
     // detailsObject7.classList.add("detailsObjectStyling")
     // mainBottomContainer.appendChild(detailsObject7);

     let detailsObject8 = document.createElement("h1");
     if (details.degrees.iit === "yes") {
          detailsObject8.textContent = "IIT : " + "Yes";
     }
     else {
          detailsObject8.textContent = "IIT: " + "No"
     }
     detailsObject8.classList.add("detailsObjectStyling")
     mainBottomContainer.appendChild(detailsObject8);

     let detailsObject9 = document.createElement("h1");
     if (details.degrees.btech === "yes") {
          detailsObject9.textContent = "B.Tech : " + "Yes";
     }
     else {
          detailsObject9.textContent = "B.Tech: " + "No"
     }
     detailsObject9.classList.add("detailsObjectStyling")
     mainBottomContainer.appendChild(detailsObject9);

     let detailsObject10 = document.createElement("h1");
     if (details.degrees.mtech === "yes") {
          detailsObject10.textContent = "M.Tech : " + "Yes";
     }
     else {
          detailsObject10.textContent = "M.Tech: " + "No"
     }
     detailsObject10.classList.add("detailsObjectStyling")
     mainBottomContainer.appendChild(detailsObject10);

     let detailsObject11 = document.createElement("h1");
     if (details.gender.male === "yes") {
          detailsObject11.textContent = "gender : " + "Male";
     }
     else {
          detailsObject11.textContent = "gender: " + "Female"
     }
     detailsObject11.classList.add("detailsObjectStyling")
     mainBottomContainer.appendChild(detailsObject11);

     let detailsObject12 = document.createElement("h1");
     detailsObject12.textContent = "Street+Nr : " + details.adress;
     detailsObject12.classList.add("detailsObjectStyling")
     mainBottomContainer.appendChild(detailsObject12);

     let detailsObject13 = document.createElement("h1");
     detailsObject13.textContent = "Additional Information : " + details.additionalInfo;
     detailsObject13.classList.add("detailsObjectStyling")
     mainBottomContainer.appendChild(detailsObject13);

     let detailsObject14 = document.createElement("h1");
     detailsObject14.textContent = "ZipCode : " + details.zipcode;
     detailsObject14.classList.add("detailsObjectStyling")
     mainBottomContainer.appendChild(detailsObject14);

     let detailsObject15 = document.createElement("h1");
     detailsObject15.textContent = "Place : " + details.place;
     detailsObject15.classList.add("detailsObjectStyling")
     mainBottomContainer.appendChild(detailsObject15);

     let detailsObject16 = document.createElement("h1");
     detailsObject16.textContent = "Country : " + details.country;
     detailsObject16.classList.add("detailsObjectStyling")
     mainBottomContainer.appendChild(detailsObject16);

     let detailsObject17 = document.createElement("h1");
     detailsObject17.textContent = "Code+ : " + details.zonecode;
     detailsObject17.classList.add("detailsObjectStyling")
     mainBottomContainer.appendChild(detailsObject17);

     let detailsObject18 = document.createElement("h1");
     detailsObject18.textContent = "Mobile Number : " + details.mobileNumber;
     detailsObject18.classList.add("detailsObjectStyling")
     mainBottomContainer.appendChild(detailsObject18);

     let detailsObject19 = document.createElement("h1");
     detailsObject19.textContent = "Email : " + details.email;
     detailsObject19.classList.add("detailsObjectStyling")
     mainBottomContainer.appendChild(detailsObject19);


     
}




function myfunction(details) {

    details.firstName = firstNamejsEl.value;
    details.lastName = lastNamejsEl.value;
    details.position = positionJsEl.value;
    details.companyName = companySelectorEle.value;
    details.businessArena = businessArenaElement.value;
    details.Employees = EmployeElement.value;

    if(agrCheckbox.checked) {
        details.isAgreed = "agreed for the Terms & Conditions";
    }
    else {
        details.isAgreed = "not agreed for the Terms & Conditions";
    }

    if(checkBox1El.checked) {
        details.degrees.iit = "yes";
        
    }
    else {
        details.degrees.iit = "no";
        

    }
    if(checkBox2El.checked) {
        details.degrees.btech = "yes";
    }
    else {
        details.degrees.btech = "no";
    }
    if(checkBox3El.checked) {
        details.degrees.mtech = "yes";
    }
    else {
        details.degrees.mtech = "no";
    }

    if(radioBtn1El.checked) {
        details.gender.male = "yes";
        details.gender.female = "no";
    }
    else {
        details.gender.male = "no";
        details.gender.female = "yes";
    }
    
    details.adress = streetNameEl.value;
    details.additionalInfo = adiitionalInfoEl.value;

    details.zipcode = zipCodeEl.value;
    details.place = placeNativeEl.value;
    details.country = countrysNativeEl.value;

    details.zonecode = zoneCodeEl.value;
    details.mobileNumber = mobileNumberEl.value;
    details.email = emailVerify.value;



    console.log(details);
};


button.addEventListener("click",function() {
     myfunction(details);
     printDeatils(details);
 });
 
 




