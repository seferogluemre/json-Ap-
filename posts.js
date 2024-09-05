async function fetchUserPost() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId");
  console.log(userId);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  const userData = await response.json();
  try {
    userData.forEach((data) => {
      userDatatoCard(data);
    });
  } catch (error) {
    alert("Bir Sorunla Karşılaşıldı:" + error);
  }
}
function userDatatoCard(userPost) {
  const postRow = document.getElementById("postRow");
  const div = document.createElement("div");
  div.classList.add("col-lg-4");
  div.innerHTML = `
        <div class="card">
      <div class="card-body">
        <div class="card-text">Post Title :<span class="text-success">${userPost.title}</span></div>
        <div class="card-text">Post Description : <span>${userPost.body}</span></div>
      </div>
    </div>
    `;
  postRow.appendChild(div);
}
function userIdInput() {
  const ınputUserId = parseInt(prompt("Enter user id"));
  if (ınputUserId < 1 || ınputUserId > 10) {
    alert("Lütfen 1 ila 10 arasında sayı giriniz!!!");
    userIdInput();
  } else {
    window.location.href = `posts.html?userId=${ınputUserId}`;
  }
}
fetchUserPost();
    