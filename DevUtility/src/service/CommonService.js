import { backendUtility } from "../../Backend";


export function getDropDownMenu() {
    return backendUtility.getDropDownMenu();
}

export function generateUtility(type,input){
    let output = "";
     switch(type){
        case 'Base64Encode': output = backendUtility.Base64Encode(input);break;
        case 'Base64Decode': output = backendUtility.Base64Decode(input);break;
        case 'ParseJwt': let json=  backendUtility.parseJwt(input);
        json = JSON.stringify(json)
        console.log(json)
        return json;
        case 'JsonBeatuify': 
     }

   return output;
}

// function Base64Encode(input){
//     let  encodedStringBtoA = btoa(input);
//      return encodedStringBtoA;
// }

// function Base64Decode(input){
//     let  encodedStringAtoB = atob(input);
//      return encodedStringAtoB;
// }


