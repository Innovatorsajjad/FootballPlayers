 //Detect search Button.........
 const SearchButton = () =>{
    const searchValue = document.getElementById("Search_Box").value;
    searchValue.value=""
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
    div.classList.add("mb-3");

    div.innerHTML=`
    <div class="card mx-auto text-center" style="width: 18rem;">
      <img src="${player.strThumb}" class="card-img-top" alt="...">
       <div class="card-body">
           <h5 class="card-title">${player.strPlayer}</h5>
           <p class="card-text">${player.strNationality}</p>
           <div class="buttons d-flex justify-content-around">
           <a href="#" class="btn btn-danger">Delete</a> 
           <a href="#" class="btn btn-success" onclick="Details('${player.idPlayer}')">Details</a>
      </div>
    </div>
    </div>
    `
    parentDiv.appendChild(div);
 };
   };
//button click addin..........\

const Details = (info)=> {
    const url=`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${info}`
    fetch(url)
    .then(Response=>Response.json())
    .then(data =>LoadData(data.players[0]));
}
const LoadData = (info) => {
 console.log(info);
 const cardInfo = document.getElementById("Details_container").innerHTML=`
 <div class="card w-75 ">
  <div class="card-body">
    <h5 class="card-title">${info.strPlayer}</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    
  </div>
</div>
 `

}

