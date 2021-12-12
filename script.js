const form= document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e)=>{
    e.preventDefault();
    statusTxt.style.color = "#54FF9F";
    statusTxt.style.display = "block";

    let xhr = new XMLHttpRequest(); //vytvoření nového xml objektu
    xhr.open("POST", "message.php", true); // odesláí post povinné do message.php
    xhr.onload = ()=>{ //po načtení ajaxu
        if(xhr.readyState == 4 && xhr.status == 200){ //pokud je stav odpovědi ajax 200 a stav připravenosti je 4, znamená to, že nedošlo k žádné chybě
            let response = xhr.response; //uložení odpovědi ajax do proměnné odezvy
            if(response.indexOf("Email a zpráva jsou povinné!") != -1 || response.indexOf("Zadejte platnout emailovou adresu!") || response.indexOf("Omlouváme se, nepodařilo se odeslat vaši zprávu")){
            statusTxt.style.color = "red";
        } else {
            form.reset();
            setTimeout(()=>{
                statusTxt.style.display = "none";
            }, 3000);
        }
            statusTxt.innerText = response;
        }
    }
    let formData = new FormData(form); // vytvoření nového FormData objektu je použito na odeslání dat z formuláře
    xhr.send(formData); //odeslání dat z formuláře
}