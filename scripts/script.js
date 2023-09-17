console.log("I work!")

const search = document.querySelector(".search");
const findResto = document.getElementById("find-resto");
console.log(search);
console.log(findResto);

search.addEventListener("click", () => {
    if(findResto.style.display === "none"){
    findResto.style.display = "block";
    search.innerHTML = "Submit"
    } else{
        findResto.style.display = "none"
        search.innerHTML = "Search"
    }

});