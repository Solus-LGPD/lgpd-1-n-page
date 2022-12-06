const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


function sendData(){
    let name = document.getElementById('firstname').value;
    let companyName = document.getElementById('companyname').value;
    let phone = document.getElementById('phone').value;
    let document = document.getElementById('document').value;
    let email = document.getElementById('email').value;


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

    })
    .catch(error => console.log('error', error));
}