//your JS code here. If required.
let initalPromise = function() {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve([1,2,3,4])
        },3000)
    });
}

let ouput = document.getElementById("output");

initalPromise()
.then((result) =>{
    const evenNumber = result.filter((item) => item % 2===0);
    setTimeout(()=>{
         ouput.innerText = `${evenNumber.join(',')}`;
    },1000)

    return evenNumber;
})
.then((even)=>{
    const double = even.map((item) => item*2);
    setTimeout(()=>{
         ouput.innerText = `${double.join(',')}`;
    },2000)
   
})
   