async function userGetFetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const userData = await response.json();
  userData.forEach((data) => {
    userToCard(data);
  });
}
const cardContainerRow = document.getElementById("userCardRow");
function userToCard(users) {
  cardContainerRow.innerHTML += ` <div class="col-lg-3 mb-4  col-md-4 col-sm-6">
          <div class="card text-black">
            <div class="userInfo bg-body-secondary">
              <div class="d-flex justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-info-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                  />
                  <path
                    d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                  />
                </svg>
              </div>

                
              <h4>Name:${users.name}</h4>
              <h4>Username:${users.username}</h4>
            </div>

            <div class="userInfo bg-body-tertiary">
              <div class="d-flex justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"
                  />
                  <path
                    d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
                  />
                </svg>
              </div>
              <h5>Address:${users.address.street}</h5>
              <h5>Address Suite ${users.address.suite}</h5>
              <h5>Address City ${users.address.city}</h5>
              <h5>Address ZipCode${users.address.zipcode}</h5>
            </div>

            <div class="userInfo">
              <div class="d-flex justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-person-lines-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"
                  />
                </svg>
              </div>
              <h5>Mail:${users.email}</h5>
              <h5>Phone:${users.phone}</h5>
              <h5>WebSite:${users.website}</h5>
              <h5>Company:${users.company.name}</h5>
            </div>
          </div>
        </div>`;
}
userGetFetchData();
