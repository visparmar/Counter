const cnt=document.querySelectorAll('.count')
let speed=200;
cnt.forEach((value)=>{
    let target_count=value.dataset.count;
    let init_count=+value.innerText;
    console.log(target_count)
let newnum =Math.floor(target_count/speed)
    const updateNum = () =>{
       init_count+=newnum;
       value.innerText=init_count;
  
       if(init_count < target_count){
        setTimeout(()=>{updateNum()},50)
       }
       
    }

    updateNum();
})

