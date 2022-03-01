 //Detect search Button.........
 const SearchButton = () =>{
    const searchValue = document.getElementById("Search_Box").value;

    const url= `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
    fetch(url)
    .then(Response=>Response.json())
    .then(data => console.log(data))



}