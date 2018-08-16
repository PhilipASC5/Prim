

let i = 0;

function submitButton(){
    var comment = document.getElementById("comment").value;
    localStorage.setItem(i,comment);
    
    i++;


    let review = document.createElement("p");
    review.innerText = comment;
    const body = document.querySelector("body");
    body.appendChild(review);
    review.classList.add("review");
console.log("hi");
    let likeButton = document.createElement("div");
    body.appendChild(likeButton)
}






