idInstance= 10

function addChecklistItem () {
   var checklistInput= document.getElementById('checklistInput')
   console.log("checklist button clicked")
   var checklistItem= checklistInput.value

   if (checklistItem.trim() !== "") {
    var checklist= document.getElementById("checklist")
    var checkbox= document.createElement("input")
    checkbox.setAttribute("type","checkbox")
    checkbox.setAttribute("id",`item${idInstance}`)
    var itemLabel= document.createElement("label")
   // itemLabel.htmlFor= ("item10")
    itemLabel.setAttribute ("for",`${idInstance}`)
    itemLabel.innerHTML= checklistItem
    checklist.appendChild(checkbox)
    checklist.appendChild(itemLabel)
    checklistInput.value="";
    idInstance++
   }
}

function addItem() {
    var itemInput = document.getElementById("itemInput");
    var item = itemInput.value;

    if (item.trim() !== "") {
        var wishlist = document.getElementById("wishlist");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(item));
        wishlist.appendChild(li);
        itemInput.value = "";
    }
};


const username = 'jack';
const password = 'password';

const user = {
  username: username,
  password: password
};

