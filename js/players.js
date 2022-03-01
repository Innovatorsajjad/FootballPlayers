 //Detect search Button.........
 const SearchButton = () =>{
console.log('clicked');
    const searchValue = document.getElementById("Search_Box").value;

    const url= `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
    fetch(url)
    .then(Response=>Response.json())
    .then(data => DisplayPlayerDetails (data.player));
     
}

const DisplayPlayerDetails = (Players) =>{
 for(const player of Players){
    const parentDiv= document.getElementById("player_container");
    const div = document.createElement("div");
    div.classList.add("col-lg-4");

    div.innerHTML=`
    <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
       <div class="card-body">
           <h5 class="card-title">Card title</h5>
           <p class="card-text">text</p>
           <div class="buttons d-flex justify-content-around">
           <a href="#" class="btn btn-danger">Delete</a> 
           <a href="#" class="btn btn-success">Details</a>
      </div>
    </div>
    </div>
    `
    parentDiv.appendChild(div);
 };
   };


