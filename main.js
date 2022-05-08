// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const modal = document.getElementById("modal")
modal.className = "hidden"
const likeButton = document.querySelectorAll(".like-glyph")

likeButton.forEach(like => {like.addEventListener("click", () => {
  mimicServerCall()
  .then(() => {
    if(like.textContent == EMPTY_HEART){
      like.textContent = FULL_HEART
      like.className ="activated-heart"
      
    } else if (like.textContent !== EMPTY_HEART){
      like.textContent = EMPTY_HEART
      like.className = "" 
    }
  })
  .catch((error) => {
    if(error == "Random server error. Try again.") {
       modal.className = ""
       const msg = document.getElementById("modal-message")
       msg.innerText = "Random server error. Try again."
       setTimeout(function(){
       const element = document.getElementById("modal")
       element.className = "hidden"
     }, 3000)}})
})})


// function test(){
//   console.log("test")
// }

// Your JavaScript code goes here!
// function hideError() {
//   const element = document.getElementById("modal")
//   element.className = "hidden"
// }

// hideError()

// const like = document.querySelectorAll(".like-glyph") 
// like.addEventListener('click', mimicServerCall().then((obj) => {
//   if (glyph.textContent !== FULL_HEART) {
//     glyph.classList.add("activated-heart")
//     glyph.textContent = FULL_HEART
//   }
//   else if (glyph.textContent === FULL_HEART) { 
//     glyph.textContent = EMPTY_HEART
//     glyph.classList.remove("activated-heart")
//   }
//   console.log(obj)
// })
// .catch((error) => {
//   if(error == "Random server error. Try again.") {
//     showError()
//     const modal = document.getElementById("modal-message")
//     modal.innerText = "Random server error. Try again."
//     setTimeout(function(){
//       const element = document.getElementById("modal")
//       element.className = "hidden"
//     }, 3000)
//   }
// }) )


  






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
