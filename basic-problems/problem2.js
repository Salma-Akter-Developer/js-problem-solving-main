

// function isJavaScriptFile(filename){
//     if(typeof filename !== "string"){
//         return "please provide me a valid file name (string)."
//     }else{
//         // if(filename.toLowerCase().endsWith(".js") === true){
//         //     return true
//         // }else{
//         //     return false
//         // }

//         return filename.toLowerCase().endsWith(".js"); //   true || false

//     }

// }

function isJavaScriptFile(filename){
    if(typeof filename !== "string"){
        return "please provide me a valid file name (string)."
    }else{
        // hello.world.bd.js
        const arr = filename.split(".");
        const lastElement = arr.pop()

        return lastElement.toLowerCase() === "js";
        // if(lastElement.toLowerCase() === "js"){
        //     return true;
        // }else{
        //     return false;
        // }
    }

}

console.log(isJavaScriptFile(324))