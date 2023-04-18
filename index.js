console.log('script running')
const element=document.getElementById("ham");
console.log(element)
document.getElementById("ham").addEventListener("click",()=>{
    console.log('click')
    document.getElementById('hammenu').style.right=0;
})
document.getElementById("close").addEventListener("click",()=>{
    console.log('click')
    document.getElementById('hammenu').style.right='-100%';
})