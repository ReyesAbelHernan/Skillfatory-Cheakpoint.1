const urlBase = "https://jsonplaceholder.typicode.com/users";

fetch(urlBase)
  .then((response) => response.json())
  .then((data) => userDataTable(data));

const userDataTable = (data) => {
  let user = data;
  let body = ``;
  user.forEach(({ id, name, email, address, phone, website }) => {
    body += `
        <div class="container" data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
                <div class="row row-cols-8">                               
                    <div class="col">
                        <label>${name}</label>
                    </div>
                                                
                    <div class="col">
                        <label>${id}</label>
                    </div>  
                                                
                    <div class="col">
                        <label>${email}</label>
                    </div> 
                                                
                    <div class="col">
                        <label>${phone}</label>
                    </div>     
                                            
                    <div class="col">
                        <label>${address.city}</label>
                    </div>
                    <div class="col">
                        <label>${website}</label>
                    </div>
                </div>   
        </div>`
    ;});
  document.getElementById("usersTable").innerHTML = body;
  console.log(data)
};
