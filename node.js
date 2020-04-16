
// Array of world leaders 

let worldLeader = {
    sanna: {
        firstName:'Sanna',
        lastName:'Marin',  
        country:'Finland',   
        title:'Prime Minister', 
        dateAppointed:10/12/2019,
        },
    sophie:{
        firstName:'Sophie',   
        lastName:'Wilmés',
        country:'Belgium',   
        title:'Prime Minister', 
        dateAppointed:27/10/2019  
        },
    paulaMae:{
        firstName:'Paula-Mae',  
        lastName:'Weekes',   
        country:'Belgium', 
        title:'President',  
        dateAppointed:19/08/2018 
        },
    jacinda:{
        firstName:'Jacinda',   
        lastName:'Arden',   
        country:'New Zealand',
        title:'Prime Minister',
        dateAppointed:30/11/2017 
        },
    tsai:{
        firstName:'Tsai',  
        lastName:'Ing-wen',  
        country:'Taiwan',   
        title:'President', 
        dateAppointed: 20/05/2016 
        },
    angela:{
        firstName: 'Angela',    
        lastName:'Merkel',  
        country:'Germany',   
        title:'Chancellor', 
        dateAppointed: 22/11/2005  
        },
};

// Returning first name and last name of a world leader

function finlandLeader(first, last){
        this.firstName = first;
        this.lastName = last;
}

var sanna = new finlandLeader("Sanna", "Marin");

sanna.name = function(){
        return this.firstName + ' ' + this.lastName;
    };


console.log("This world leader is " + sanna.name());
console.log(finlandLeader.length);


// longest name out of all the world leaders

var paulaMae = new belgiumLeader("Paula-Mae"); 
var jacinda = new newzealandLeader("Jacinda");   
var tsai = new taiwanLeader("Tsai");
    
let names = {
    paulaMae = new belgiumLeader("Paula-Mae"), 
    jacinda = new newzealandLeader("Jacinda"),   
    tsai = new taiwanLeader("Tsai")
};

// function longestName(names) {
//     array.sort(function(a, b){
//        return a.length - b.length;
//     });
// };

