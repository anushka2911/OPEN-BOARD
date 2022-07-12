let sticky=document.querySelector(".sticky-btn");
sticky.addEventListener("click", (e) => {
  
  let stickyCont = document.createElement("div");
  stickyCont.setAttribute("class", "sticky-cont");
  stickyCont.innerHTML = `
  <div class="header-cont">
  </div>
  <div class="note-cont">
      <textarea spellcheck="false" placeholder="Write Here"></textarea>
  </div>
  `;
  let delbtn=document.createElement("div");
  delbtn.setAttribute("class","btn");
  delbtn.innerHTML = `        <i class="fa-solid fa-trash "> </i>   `;

  stickyCont.appendChild(delbtn);
  document.body.appendChild(stickyCont);

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

 
  delbtn.addEventListener("click",(e)=>{
    console.log("delete button is clicked");
     stickyCont.remove();
  })
  })


  


  



 

