"use strict";
/*//alert("Hello World!");
//alert(3+1+2);
let Name;
let admin;

//name = "John";
admin = Name;
//alert(admin);
//alert(1/0); */
function expandOnClick(pic){
    let x = document.getElementById(pic).children;
    //console.log(x);
    
    if(typeof(Storage) != "undefined"){
        //console.log(x.item(0));
        //console.log(x.item(1).firstChild);
        //console.log(x.item(0).getAttributeNames());
        //console.log(x.item(0).getAttribute("src"));
        
        localStorage.setItem("picture", x.item(0).getAttribute("src"));
        localStorage.setItem("description", x.item(1).innerHTML);
    }

    //window.open("ExpandedImage.html");
    //loadImage(x);
}

//to be called on load of expandedImage.html
function loadImage(){
    //window.location = "ExpandedImage.html";
    console.log("in load image");
    let pic;
    let desc;
    
    let body = document.getElementById("body");

    if(typeof(Storage) != "undefined"){
        pic = localStorage.getItem("picture");
        //console.log(pic);
        /*if(pic == null){
            console.log("null pic");
        }*/
        desc = localStorage.getItem("description");
        console.log("pic: " + pic);
    }
    //console.log(pic.length);
    let image = document.createElement('img');
    image.src = pic;

    //console.log("width = " + window.);
    image.width = window.innerWidth * 0.50 * 0.75;
    image.style.paddingLeft = "15%";
    image.style.paddingTop = "5%";
    image.style.display = "inline"
    //image.class = "expandedImage";
    body.appendChild(image);

    let description = document.createElement('h3');
    description.style.fontFamily = "sans-serif";
    description.style.paddingLeft = "15%";
    description.style.paddingRight = "15%";
    description.innerHTML = desc;
    body.appendChild(description);
    
    /*for(let i = 0; i < pic.length; i++){
        console.log(pic[i]);
    }*/
    //image = pic.item(0);
    //body.appendChild(imgInfo[0]);
}