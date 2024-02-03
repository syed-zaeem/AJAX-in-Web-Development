function getUserData() {
  const userId = document.getElementById("userId").value;
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

  // AJAX Request
  //   Instantiate an xhr Object
  const xhr = new XMLHttpRequest();
  //   xhr.onreadystatechange = function () {
  //     if (xhr.readyState === XMLHttpRequest.DONE) {
  //       if (xhr.status === 200) {
  //         const data = JSON.parse(xhr.responseText);
  //         displayUserData(data);
  //       } else {
  //         console.log("Error fetching data: ", xhr.status);
  //         document.getElementById("result").innerHTML =
  //           "<h4>Error Fetching the data, Please try again later</h4>";
  //       }
  //     }
  //   };

  //   Open the Object
  xhr.open("GET", url, true);

  //   What to do on progress (Optional)
  xhr.onprogress = function () {
    console.log("On Progress!");
  };

  //   What to do when response is ready
  //   onLoad => when ready state is 4 and request is finished and response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
      const data = JSON.parse(this.responseText);
      displayUserData(data);
    } else {
      console.log("Error fetching data: ", this.status);
          document.getElementById("result").innerHTML =
            "<h4>Error Fetching the data, Please try again later</h4>";
    }
  };

  //   Send the Request
  xhr.send();

  console.log("We are done!")
}

const displayUserData = (data) => {
  const resultDiv = document.getElementById("result");
  const name = data.name;
  const username = data.username;
  const email = data.email;
  const city = data.address.city;
  const zipcode = data.address.zipcode;
  const phone = data.phone;
  const company = data.company.name;

  resultDiv.innerHTML = `
    <h2 class="userDataHeading">User Data is:</h2>
    <table class="table">
        <thead class="tableHeader">
            <tr class="tableHeaderRow">
                <td class="tableHeaderCell">Name</td>
                <td class="tableHeaderCell">Username</td>
                <td class="tableHeaderCell">Email</td>
                <td class="tableHeaderCell">City</td>
                <td class="tableHeaderCell">Zip-Code</td>
                <td class="tableHeaderCell">Phone</td>
                <td class="tableHeaderCell">Company</td>
            </tr>
        </thead>
        <tbody class="tableBody">
            <tr class="tableBodyRow">
                <td class="tableBodyCell">${name}</td>
                <td class="tableBodyCell">${username}</td>
                <td class="tableBodyCell">${email}</td>
                <td class="tableBodyCell">${city}</td>
                <td class="tableBodyCell">${zipcode}</td>
                <td class="tableBodyCell">${phone}</td>
                <td class="tableBodyCell">${company}</td>
            </tr>
        </tbody>
      </table>
    `;
};
