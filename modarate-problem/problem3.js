


function printDetails(person){
    if(typeof person !== "object"){
        return "please provide me a valid object"
    }else{
        const name = person.name || "no";
        const age = person.age || "no";
        const email = person.email || "no";
        const bou = person.book || "no";
        return "my name "+name+". my age "+age+". my email "+email+". my book "+book;
    }

}

const obj = {
    name: "salma",
    age:26,
    email:"abc@gmail.com"
}

console.log(printDetails(obj))
