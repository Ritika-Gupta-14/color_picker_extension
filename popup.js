const btn=document.querySelector(".btn");
const cgrid=document.querySelector(".colorgrid");
const cval=document.querySelector(".colorval");
btn.addEventListener("click",async()=>{
    let [tab]=await chrome.tabs.query({active:true,currentWindow:true});
   

    chrome.scripting.executeScript({
        target:{tabId:tab.id},
        function: pick
    },(injectionresult)=>{
        const [clrval]=injectionresult;
        const clr=clrval.result.sRGBHex;
        if(clr){
        cgrid.style.backgroundColor=clr;
        cval.innerText=clr;
        try{
        navigator.clipboard.writeText(clr);}
        catch(err){
            console.log(err);
    }}

    });
});


async function pick(){
    try{
        const eyeDropper=new EyeDropper();

      return await eyeDropper.open();

    }catch(err){

    }
}
