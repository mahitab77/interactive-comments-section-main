var buttonflag

function createcomment(){

  // Create the outermost container <div>
  var julioContainer = document.createElement("div")
  julioContainer.id = "new"
  console.log(buttonflag)
  //if gaily mn el send button 
  if (buttonflag==1){
  julioContainer.classList.add("postwrappercomment")
  }
  //else ybqa reply
   else if(buttonflag==2){
  julioContainer.classList.add("postwrapperreply")
  }

// Create the <div> with class "verticalcounter"
var verticalCounterDiv = document.createElement("div")
verticalCounterDiv.classList.add("verticalcounter")

// Create the "+" icon image
var plusImg = document.createElement("img")
plusImg.classList.add("plus")
plusImg.src = "./images/icon-plus.svg"

plusImg.onclick = incrementvote
// Create the <h> element for vote count
var voteCountElement = document.createElement("h")
voteCountElement.classList.add("votecount")
voteCountElement.textContent = "0"


// Create the "-" icon image
var minusImg = document.createElement("img")
minusImg.classList.add("minus")
minusImg.src = "./images/icon-minus.svg"

minusImg.onclick = decrementvote


// Append the "+" and "-" icons and vote count to verticalCounterDiv
verticalCounterDiv.appendChild(plusImg)
verticalCounterDiv.appendChild(voteCountElement)
verticalCounterDiv.appendChild(minusImg)


// Create the <div> for comment box
var commentBoxDiv = document.createElement("div")
commentBoxDiv.id = "julcombox"
commentBoxDiv.classList.add("commentbox")



// Create the inner structure of comment box
var notetopDiv = document.createElement("div")
notetopDiv.classList.add("notetop")

var imgnametimeDiv = document.createElement("div")
imgnametimeDiv.classList.add("imgnametime")

var avatarImg = document.createElement("img")
avatarImg.classList.add("avatar")
avatarImg.src = "./images/avatars/image-juliusomo.png"

var usernameSpan = document.createElement("span")
usernameSpan.classList.add("uname")
usernameSpan.textContent = "juliusomo"

var youSpan = document.createElement("span")
youSpan.id = "me"
youSpan.textContent = "you"

var timeElapsedSpan = document.createElement("span")
timeElapsedSpan.classList.add("timeelapsed")
timeElapsedSpan.textContent = "A moment ago"

imgnametimeDiv.appendChild(avatarImg);
imgnametimeDiv.appendChild(usernameSpan);
imgnametimeDiv.appendChild(youSpan)
imgnametimeDiv.appendChild(timeElapsedSpan)

var actionsDiv = document.createElement("div")
actionsDiv.id = "deleteedit"
actionsDiv.classList.add("actions")

var deleteImg = document.createElement("img")
deleteImg.classList.add("delete")
deleteImg.src = "./images/icon-delete.svg"

var deleteLink = document.createElement("a")
deleteLink.classList.add("delete")
deleteLink.href = "#"
deleteLink.textContent = "Delete"
//delete for new div
deleteLink.onclick=showmodal
deleteImg.onclick=showmodal

var editImg = document.createElement("img")
editImg.classList.add("editicon")
editImg.src = "./images/icon-edit.svg"

var editLink = document.createElement("a")
editLink.classList.add("editicon")
editLink.href = "#"
editLink.textContent = "Edit"

actionsDiv.appendChild(deleteImg)
actionsDiv.appendChild(deleteLink)
actionsDiv.appendChild(editImg)
actionsDiv.appendChild(editLink)

notetopDiv.appendChild(imgnametimeDiv)
notetopDiv.appendChild(actionsDiv)

var commentP = document.createElement("p")
commentP.classList.add("comment")
commentP.innerHTML = "<span class='at'>@ramsismiron</span>I couldn't agree  are what stay constant."

commentBoxDiv.appendChild(notetopDiv)
commentBoxDiv.appendChild(commentP)

//verticalCounterDiv.appendChild(voteCountElement)

julioContainer.appendChild(verticalCounterDiv)
julioContainer.appendChild(commentBoxDiv)

// Select all elements with class "postwrapperreply"
var postWrapperReplyElements = document.querySelectorAll(".postwrapperreply")


if (postWrapperReplyElements.length > 0) {
  // Get the last element with the class "postwrapperreply"
  var lastPostWrapperReply = postWrapperReplyElements[postWrapperReplyElements.length - 1]
  
  // Append the newDiv after the last "postwrapperreply" element
  lastPostWrapperReply.appendChild(julioContainer)
  lastPostWrapperReply.insertAdjacentElement('afterend',julioContainer )
} else {

    var postWrappercommentElements = document.querySelectorAll(".postwrappercomment")
    var lastPostWrapperComment = postWrappercommentElements[postWrappercommentElements.length - 1]
   lastPostWrapperComment.appendChild(julioContainer)
   lastPostWrapperComment.insertAdjacentElement('afterend',julioContainer )
}


}

//////////////the send button////////////////////////////////////////////

var sndbtn=document.getElementById("sendbtn")

function handleonclick (){

    //validate that textarea is not empty
      var textarea=document.getElementById("txtarea").value
      var modal = document.getElementById("myModal")

      if (textarea=="") {
        
        // Show the modal dialog
        modal.style.display = "flex"
        // Close the modal when the user clicks on the close button (×)
        var closeButton = document.getElementById("moddelete")
        console.log(closeButton)
        function closetextmodal () {
         modal.style.display = "none"
        }
        closeButton.onclick=closetextmodal
      }

     else {
        //setting the flag for create function to identify the class of div to create
        buttonflag=1
        createcomment()
        var newcomment=document.getElementById("new")
        var thep= newcomment.querySelector('.commentbox .comment') 
        thep.innerText=document.getElementById("txtarea").value
        // Clear the textarea of the send box
        document.getElementById("txtarea").value =""
       
     }
}

sndbtn.onclick= handleonclick

/////////////////////////////////////////the delete button////////////////////////////////////////
var dimmedOverlay =document.getElementById("dimmed-overlay")
var deleteButtons = document.getElementsByClassName("delete")
var todeletec
var todeletr


//modal shows when delete button of the comment  is clicked
function showmodal(e) {

    todeletec=e.target.closest('.postwrappercomment')
    todeletr=e.target.closest('.postwrapperreply')
    deleteModal.style.display = "block"
    dimmedOverlay.style.display = "block"
}

for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = showmodal   
}


// Get the modal and its buttons
var deleteModal = document.getElementById("deletemodal")
var cancelBtn = document.getElementById("modalcancel")
var deleteBtn = document.getElementById("modaldelete")


//delete comment when modal delete button is clicked
function handleDelete() {

     if (todeletec!==null) {
        todeletec.remove()
    } 
    else if (todeletr!==null) {
        todeletr.remove()
    }
    
    deleteModal.style.display = "none"
    dimmedOverlay.style.display = "none"
}

// Add onclick to modal buttons
function nothing(){
    deleteModal.style.display = "none"
    dimmedOverlay.style.display = "none"
}
cancelBtn.onclick = nothing
 
deleteBtn.onclick = handleDelete


//////////the voting counter////////////////////////////////////////////////////////////////////////


// Get the class list for plus
var plusIcon = document.getElementsByClassName("plus")
// Get the class list for minus
var minusIcon = document.getElementsByClassName("minus")


function incrementvote(event) {
    var voteCount = event.target.parentElement.querySelector(".votecount")
    var count = parseInt(voteCount.innerText);
    count++
    voteCount.innerText = count
}

function decrementvote(event) {
    var voteCount = event.target.parentElement.querySelector(".votecount")
    var count = parseInt(voteCount.innerText)
    if (count > 0) {
        count--;
        voteCount.innerText = count
    }
}
for (var i = 0; i < plusIcon.length; i++) {
    plusIcon[i].onclick = incrementvote;
}

for (var i = 0; i < minusIcon.length; i++) {
    minusIcon[i].onclick = decrementvote;
}

//////////////////////reply to a comment/////////////////////////////////////////////

function createReply(e) {
  
    e.preventDefault(); 
    var reply = e.target 
    var parentComment = reply.closest('.postwrappercomment')
    var parentreply=reply.closest('.postwrapperreply')

       const replyassend= document.createElement('div')
       replyassend.id = 'newreply'
       replyassend.classList.add('postwrapper')

      // Create the image element with class "avatar" and set the src attribute
      const img = document.createElement('img')
      img.classList.add('avatar')
      img.src = './images/avatars/image-juliusomo.png'

      // Create the textarea element with id "txtarea" and placeholder text
      const textarea = document.createElement('textarea')
      textarea.id = 'newtxtarea'
      textarea.placeholder = 'Add a comment...'

     // Create the button element with id "sendbtn" and text content "SEND"
     const button = document.createElement('button')
     button.classList = 'replyicon'
     button.id="newreplybutton"
     button.textContent = 'Reply'

     // Append the image, textarea, and button elements to the main div
     replyassend.appendChild(img)
     replyassend.appendChild(textarea)
     replyassend.appendChild(button)

     

     //////////////////////////////////////////////////////////////////////
     
    if (parentComment!==null) {

       //to put the @name in the reply text area get it 
       var inparent=parentComment.childNodes
       var incommentbox=inparent[3].childNodes
       var innotetop=incommentbox[1].childNodes
       var inimgname=innotetop[1].childNodes
       var inp=inimgname[3].childNodes
       var username=inp[1].innerText
       // Insert the new postwrapperreply element immediately after the parent comment
       parentComment.insertAdjacentElement('afterend', replyassend)
    }
     else if (parentreply!==null){
    //set width 
    replyassend.style.width="599px"
    //adjust margin
    replyassend.style.marginLeft="92px"
    //to put the @name in the reply text area get it 
    var inparentr=parentreply.childNodes
    var incommentboxr=inparentr[3].childNodes
    var innotetopr=incommentboxr[1].childNodes
    var inimgnamer=innotetopr[1].childNodes
    var inpr=inimgnamer[3].childNodes
    var username=inpr[1].innerText

     parentreply.insertAdjacentElement('afterend', replyassend) 
     }

     //get the text in the textarea into a var.
        var replyText=document.getElementById("newtxtarea")
     
        
     //append the @uname to the text,display it in the textaraea and put it in p
      replyText.innerText="@"+username
    
       var replybutton=document.getElementById("newreplybutton")
       console.log(replybutton)
        //when the button reply is clicked
        function getreply(){
 
        //take the text from text area 
         var input=document.getElementById("newtxtarea").value
         console.log(input)

         buttonflag=2
         createcomment()
         var newreplyc=document.getElementById("new")

          //Access the "comment" paragraph element and the "at" span element within it
         var commentp = newreplyc.querySelector(".commentbox .comment")
         var atSpan = newreplyc.querySelector(".commentbox .comment .at")
        
        var atusername="@"+username
        var resultText = input.replace("atusername","")
       
         atSpan.innerText=atusername
         commentp.innerText=resultText
            
        //appending the reply
         
        if (parentComment!==null) {
        parentComment.insertAdjacentElement('afterend', newreplyc)
        
        }
        else if (parentreply!==null){
      
        parentreply.insertAdjacentElement('afterend', newreplyc)
        }
        // deleting the send for reply comment
        replyassend.parentNode.removeChild(replyassend)
    }
        replybutton.onclick = getreply
        
        

    }


// get all the reply buttons and call function createreply comment when a reply is clicked
var replyAnchorss = document.getElementsByClassName("replyicon");

for (var i = 0; i < replyAnchorss.length; i++) {
    replyAnchorss[i].onclick= createReply
}


/////////////////////the edit button////////////////////////////
var editElements=document.getElementsByClassName("editicon")

function edithandle(event){

var editbutton=event.target
 var editparent=editbutton.parentNode  
 var tnedit=editparent.parentNode 
 var cbedit=tnedit.parentNode
 console.log(cbedit)
// Select the <p> element with class "comment"
var pElement =cbedit.querySelector('.comment')
console.log(pElement)
//pElement.setAttribute("contenteditable","true")

///////
// Create a textarea element
var textareaforedit = document.createElement("textarea")


// append the text area
cbedit.appendChild(textareaforedit)
//put p in textarea
textareaforedit.innerText=pElement.innerText
textareaforedit.style.border = "2px solid hsl(223, 19%, 93%)"
textareaforedit.style.borderRadius = "7px"
textareaforedit.style.width = "420px"
textareaforedit.style.height = "70px"
if (window.innerWidth <= 375) {
    textareaforedit.style.width = "200px"
    textareaforedit.style.height = "70px"
}
textareaforedit.style.padding = "0px"
textareaforedit.style.color = "gray"
//and cover the paragraph
pElement.style.display="none"

// Create the "Update" button
var updateButton = document.createElement("button")
updateButton.textContent = "Update"

var postWrapperReplyDiv = cbedit.parentNode
console.log(postWrapperReplyDiv)
postWrapperReplyDiv.appendChild(updateButton)


//Apply the CSS styles to the buttonDiv
updateButton.style.position = "absolute"
updateButton.style.top = "720px"
updateButton.style.right = "150px"
updateButton.style.width = "95px"
updateButton.style.height = "38px"
updateButton.style.backgroundColor = "hsl(238, 58%, 44%)"
updateButton.style.color = "white"
updateButton.style.borderRadius = "7px"
updateButton.style.border = "0px"
updateButton.style.fontSize = "14px"
/////
if (window.innerWidth <= 375) {
    updateButton.style.top = "720px"
    updateButton.style.right = "150px"
    updateButton.style.width = "95px"
    updateButton.style.height = "38px"
}

function updatetext(){
 //put textarea in p

console.log(textareaforedit.innerText)
pElement.innerText=textareaforedit.value
pElement.style.display="flex"
textareaforedit.style.display="none"
//adjust time
var edittime=tnedit.querySelector(".timeelapsed")
console.log(edittime)
edittime.innerText="A moment ago"
updateButton.style.display="none"
}
updateButton.onclick=updatetext
}

for (var i = 0; i < editElements.length; i++) {
    editElements[i].onclick= edithandle
}




       
       

   






