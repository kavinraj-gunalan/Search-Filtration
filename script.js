function search_animal() {
  let input = document.getElementById('searchbar').value
   //console.log(input);
  input = input.toLowerCase();
  // console.log(input);
  let x = document.getElementsByClassName('animals');
   // console.log(x);
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none"; 
    } else {
      x[i].style.display = "list-item";
    }
  }
}

