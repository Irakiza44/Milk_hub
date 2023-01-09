

  // Read more pop up

  const serviceItems = document.querySelector(".service-items");
  const popup = document.querySelector(".popup-box")
  const popupCloseBtn = popup.querySelector(".popup-close-btn");
  const popupCloseIcon = popup.querySelector(".popup-close-icon");

  serviceItems.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
       const item =event.target.parentElement;
       const h3 = item.querySelector("h3").innerHTML;
       const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
       popup.querySelector("h3").innerHTML = h3;
       popup.querySelector(".popup-body").innerHTML = readMoreCont;
       popupBox();
    }

  })

  popupCloseBtn.addEventListener("click", popupBox);
  popupCloseIcon.addEventListener("click", popupBox);

  popup.addEventListener("click", function(event){
     if(event.target == popup){
        popupBox();
     }
  })

  function popupBox(){
    popup.classList.toggle("open");
  }


  //Hide and show the create hub buttom

  const createHub = document.getElementById("createHub")
  const createButton = document.getElementById("createButton")
  createHub.style.display = "none"

  createButton.addEventListener("click", ()=>{
   createHub.style.display = "block"
  })

  // Create Milk hub

  const hubName = document.getElementById("name")
  const hubLocation = document.getElementById("location")
  const supplier = document.getElementById("supplier")
  const telephone = document.getElementById("telephone")
  const picture = document.getElementById("picture")
  const submitButton = document.getElementById("submitButton")

  submitButton.addEventListener("click", (event)=>{
      event.preventDefault()

      createMilkZone()
  })

  function createMilkZone(){
    var milkzones;

    if(!localStorage.milkZones){
      milkzones = [];
    }

    else{
      milkzones = JSON.parse(localStorage.milkZones)
    }

    

    const imgLink =  picture.files
    console.log(imgLink);
     const reader =  new FileReader();
     reader.readAsDataURL(imgLink[0])
     reader.addEventListener("load",()=>{
        finalImage = reader.result
    const milkSection = {}
    milkSection.Name = hubName.value;
    milkSection.Location = hubLocation.value;
    milkSection.Supplier = supplier.value;
    milkSection.Telephone = telephone.value;
    milkSection.picture = finalImage;

    console.log("milkSection", milkSection)
    milkzones.push(milkSection);
    localStorage.milkzones = JSON.stringify(milkzones)
     })

     return true;
  }



  document.addEventListener("DOMContentLoaded", () => {
    let createMilkZone = document.getElementById("createMilkZone")
    createMilkZone.onsubmit = (event) => {
      event.preventDefault()

    let formData  = new FormData(createMilkZone)

    let data ={}
    for(let field of formData){
      data[field[0]] = field[1]
  }
    }
  })