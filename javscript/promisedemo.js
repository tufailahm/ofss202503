const applyLoan = new Promise(( resolve,reject) => {
    let status = false;
    if(status)
        resolve("Customer applied for loan")
    else
        reject("Customer does not meet the minimum requirments")
});

applyLoan.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error)
})