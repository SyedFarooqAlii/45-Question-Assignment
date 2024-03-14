const userName:string[]=[`admin`,`fawwad`,`izhan`,`ebad`,`hasan`];
/*for(let i=0;i<userName.length;i++){
    if(userName[i] ===`admin`){
        console.log(`Hello Admin, Would You Like To See a Status Report?`);
    }else{console.log(`Hello${userName[i]} , thank you for logging in again`)};
};*/
userName.forEach(userName => {
    if(userName===`admin`){
        console.log('Hello Admin, Would You Like To See a Status Report')
    }
    else{
        console.log(`Hello ${userName},thank you for logging in again`)
    }
})