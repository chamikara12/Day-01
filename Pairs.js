//write to code to find the all pairs that sum up to the 7
console.log("Matching pairs")
let targetArr=[1,2,3,4,5,6];
for(let i=0; i<targetArr.length; i++){
    for(let j=0; j<targetArr.length; j++){
        if(targetArr[i]+targetArr[j]==7)
            
            console.log(targetArr[i],targetArr[j]);
            
    }
