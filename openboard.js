let pencilToolCont=document.querySelector(".pencil-tool-cont");
let eraserToolCont=document.querySelector(".eraser-tool-cont");

let toolsCont=document.querySelector(".tools-cont");
let optionsCont=document.querySelector(".options-cont");
let optionsFlag=true;//color tools and size is open
//optionFlag==true is used to show tools
//optionFlag==false hide tools
optionsCont.addEventListener("click",(e)=>{
   optionsFlag=!optionsFlag;

   if(optionsFlag==true)
   {
     openTools();
   }
   else
   {
      closeTools();
   }

})
function openTools(){
let iconElem=optionsCont.children[0];
iconElem.classList.remove("fa-bars");
iconElem.classList.add("fa-xmark");
toolsCont.style.display="flex";
}
function closeTools(){
    let iconElem=optionsCont.children[0];
iconElem.classList.remove("fa-xmark");
iconElem.classList.add("fa-bars");
toolsCont.style.display="none";
pencilToolCont.style.display="none";
eraserToolCont.style.display="none";

}

let pencilTool=document.getElementById("pencilTool");
let pencilToolFlag=true;
pencilTool.addEventListener("click",(e)=>{
    pencilToolFlag=!pencilToolFlag;

    if(pencilToolFlag==true)
    {
        openpencilToolCont();    

    }
    else
    {
        closepencilToolCont();
    }
})
 function openpencilToolCont()
 {
    pencilToolCont.style.display="flex";
 }
 function closepencilToolCont()
 {
    pencilToolCont.style.display="none";
 }

 let eraserTool=document.getElementById("eraserTool");
let eraserToolFlag=true;
 eraserTool.addEventListener("click",(e)=>{
    eraserToolFlag=!eraserToolFlag;

    if(eraserToolFlag==true)
    {
        openEraserToolCont();    
    }
    else
    {
        closeEraserToolCont();
    }
})
 function openEraserToolCont()
 {
    eraserToolCont.style.display="flex";
 }
 function closeEraserToolCont()
 {
    eraserToolCont.style.display="none";
 }
