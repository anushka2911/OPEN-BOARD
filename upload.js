let upload = document.querySelector(".upload");
upload.addEventListener("click", (e) => {
  // to open files folder

  //create an element which can take input
  let input = document.createElement("input");
  //input type will be file
  input.setAttribute("type", "file");
  //automatically click this input
  input.click();

  //now when user will click on image
  //add 'change' event listener to it

  input.addEventListener("change", (e) => {
    let file = input.files[0];
    let url = URL.createObjectURL(file);

    let stickyTemplateHTML = `
   
    <div class="note-cont">
        <img src="${url}"/>
    </div>
    `;
    createSticky(stickyTemplateHTML);
})
  
});

function createSticky(stickyTemplateHTML) {
    let stickyCont = document.createElement("div");
    stickyCont.setAttribute("class", "sticky-cont");
    stickyCont.innerHTML = stickyTemplateHTML;
    document.body.appendChild(stickyCont);

    let delbtn=document.createElement("div");
    delbtn.setAttribute("class","imgdelbtn");
    delbtn.innerHTML = `<i class="fa-solid fa-trash "> </i>`;
  
    stickyCont.appendChild(delbtn);

    stickyCont.onmousedown = function (event) {
        function catchItem(e) {
            console.log(e);
            this.style.left = e.pageX - this.clientWidth / 2 + "px";
            this.style.top = e.pageY - this.clientHeight / 2 + "px";
            this.onmousemove = function(e) {
            this.style.left = e.pageX - this.clientWidth / 2 + "px";
            this.style.top = e.pageY - this.clientHeight / 2 + "px";
            }
            this.onmouseup = function() {
            this.onmousemove = null; // onmouseup event [ redirect mousemove event signal to null instead of the drag-able element]
            }
          }
          stickyCont.onmouseenter = catchItem; 
            };

            delbtn.addEventListener("click",(e)=>{
                console.log("delete button is clicked");
                 stickyCont.remove();
              })
        }
