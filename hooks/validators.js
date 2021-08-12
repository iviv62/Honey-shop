

export const phonenumberValidator=(v)=> {
    let phoneno = /^\+?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{5})$/;
    var phoneno2 = /^\d{10}$/;
    if ( v.match(phoneno) || v.match(phoneno2)){
        return true;
    }else {
       
        return false;
    }
}