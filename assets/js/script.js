const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


function sendData(){
    let name = document.getElementById('firstname').value;
    let companyName = document.getElementById('companyname').value;
    let phone = document.getElementById('phone').value;
    let document = document.getElementById('document').value;
    let email = document.getElementById('email').value;


    function validateCPNJ(documentNumber){
        const validationNumbers = [ 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2 ]
        const cnpj = String(documentNumber).replace(/[^\d]/g, '')
        

        if(cnpj.length !== 14){
            return false
        }
    

        if(/0{14}/.test(cnpj)){
            return false
        }
    

        for(let i = 0, n = 0; i < 12; n += cnpj[i] * validationNumbers[++i]){
            if(cnpj[12] != (((n %= 11) < 2) ? 0 : 11 - n)){
                return false
            }
        }
    

        for (let i = 0, n = 0; i <= 12; n += cnpj[i] * validationNumbers[i++]){
            if(cnpj[13] != (((n %= 11) < 2) ? 0 : 11 - n)){
                return false
            }
        }


        return true
    }


    function validateEmail(emailField){
        let regex = new RegExp(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/);
        return regex.test(emailField);
    }


    function validatePhone(phoneField){
        let regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');
        return regex.test(phone);
    }
    

    if(!validateCPNJ(document)){
        //tratamento de erro na tela
    }


    if(!validateEmail(email)){
        //tratamento de erro na tela
    }


    if(!validatePhone(phone)){
        //tratamento de erro na tela
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
    .catch(error => console.log('error', error));
}