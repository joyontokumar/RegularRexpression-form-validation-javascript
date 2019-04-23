// name validation
document.getElementById('name').addEventListener('blur', validatename);
// ZipCode validation
document.getElementById('ZipCode').addEventListener('blur', validatezip);
// Email validation
document.getElementById('Email').addEventListener('blur', validateemail);
// Phone validation
document.getElementById('Phone').addEventListener('blur', validatephone);

// name
function validatename() {
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,10}$/;
    if (!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}





function validatezip() {
    const zip = document.getElementById('ZipCode');
    const re = /^[0-9]{4}/;
    if (!re.test(zip.value)) {
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');
    }
}

function validateemail() {
    const Email = document.getElementById('Email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)()\.([a-zA-Z]{2,5})$/;
    if (!re.test(Email.value)) {
        Email.classList.add('is-invalid');
    } else {
        Email.classList.remove('is-invalid');
    }
}

function validatephone() {


    /*
     * ^ - From start of the string
        (?:\+?88)? - optional 88, which may begin in +
        01 - mandatory 01
        [15-9] - "1 or 5 or 6 or 7 or 8 or 9"
        \d{8} - 8 digits
        $ - end of the string
        * 
        *  
    */
    const Phone = document.getElementById('Phone');
    const re = /^(?:\+?88)?01[15-9]\d{8}$/;
    if (!re.test(Phone.value)) {
        Phone.classList.add('is-invalid');
    } else {
        Phone.classList.remove('is-invalid');
    }
}