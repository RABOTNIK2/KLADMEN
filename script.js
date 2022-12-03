let partOfClovno=document.getElementById("34565");
function clovno(){
    let a=(prompt("Введите номер карты"))
    switch(a){
        case null:
            alert("Что-то пошло не так. Попробуйте снова");
            break;
        case "":
        case NaN:
            alert("Что-то пошло не так. Попробуйте снова");
            break;
        default:
            alert("Блин, вы заплатили стоимость в долларах")
    }
    partOfClovno.style.backgroundColor="darkred"     
}
partOfClovno.addEventListener("click",clovno)
let partOfClassno=document.getElementById("228");
function classno(){
    alert("Палено опять alert")
    partOfClassno.style.backgroundColor="darkred"

}
partOfClassno.addEventListener("click",classno,)
function kvadrat(){
    alert("А нет,нету. АХАХАХАХАХАХАХ")
    krug.style.backgroundColor="darkred"

}
let krug=document.getElementById("3123");
krug.addEventListener("click",kvadrat);
let koleka=document.getElementById("55")
let bogema=document.getElementById("21-3")
function korova(koleka){
    bogema.style.backgroundColor="lightgreen"
    
}
bogema.addEventListener("click",korova);
let bogema1=document.getElementById("21-4")
let bogema2=document.getElementById("21-5")
let bogema3=document.getElementById("21-6")
function korova1(){
    bogema1.style.backgroundColor="lightgreen"
    
}
function korova2(){
    bogema2.style.backgroundColor="lightgreen"
    
}
function korova3(){
    bogema3.style.backgroundColor="lightgreen"
    
}
bogema1.addEventListener("click",korova1);
bogema2.addEventListener("click",korova2);
bogema3.addEventListener("click",korova3);
let poleno1=document.getElementById("22-3")
let poleno2=document.getElementById("22-4")
let poleno3=document.getElementById("22-5")
let poleno4=document.getElementById("22-6")
function krusa(){
    poleno1.style.backgroundColor="darkred"
    switch(poleno1){
        case poleno1.style.backgroundColor="darkred":
            bogema.style.backgroundColor="lightgray";
            break;
        case bogema.style.backgroundColor="lightgreen":
            poleno1.style.backgroundColor="lightgray";
            break;
    }
}
function krusa1(){
    poleno2.style.backgroundColor="darkred"
    switch(poleno2){
        case poleno2.style.backgroundColor="darkred":
            bogema1.style.backgroundColor="lightgray";
            break;
        case bogema1.style.backgroundColor="lightgreen":
            poleno2.style.backgroundColor="lightgray";
            break;
    }
}
function krusa2(){
    poleno3.style.backgroundColor="darkred"
    switch(poleno3){
        case poleno3.style.backgroundColor="darkred":
            bogema2.style.backgroundColor="lightgray";
            break;
        case bogema2.style.backgroundColor="lightgreen":
            poleno3.style.backgroundColor="lightgray";
            break;
    }
}
function krusa3(){
    poleno4.style.backgroundColor="darkred"
    switch(poleno4){
        case poleno4.style.backgroundColor="darkred":
            bogema3.style.backgroundColor="lightgray";
            break;
        case bogema3.style.backgroundColor="lightgreen":
            poleno4.style.backgroundColor="lightgray";
            break;
    }
}
poleno1.addEventListener("click",krusa)
poleno2.addEventListener("click",krusa1)
poleno3.addEventListener("click",krusa2)
poleno4.addEventListener("click",krusa3)



