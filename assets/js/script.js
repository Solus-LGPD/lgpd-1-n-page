const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


let inputPhone = document.getElementById('phone');

//Mask para o Input de Telefone
inputPhone.addEventListener('keypress',() => {
    let input = inputPhone.value.length;

    if(input === 0){
        inputPhone.value += "(";
    }
    if(input === 3){
        inputPhone.value += ")";
    }
});



function sendData(){
    let name = document.getElementById('firstname').value;
    let companyName = document.getElementById('companyname').value;
    let phone = document.getElementById('phone').value;
<<<<<<< HEAD
    let documentNumber = document.getElementById('document').value;
=======
    let doc = document.getElementById('document').value;
>>>>>>> marcus
    let email = document.getElementById('email').value;
    phone = phone.replace('(','').replace(')','').replace(' ','');

    function validateCPNJ(documentNumber){
        let cnpj = documentNumber;

        if(!documentNumber.length === 14){
            return false
        }else{
            
            let v1 = 0;
            let v2 = 0;
            let aux = false;
            
            for (let i = 1; cnpj.length > i; i++) { 
                if (cnpj[i - 1] != cnpj[i]) {  
                    aux = true;   
                } 
            } 
            
            if (aux == false) {  
                return false; 
            }
            
            for (let i = 0, p1 = 5, p2 = 13; (cnpj.length - 2) > i; i++, p1--, p2--) {
                if (p1 >= 2) {  
                    v1 += cnpj[i] * p1;  
                } else {  
                    v1 += cnpj[i] * p2;  
                } 
            } 
            
            v1 = (v1 % 11);
            
            if (v1 < 2) { 
                v1 = 0; 
            } else { 
                v1 = (11 - v1); 
            } 
            
            if (v1 != cnpj[12]) {  
                return false; 
            } 
            
            for (let i = 0, p1 = 6, p2 = 14; (cnpj.length - 1) > i; i++, p1--, p2--) { 
                if (p1 >= 2) {  
                    v2 += cnpj[i] * p1;  
                } else {   
                    v2 += cnpj[i] * p2; 
                } 
            }
            
            v2 = (v2 % 11); 
            
            if (v2 < 2) {  
                v2 = 0;
            } else { 
                v2 = (11 - v2); 
            } 
            
            if (v2 != cnpj[13]) {   
                return false; 
            } else {  
                return true; 
            }
        }
    }


    function validateEmail(emailField){
        let regex = new RegExp(/^\S+@\S+\.\S+/);
        return regex.test(emailField);
    }


    function validatePhone(phoneField){ 
        if(!phoneField.length === 10 || isNaN(phoneField)){
            return false;
        }
        return true;
    }
    
    

<<<<<<< HEAD


    if(!validateEmail(email)){
        throw Error('Email Error')
=======
    if(!validateCPNJ(doc)){
        //tratamento de erro na tela
        console.log("Erro cnpj")
    }


    if(!validateEmail(email)){
        //tratamento de erro na tela
        console.log("Erro email")
>>>>>>> marcus
    }


    if(!validatePhone(phone)){
<<<<<<< HEAD
        throw Error('Phone Error')
    }

    if(!validateCPNJ(documentNumber)){
        throw Error('CPNJ Error')
=======
        //tratamento de erro na tela
        console.log("Erro fone")
>>>>>>> marcus
    }

    const raw = JSON.stringify({
        name,
        email,
        doc,
        phone,
        companyName
    })
    console.log(raw)

<<<<<<< HEAD
    console.log(raw);

    /*
=======
/* 
>>>>>>> marcus
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };


    fetch("IP ou Domínio da API", requestOptions)
    .then(async response =>  {
        if(!response.ok){
            const err = await response.json();
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then(result => {
        //Tratamento de sucesso ao enviar o form
    })
    .catch(error => console.log('error', error));*/
}