

export const phonenumberValidator=(v)=> {
    let phoneno = /^\+?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{5})$/;
    var phoneno2 = /^\d{10}$/;
    if ( v.match(phoneno) || v.match(phoneno2)){
        return true;
    }else {
       
        return false;
    }
}


export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
