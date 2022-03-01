 //Detect search Button.........
 const SearchButton = () =>{
     document.getElementById("spinner").style.display="block";
     document.getElementById("player_container").innerHTML='';
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
    div.classList.add("mb-3");
    document.getElementById("spinner").style.display="none"
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
 <div class="card w-75 text-center">
  <div class="card-body">
  <img src="${info.strThumb}" class="card-img-top rounded-circle w-75" alt="...">
  <h3 class="card-title">Nationality: ${info.strNationality}</h3>
    <h5 class="card-title">Name: ${info.strPlayer}</h5>
    <p class="card-text"> Description: ${info.strDescriptionEN.slice(0,400)}</p></p>
    
  </div>
</div>
 `

}

