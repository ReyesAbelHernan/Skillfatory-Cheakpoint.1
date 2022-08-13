
const URL_A = `https://rickandmortyapi.com/api/character/`

const getData = (apiURL) => {
  console.log(apiURL)
  return fetch(apiURL)
        .then(response => response.json())
        .then(json => {
            data(json),
            pagination(json.info);
          })
}

const data = (data) => {  
  let body = ``;
  data.results.forEach(card => {
    body += `
    <div class="card m-3" data-aos="zoom-in-down">
        <img src="${card.image}" class="imganRaM">
        <div class="card-body">
            <h5 class="text-center">${card.name}</h5>
            <div class="stats">
                <span class="status ${card.status} badge card-text ">${card.status}</span>
                <span class="gender ${card.gender} badge card-text "> ${card.gender}</span>
                <span class="species ${card.species} badge card-text"> ${card.species}</span>
            </div>
            <div class="location">
            <span class="badge card-text">Location:${card.location.name}</span>
            <span class="badge card-text">Origin:${card.origin.name}</span>
            </div>
        </div>
    </div>
    `});
  document.getElementById('fetch-cards').innerHTML = body
}


const pagination = (info) => {
    let body = `<button class="bi bi-arrow-left-square" onclick="getData('${info.prev}')"></button>`
    body += `<button class="bi bi-arrow-right-square"  onclick="getData('${info.next}')"></button>`
    
    document.getElementById('pagination').innerHTML = body;
}
getData(URL_A);


