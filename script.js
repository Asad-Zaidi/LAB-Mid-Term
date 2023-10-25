
let toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})

let deletefaq = document.querySelectorAll('.faq')
deletefaq.forEach(deletefaq => {
    deletefaq.addEventListener('click', () => {
        deletefaq.parentNode.parentNode.removeChild(deletefaq.parentNode)
    })
})


function addquestion() {
    var newquestion = document.getElementById("question").value;
    var newquestionText = document.createTextNode(newquestion);
    var newDiv = document.createElement("div");
    newDiv.appendChild(newquestionText);
    newDiv.setAttribute("class", "faq-question");
    newDiv.addEventListener("click", handleDelete);
    document.getElementById("questions").appendChild(newDiv);
    document.getElementById("question").value = "";
}
function addanswer() {
    var newanswer = document.getElementById("answer").value;
    var newanswerText = document.createTextNode(newanswer);
    var newDiv = document.createElement("div");
    newDiv.appendChild(newanswerText);
    newDiv.setAttribute("class", "faq-question");
    newDiv.addEventListener("click", handleDelete);
    document.getElementById("answer").appendChild(newDiv);
    document.getElementById("answer").value = "";
}

function handleDelete() {
    this.parentNode.parentNode.removeChild(this.parentNode);
}

