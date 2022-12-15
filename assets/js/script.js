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
    let documentNumber = document.getElementById('document').value;
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
        let regex = new RegExp(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/);
        return regex.test(emailField);
    }


    function validatePhone(phoneField){ 
        if(phoneField.length === 11 || isNaN(phoneField)){
            return true;
        }
        return false;
    }
    
    



    if(!validateEmail(email)){
        let n = document.querySelector("#email")
        n.style.borderBottom = ("4px solid #FA1D00")
        alert("Email invalido")
        throw Error('Email Error')
    }


    if(!validatePhone(phone)){
        let n = document.querySelector("#phone")
        n.style.borderBottom = ("4px solid #FA1D00")
        alert("Telefone invalido")
        throw Error('Phone Error')
    }

    if(!validateCPNJ(documentNumber)){
        let n = document.querySelector("#document")
        n.style.borderBottom = ("4px solid #FA1D00")
        alert("CNPJ invalido")
        throw Error('CPNJ Error')
    }

    const raw = JSON.stringify({
        name,
        email,
        document,
        phone,
        companyName
    })

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    let element = document.querySelector("#send-button");
    element.style.backgroundColor = ("#006600");


    console.log(raw);
    /*
    //teste
    fetch("http://localhost:3333/send", requestOptions)
    .then(async response =>  {
        if(!response.ok){
            const err = await response.json();
            throw Error(response.statusText);
        }
        //código para ser enviado
        element.innerHTML = 'ENVIADO'
        alert("Formulário Enviado com Sucesso");
        return response.json();
    })
    .catch(error => console.log('error', error));

    /*
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