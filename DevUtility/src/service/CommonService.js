

export function getDropDownMenu() {
    let menu = [ 'Base64Encode','Base64Decode','JsonBeatuify'];
    // calling business layer
    return menu;
}

export function generateUtility(type,input){
     switch(type){
        case 'Base64Encode': Base64Encode(input);break;
        case 'Base64Decode': Base64Decode(input);break;
        case 'JsonBeatuify': 
     }


}

function Base64Encode(input){
    let  encodedStringBtoA = btoa(input);
     return encodedStringBtoA;
}

function Base64Decode(input){
    let  encodedStringAtoB = atob(input);
     return encodedStringAtoB;
}


