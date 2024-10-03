const text = prompt("Enter any text")

const letter = document.getElementById("letters")

for (let i = 0; i < text.length; i++) {
  const word = document.createElement("span")
  word.innerHTML = text[i]
  letter.appendChild(word)

  letter.addEventListener("click", (e) => {
    e.target.classList.add("active")
  })
}
