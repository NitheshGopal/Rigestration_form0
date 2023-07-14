let firstContainer = document.getElementById("first");
let secondContainer = document.getElementById("second");
let belowContainerEl = document.createElement("Container");

var button = document.getElementById('ButtonEl');
var firstNamejsEl = document.getElementById('firstNamejs');
firstNamejsEl.addEventListener("blur",function(event) {
    if(firstNamejsEl.value ==="") {
        alert("fill the firstName")
    }
    else {
        pass
    }
});
var lastNamejsEl = document.getElementById('lastNamejs');
lastNamejsEl.addEventListener("blur",function(event) {
    if(lastNamejsEl.value ==="") {
        alert("fill the secondName")
    }
    else {
        pass
    }
});

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
var button1 = document.getElementById('ButtonE2');



const storeData =[]

button.addEventListener("click", function(event){
    const details = {
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

    var mailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // function mail() {
    //     if (emailVerify.value.match(mailValidation)) {
    //        return true
    //     }
    //     else {
    //        alert("Type Valid Email");
    //     }
    // }

    storeData.push(details);
    storeData.sort((object1 , object2) => object1.firstName.localeCompare(object2.firstName));  
    printDeatils(details);

    // if (((firstNamejsEl.value === "") || (lastNamejsEl.value === "") || (positionJsEl.value==="") || (companySelectorEle.value==="") || (businessArenaElement.value==="")
    //     || (EmployeElement.value==="")|| (agrCheckbox.checked===false) || (streetNameEl.value==="") || (adiitionalInfoEl.value==="") || (zipCodeEl.value==="") 
    //     || (placeNativeEl.value==="") || (countrysNativeEl.value==="") || (zoneCodeEl.value==="") || (mobileNumberEl.value === "") || (emailVerify.value===""))       
    //     || emailVerify.value.match(mailValidation) || ((checkBox1El.checked === false) && (checkBox2El.checked === false) && (checkBox3El.checked === false))){

    //     alert("fill the required details");
    // }
    // else {
    //         storeData.push(details);
    //         storeData.sort((object1 , object2) => object1.firstName.localeCompare(object2.firstName));  
    //         printDeatils(details);
    // }

    

})
function printDeatils() {

    let newContainer = document.getElementById("container");
    newContainer.remove();


    for(var i=0;i<storeData.length;i++){

        let bottomContainer = document.createElement("div");
        bottomContainer.id="container";
        bottomContainer.classList.add("detailConatinerStyling", "d-flex", "flex-column" );
        document.body.appendChild(bottomContainer);

        let newContainer1 = document.getElementById("container");
        
        let mainBottomContainer = document.createElement("div");
        mainBottomContainer.classList.add("bottomMiniContiner","ml-5");
        newContainer1.appendChild(mainBottomContainer);

        let detailsObject1 = document.createElement("h1");
        detailsObject1.textContent = "Name : " + storeData[i].firstName.toUpperCase() + storeData[i].lastName.toUpperCase();
        detailsObject1.classList.add("detailsObjectStyling")
        mainBottomContainer.appendChild(detailsObject1);

        let detailsObject2 = document.createElement("h1");
        detailsObject2.textContent = "Position : " + storeData[i].position;
        detailsObject2.classList.add("detailsObjectStyling")
        mainBottomContainer.appendChild(detailsObject2);

        let detailsObject3 = document.createElement("h1");
        detailsObject3.textContent = "Company : " + storeData[i].companyName;
        detailsObject3.classList.add("detailsObjectStyling")
        mainBottomContainer.appendChild(detailsObject3);

        let detailsObject4 = document.createElement("h1");
        detailsObject4.textContent = "BusinessArena : " + storeData[i].businessArena;
        detailsObject4.classList.add("detailsObjectStyling")
        mainBottomContainer.appendChild(detailsObject4);

        let detailsObject5 = document.createElement("h1");
        detailsObject5.textContent = "Employees : " + storeData[i].Employees;
        detailsObject5.classList.add("detailsObjectStyling")
        mainBottomContainer.appendChild(detailsObject5);

        let detailsObject6 = document.createElement("h1");
        detailsObject6.textContent = "Terms : " + storeData[i].isAgreed;
        detailsObject6.classList.add("detailsObjectStyling")
        mainBottomContainer.appendChild(detailsObject6);

        let detailsObject8 = document.createElement("h1");
        detailsObject8.textContent = "IIT : " + storeData[i].degrees.iit;
        detailsObject8.classList.add("detailsObjectStyling")
        mainBottomContainer.appendChild(detailsObject8);

        let detailsObject9 = document.createElement("h1");
        detailsObject9.textContent = "B.Tech : " + storeData[i].degrees.btech;
        detailsObject9.classList.add("detailsObjectStyling")
        mainBottomContainer.appendChild(detailsObject9);

        let detailsObject10 = document.createElement("h1");
        detailsObject10.textContent = "M.Tech : " + storeData[i].degrees.mtech;
        detailsObject10.classList.add("detailsObjectStyling")
        mainBottomContainer.appendChild(detailsObject10);

        let detailsObject11 = document.createElement("h1");
        if (storeData[i].gender.male === "yes") {
                detailsObject11.textContent = "gender : " + "Male";
        }
        else {
                detailsObject11.textContent = "gender: " + "Female"
        }
        detailsObject11.classList.add("detailsObjectStyling")
        mainBottomContainer.appendChild(detailsObject11);

        let detailsObject12 = document.createElement("h1");
        detailsObject12.textContent = "Street+Nr : " + storeData[i].adress;
        detailsObject12.classList.add("detailsObjectStyling")
        mainBottomContainer.appendChild(detailsObject12);

        let detailsObject13 = document.createElement("h1");
        detailsObject13.textContent = "Additional Information : " + storeData[i].additionalInfo;
        detailsObject13.classList.add("detailsObjectStyling")
        mainBottomContainer.appendChild(detailsObject13);

        let detailsObject14 = document.createElement("h1");
        detailsObject14.textContent = "ZipCode : " + storeData[i].zipcode;
        detailsObject14.classList.add("detailsObjectStyling")
        mainBottomContainer.appendChild(detailsObject14);

        let detailsObject15 = document.createElement("h1");
        detailsObject15.textContent = "Place : " + storeData[i].place;
        detailsObject15.classList.add("detailsObjectStyling")
        mainBottomContainer.appendChild(detailsObject15);

        let detailsObject16 = document.createElement("h1");
        detailsObject16.textContent = "Country : " + storeData[i].country;
        detailsObject16.classList.add("detailsObjectStyling")
        mainBottomContainer.appendChild(detailsObject16);

        let detailsObject17 = document.createElement("h1");
        detailsObject17.textContent = "Code+ : " + storeData[i].zonecode;
        detailsObject17.classList.add("detailsObjectStyling")
        mainBottomContainer.appendChild(detailsObject17);

        let detailsObject18 = document.createElement("h1");
        detailsObject18.textContent = "Mobile Number : " + storeData[i].mobileNumber;
        detailsObject18.classList.add("detailsObjectStyling")
        mainBottomContainer.appendChild(detailsObject18);

        let detailsObject19 = document.createElement("h1");
        detailsObject19.textContent = "Email : " + storeData[i].email;
        detailsObject19.classList.add("detailsObjectStyling")
        mainBottomContainer.appendChild(detailsObject19);

        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove Button";
        removeButton.classList.add("removeButton");
        removeButton.onclick = function() {
        };
        mainBottomContainer.appendChild(removeButton);
    } 

    firstNamejsEl.value = "";
        lastNamejsEl.value = "";
        positionJsEl.value="";
        companySelectorEle.value="";
        businessArenaElement.value="";
        EmployeElement.value="";
        agrCheckbox.value="";
        streetNameEl.value="";
        adiitionalInfoEl.value="";
        zipCodeEl.value="";
        placeNativeEl.value="";
        countrysNativeEl.value="";
        zoneCodeEl.value="";
        

        agrCheckbox.checked=false;

        checkBox1El.checked = false;
        checkBox2El.checked = false;
        checkBox3El.checked = false;

        radioBtn1El.checked = true;
        radioBtn2El.checked = false;
        mobileNumberEl.value = "";
        emailVerify.value="";
 
}
button1.addEventListener("click",function(event) {
    firstNamejsEl.value = "";
    lastNamejsEl.value = "";
    positionJsEl.value="";
    companySelectorEle.value="";
    businessArenaElement.value="";
    EmployeElement.value="";
    agrCheckbox.value="";
    streetNameEl.value="";
    adiitionalInfoEl.value="";
    zipCodeEl.value="";
    placeNativeEl.value="";
    countrysNativeEl.value="";
    zoneCodeEl.value="";
    agrCheckbox.checked=false;
    checkBox1El.checked = false;
    checkBox2El.checked = false;
    checkBox3El.checked = false;
    radioBtn1El.checked = true;
    radioBtn2El.checked = false;
    mobileNumberEl.value = "";
    emailVerify.value="";
})


let url="";
let option = {
                method : "POST",
                header : {
                            "content-type" : "application/JSON",
                            acceptence : "application/JSON",
                            Authorization : "Bearer link"
                            },
                body:JSON.stringify(storeData),

            }
fetch(url,option)
.then(function(response){
    return json()
})
.then(function(jsonData){
    console.log(jsonData);
})



 
 




