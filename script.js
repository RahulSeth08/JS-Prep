
// function chage() {
//   const name = document.getElementById("college");
//   console.log(name)
//   name.innerHTML = name.innerHTML.trim() == "Galgotias College Of Engineering & Technology" ? "IIT Delhi" : "Galgotias College Of Engineering & Technology";
// }


function change() {
  const name = document.getElementById("college")
  console.log(name)
  name.innerHTML = name.innerHTML == "IIT Delhi" ? "Galgotias College Of Engineering & Technology" : "IIT Delhi"

}


