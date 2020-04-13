// let url = "https://salty-castle-33988.herokuapp.com/";
let url = "http://localhost:8000/";
let requestDashboard = async () => {
  const user = localStorage.getItem("user");
  // Requests
  let businessRequests = await fetch(`${url}api/v1/admin/activate`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //   host : 'url',
      Authorization: localStorage.getItem("Authorization"),
    },
  });
  let jsonbusinessrequests = await businessRequests.json();
  document.querySelector("body").innerHTML = ``;
  let maindiv = document.createElement("div");
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let theadtr = document.createElement("tr");
  let th = document.createElement("th");
  let th1 = document.createElement("th");
  let th2 = document.createElement("th");
  let th3 = document.createElement("th");
  let th4 = document.createElement("th");
  let th5 = document.createElement("th");
  let th6 = document.createElement("th");
  let dashboard = document.createElement("a");
  maindiv.appendChild(
    dashboard
  ).innerHTML = `<a class="btn btn-outline-pink btn-xs mb-5 mx-5 px-4 py-3" onClick='adminDashboard()'>Dashboard</a>`;
  maindiv.className += "card request-list-table table-responsive mt-5";
  table.className += "table mt-5";
  document.querySelector("body").appendChild(maindiv);
  maindiv.appendChild(table);
  table.appendChild(thead);
  thead.appendChild(theadtr);
  thead.appendChild(th5).innerText = "Business Name";
  thead.appendChild(th).innerText = "Category";
  thead.appendChild(th1).innerText = "Email";
  thead.appendChild(th2).innerText = "Mobile";
  thead.appendChild(th3).innerText = "City";
  thead.appendChild(th4).innerText = "Budget";
  thead.appendChild(th6).innerText = "Approve";
  let tbody = document.createElement("tbody");
  table.appendChild(tbody);
  for (let elem of jsonbusinessrequests.data) {
    console.log(elem._id);
    tbody.innerHTML += `
            <tr>
            <td>${elem.name}</td>
            <td>${elem.category}</td>
            <td>${elem.email}</td>
            <td>${elem.primaryContact}</td>
            <td>${elem.city}</td>
            <td>${elem.price}</td>
            <td onClick='ApproveBusinessRequest("${elem._id}")'><a class="btn btn-danger text-white btn-xs">Approve</a></td>
        `;
  }
};
let ApproveBusinessRequest = async (id) => {
  let activateResponse = await fetch(`${url}api/v1/admin/activate/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("Authorization"),
    },
  });
  let jsonactivateresponse = await activateResponse.json();
  if (jsonactivateresponse.error) {
    return alert(jsonactivateresponse.error);
  }
  console.log(this);
  return alert(id + "verified successfully.");
};
let adminDashboard = async (jsonToken) => {
  const admin = localStorage.getItem("user");
  // Orders
  let order = await fetch(
    `${url}api/v1/business/orders/${JSON.parse(admin)._id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("Authorization"),
      },
    }
  );
  // let response = await order.json();
  let businessRequests = await fetch(`${url}api/v1/admin/activate`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //   host : 'url',
      Authorization: localStorage.getItem("Authorization"),
    },
  });
  let jsonbusinessrequests = await businessRequests.json();
  // Fetch all business lists
  let businesslists = await fetch(`${url}api/v1/admin/fetch/businesslist`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //   host : 'url',
      Authorization: localStorage.getItem("Authorization"),
    },
  });
  let jsonbusinesslists = await businesslists.json();
  // Fetch all clients lists
  let userslists = await fetch(`${url}api/v1/admin/fetch/clients`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //   host : 'url',
      Authorization: localStorage.getItem("Authorization"),
    },
  });
  let jsonuserslists = await userslists.json();
  // Fetch all vendors lists
  let vendorslists = await fetch(`${url}api/v1/admin/fetch/vendors`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //   host : 'url',
      Authorization: localStorage.getItem("Authorization"),
    },
  });
  let jsonvendorslists = await vendorslists.json();
  // Fetch all services lists
  let serviceslists = await fetch(`${url}api/v1/admin/fetch/services`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //   host : 'url',
      Authorization: localStorage.getItem("Authorization"),
    },
  });
  let jsonserviceslists = await serviceslists.json();
  // Reviews
  // let review = await fetch(`${url}api/v1/business/reviews/${JSON.parse(user)._id}`, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: localStorage.getItem("Authorization"),
  //   },
  // })
  // let reviewresponse = await review.json()
  // console.log(reviewresponse)
  // Ratings
  // let rating = await fetch(`${url}api/v1/business/ratings/${JSON.parse(user)._id}`, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: localStorage.getItem("Authorization"),
  //   },
  // })
  // let ratingresponse = await rating.json()
  document.querySelector("body").innerHTML = `
    <div class="dashboard-header" style='position : fixed; top: 0; width: 100%'>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-10 col-lg-10 col-md-8 col-sm-12 col-6">
                <div class="header-logo">
                    <a onclick='vendorDashboard()' class="font-weight-bold h3 " style="color: #433166;">Jolly Party</a>
                </div>
            </div>
            <div class="col-xl-2 col-lg-2 text-right col-md-4 col-sm-12 col-6">
                <div class="user-vendor">
                    <div class="dropdown">
                        <a class="dropdown-toggle" id="dropdownMenuButton" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       <span class="user-icon">  <img src="images/dashboard-profile.jpg" alt="" class="rounded-circle mb10"></span><span class="user-vendor-name">${
                         JSON.parse(admin).username
                       } </span>
                    </a>
                        <div class=" dashboard-dropdown-menu dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" onclick='return adminDashboard()'>Dashboard </a>
                        <a class="dropdown-item" onclick='return adminprofileupdate()'>My Profile </a>
                            <a class="dropdown-item" onClick='adminlogout()'>Log Out</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
    <div class="dashboard-content mx-auto">
        <div class="container px-5">
            <div class="row mt80">
                <div class="col-xl-10 col-lg-10 col-md-9 col-sm-12 col-12">
                    <div class="dashboard-page-header">
                        <h3 class="dashboard-page-title">Hi, ${
                          JSON.parse(admin).username
                        }.</h3>
                        <p class="d-block">Here’s what’s happening with your business today.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div class="card card-summary">
                        <div class="card-body">
                            <div class="float-left">
                            <div class="summary-count">${
                              jsonbusinessrequests.count
                            }</div>
                            <p>Requests</p>
                        </div>
                              <div class="summary-icon"><i class="icon-021-love-1"></i></div>
                        </div>
                        <div onClick='requestDashboard()' class="card-footer text-center"><a>View All</a></div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div class="card card-summary">
                        <div class="card-body">
                            <div class="float-left">
                            <div class="summary-count">${
                              jsonbusinesslists.count
                            }</div>
                            <p>Posted Business</p>

                        </div>
                          <div class="summary-icon"><i class="icon-004-chat"></i></div>
                        </div>
                        <div class="card-footer text-center"><a href="#">View All</a></div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div class="card card-summary">
                        <div class="card-body">
                            <div class="float-left">
                            <div class="summary-count">${
                              jsonuserslists.length
                            }</div>
                            <p>Users</p>
                        </div>
                          <div class="summary-icon"><i class="icon-004-chat"></i></div>
                        </div>
                        <div class="card-footer text-center"><a href="#">View All</a></div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div class="card card-summary">
                        <div class="card-body">
                            <div class="float-left">
                            <div class="summary-count">${
                              jsonvendorslists.length
                            }</div>
                            <p>Vendors</p>
                        </div>
                          <div class="summary-icon"><i class="icon-004-chat"></i></div>
                        </div>
                        <div class="card-footer text-center"><a href="#">View All</a></div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div class="card card-summary">
                        <div class="card-body">
                            <div class="float-left">
                            <div class="summary-count">${
                              jsonserviceslists.length
                            }</div>
                            <p>Services</p>
                        </div>
                          <div class="summary-icon"><i class="icon-004-chat"></i></div>
                        </div>
                        <div class="card-footer text-center"><a href="#">View All</a></div>
                    </div>
                </div>
            </div>
        </div>
                </div>
            </div>
        </div>
    </div>
  </div>
    `;
};
let check = async () => {
  const role = localStorage.getItem("user");
  if (localStorage.getItem("Authorization") && localStorage.getItem("user")) {
    if (JSON.parse(role).role === "vendor") {
      return vendorDashboard(JSON.parse(localStorage.getItem("admin")));
    }
    if (JSON.parse(role).role === "user") {
      return clientDashboard();
    }
    if (JSON.parse(role).role === "admin") {
      return adminDashboard();
    }
  }
};
let adminprofileupdate = async (e) => {
    let user = localStorage.getItem("user");
    const id = JSON.parse(user)
    console.log(id._id)
    const response = await fetch(`${url}api/v1/admin/profile/${id._id}`);
    const jsonResponse = await response.json();
    console.log(jsonResponse)
    let data = jsonResponse.data;
  //   console.log(data)
    document.querySelector("body").innerHTML = `
      <div class="dashboard-header" style='position : fixed; top: 0; width: 100%'>
      <div class="container-fluid">
          <div class="row">
              <div class="col-xl-10 col-lg-10 col-md-8 col-sm-12 col-6">
                  <div class="header-logo">
                      <a onclick='vendorDashboard()' class="font-weight-bold h3 " style="color: #433166;">Jolly Party</a>
                  </div>
              </div>
              <div class="col-xl-2 col-lg-2 text-right col-md-4 col-sm-12 col-6">
                  <div class="user-vendor">
                      <div class="dropdown">
                          <a class="dropdown-toggle" id="dropdownMenuButton" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span class="user-icon">  <img src="images/dashboard-profile.jpg" alt="" class="rounded-circle mb10"></span><span class="user-vendor-name">${
                            JSON.parse(user).username
                          }</span>
                      </a>
                          <div class=" dashboard-dropdown-menu dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item" onclick='return vendorDashboard()'>Dashboard </a>
                          <a class="dropdown-item" onclick='return requestDashboard()'>Requests </a>
                              <a class="dropdown-item" onclick='return profileupdate()'>My Profile </a>
                              <a class="dropdown-item" onclick='return businesslist()'>List Your Business</a>
                              <a class="dropdown-item" onClick='logout()'>Log Out</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
      <div class="row px-5 mt100">
      <a name="profile"></a>
      <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12">
          <div class="dashboard-page-header">
              <h3 class="dashboard-page-title ">My Profile</h3>
              <p>Change your profile image and information edit and save.</p>
          </div>
      </div>
  </div>
  <div class="row px-5">
      <div class="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
          <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Profile</a>
              <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Password Change</a>
          </div>
      </div>
      <div class="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
          <div class="tab-content" id="v-pills-tabContent">
              <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                  <div class="card">
                      <div class="card-header">Profile</div>
                      <div class="card-body">
                          <form id='updateProfile'>
                          <p class='text-danger' id='UPerror'> </p>
                              <!-- Form Name -->
                              <div class="profile-upload-img">
                                  <div class="row">
                                      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                                          <div id="image-preview">
                                          </div>
                                          <input type="file" name="image" id="image-upload" class="upload-profile-input">
                                      </div>
                                  </div>
                              </div>
                              <div class="personal-form-info">
                                  <div class="row">
                                      <!-- Text input-->
                                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                          <div class="form-group">
                                              <label class="control-label" for="username">User Name</label>
                                              <input id="username" name="username" type="email" placeholder="" value='${
                                                data.username
                                              }' class="form-control ">
                                          </div>
                                      </div>
                                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                          <div class="form-group">
                                              <label class="control-label" for="email">Email</label>
                                              <input id="email" name="email" type="text" placeholder="Price" value='${
                                                data.email
                                              }' class="form-control ">
                                          </div>
                                      </div>
                      </div>
                              <div class="form-group">
                                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <button class="btn btn-default" type="submit">Update Here</button>
                      </div>
                          </div>
                          </form>
                      </div>
                  </div>
              </div>
              <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                  <div class="card">
                      <div class="card-header">Password Change</div>
                      <div class="card-body">
                          <form class="row" id='modifyPassword'>
                          <p class='text-danger px-5' id='MPerror'> <span id='timerrun'></span></p>
                              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                  <div class="form-group">
                                      <label class="control-label" for="password">Current Password</label>
                                      <input id="password" name="password" type="password" placeholder="Current Password" class="form-control ">
                                  </div>
                              </div>
                              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                  <div class="form-group">
                                      <label class="control-label" for="newPassword">New Password</label>
                                      <input id="newPassword" name="newPassword" type="password" placeholder="New Password" class="form-control ">
                                  </div>
                              </div>
                              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                  <div class="form-group">
                                      <label class="control-label" for="newConfirmPassword">Retype Password</label>
                                      <input id="newConfirmPassword" name="newConfirmPassword" type="password" placeholder="Confirm New Password" class="form-control ">
                                  </div>
                              </div>
                              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                  <button class="btn btn-default" type="submit">Save Changes</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
      `;
    document
      .querySelector("#deleteAccount")
      .addEventListener("submit", async (e) => {
        let DAerror = document.querySelector("#DAerror");
        e.preventDefault();
        let id = JSON.parse(localStorage.getItem("user"))._id;
        let data = {
          user: id,
        };
        let response = await fetch(`${url}api/v1/users/logout`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("Authorization"),
          },
          body: JSON.stringify(data),
        });
        let res = await response.json();
        if (res.error) {
          return (DAerror.innerHTML = res.error);
        } else {
          setTimeout(() => {
            localStorage.removeItem("Authorization");
            localStorage.removeItem("user");
            localStorage.setItem("jollyparty", JSON.stringify({}));
            login();
          }, 3000);
          return (DAerror.innerHTML = "Account Deleted successfully.");
        }
      });
    document
      .querySelector("#updateProfile")
      .addEventListener("submit", async (e) => {
        let error = document.querySelector("#UPerror");
        e.preventDefault();
        const businessData = {
          email: document.querySelector("#email").value,
          price: document.querySelector("#price").value,
          primaryContact: document.querySelector("#primaryContact").value,
          facebookurl: document.querySelector("#facebookurl").value,
          youtubeurl: document.querySelector("#youtubeurl").value,
          instagramurl: document.querySelector("#instagramurl").value,
          twitter: document.querySelector("#twitter").value,
          description: document.querySelector("#description").value,
        };
        let result = await fetch(
          `${url}api/v1/business/${JSON.parse(user)._id}`,
          {
            method: "PUT",
            //   mode : 'no-cors',
            headers: {
              "Content-Type": "application/json",
              //   host : 'url',
              Authorization: localStorage.getItem("Authorization"),
            },
            body: JSON.stringify(businessData),
          }
        );
        let res = await result.json();
        console.log(res);
        if (res.error) {
          return (Berror.innerHTML = res.error);
        } else {
          return (Berror.innerHTML = "Updated Profile successfully.");
        }
      });
    document
      .querySelector("#modifyPassword")
      .addEventListener("submit", async (e) => {
        let error = document.querySelector("#MPerror");
        e.preventDefault();
        const passwordUpdate = {
          password: document.querySelector("#password").value,
          newPassword: document.querySelector("#newPassword").value,
          newConfirmPassword: document.querySelector("#newConfirmPassword").value,
        };
        let result = await fetch(
          `${url}api/v1/users/modify-password/${JSON.parse(user)._id}`,
          {
            method: "PUT",
            //   mode : 'no-cors',
            headers: {
              "Content-Type": "application/json",
              //   host : 'url',
              Authorization: localStorage.getItem("Authorization"),
            },
            body: JSON.stringify(passwordUpdate),
          }
        );
        let res = await result.json();
        console.log(res);
        if (res.error) {
          return (MPerror.innerHTML = res.error);
        } else {
          const count = 5;
          setTimeout(() => {
            localStorage.removeItem("Authorization");
            localStorage.removeItem("user");
            login();
          }, 5000);
          return (MPerror.innerHTML =
            "Password Updated Successfully. Signing off. Bye Bye !..");
        }
      });
  };
let adminregister = (e) => {
  document.querySelector("body").innerHTML = `
    <div class="header header-transparent fixed-top">
    <div class="container">
        <div class="row">
            <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                <!-- header-logo -->
                <div class="header-logo">
                    <a href="index.html" class="text-white h4"><span style='color : #433166'>Jolly Party</span></a>
                </div>
                <!-- /.header-logo -->
            </div>
            <div class="col-xl-4 col-lg-4 text-right col-md-2 col-sm-12 col-12 d-none d-xl-block d-lg-block">
                <!-- header-btn -->
                <div class="header-btn mr-5 ">
                    <a class="btn btn-primary btn-sm mr-1 text-dark" id="login-form" onClick='adminlogin()'>Login</a>
                    <a class="btn btn-primary btn-sm mr-5 text-dark" id="register-form" onClick='adminregister()'>Register</a>
                    <!-- Button trigger modal -->
                </div>
                <!-- /.header-btn -->
            </div>
        </div>
    </div>
  </div>
      <div class=" vendor-form">
          <div class="container">
              <div class="row mt-5">
                  <div class="offset-xl-3 col-xl-6 offset-lg-3 col-lg-6 col-md-12 col-sm-12 col-12  ">
                      <div class="vendor-head">
                          <a href="index.html" class='h1 text-center'><span style='color : #433166'>Jolly<span> <span class='text-warning'>Party<span></a>
                      </div>
                      <!-- /.vendor title -->
                      <div class='card'>
                      <div class='card-header'><h2>Register</h2></div>
                      <div class='card-body'>
                      <form id='RegisterForm' method='POST' action='#'>
                          <p class='text-warning text-center' id='ARerror'>&nbsp;</p>
                          <div class="row">
                              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  <!-- Text input-->
                                  <div class="form-group">
                                      <label class="control-label sr-only" for="username"></label>
                                      <input id="username" type="text" name="username" placeholder="User Name" class="form-control" required>
                                  </div>
                              </div>
                              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  <!-- Text input-->
                                  <div class="form-group">
                                      <label class="control-label sr-only" for="email"></label>
                                      <input id="email" type="text" name="email" placeholder="Email" class="form-control" required>
                                  </div>
                              </div>
                              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  <!-- Text input-->
                                  <div class="form-group service-form-group">
                                      <label class="control-label sr-only" for="password"></label>
                                      <input id="password" type="password" placeholder="Password" class="form-control" required>
                                  </div>
                              </div>
                              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  <!-- select -->
                                  <div class="form-group">
                                      <select class="wide mb20 form-control" id='role'>
                                          <option value="admin">Admin</option>
                                      </select>
                                  </div>
                              </div>
                              <!-- buttons -->
                              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  <input type='submit' value='SIGN UP' class='btn btn-default text-warning'>
                              </div>
                          </div>
                          <p class='text-dark mt-3'>Don't have an account? <a style='cursor : pointer;' id="login-form" class='text-warning' onClick='login()'>click Here</a> to Login.</p>
                      </form>
                      </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    `;
  // Register field validation
  document
    .querySelector("#RegisterForm")
    .addEventListener("submit", async (e) => {
      let ARerror = document.querySelector("#ARerror");
      e.preventDefault();
      const data = {
        username: document.querySelector("#username").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
        role: document.querySelector("#role").value,
      };
      const registerResponse = await fetch(`${url}api/v1/admin/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const registerJsonresponse = await registerResponse.json();
      if (registerJsonresponse.error) {
        return (ARerror.innerHTML = registerJsonresponse.error);
      }
      return (ARerror.innerHTML = "Registered Successfully.");
    });
};
let adminlogin = (e) => {
  check();
  document.querySelector("body").innerHTML = `
    <div class="header header-transparent fixed-top">
    <div class="container">
        <div class="row">
            <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                <!-- header-logo -->
                <div class="header-logo">
                    <a href="index.html" class="text-white h4"><span style='color : #433166'>Jolly Party</span></a>
                </div>
                <!-- /.header-logo -->
            </div>
            <div class="col-xl-4 col-lg-4 text-right col-md-2 col-sm-12 col-12 d-none d-xl-block d-lg-block">
                <!-- header-btn -->
                <div class="header-btn mr-5 ">
                <a class="btn btn-primary btn-sm mr-1 text-dark" id="login-form" onClick='adminlogin()'>Login</a>
                <a class="btn btn-primary btn-sm mr-5 text-dark" id="register-form" onClick='adminregister()'>Register</a>
                    <!-- Button trigger modal -->
                </div>
                <!-- /.header-btn -->
            </div>
        </div>
    </div>
  </div>
      <div class=" vendor-form">
          <div class="container">
              <div class="row mt-5">
                  <div class="offset-xl-3 col-xl-6 offset-lg-3 col-lg-6 col-md-12 col-sm-12 col-12  ">
                      <div class="vendor-head">
                          <a href="index.html" class='h1 text-center'><span style='color : #433166'>Jolly<span> <span class='text-warning'>Party<span></a>
                      </div>
                      <!-- /.vendor title -->
                      <div class='card'>
                      <div class='card-header'><h2>Login</h2></div>
                      <div class='card-body'>
                      <form id='LoginForm' method='POST' action='#'>
                          <p class='text-warning text-center' id='Lerror'>&nbsp;</p>
                          <div class="row">
                              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  <!-- Text input-->
                                  <div class="form-group">
                                      <label class="control-label sr-only" for="email"></label>
                                      <input id="email" type="text" name="email" placeholder="Email" value='' class="form-control" required>
                                  </div>
                              </div>
                              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  <!-- Text input-->
                                  <div class="form-group">
                                      <label class="control-label sr-only" for="password"></label>
                                      <input id="password" type="password" name="password" placeholder="Password" value='' class="form-control" required>
                                  </div>
                              </div>
                              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  <!-- select -->
                                  <div class="form-group">
                                      <select class="wide mb20 form-control" id='role'>
                                          <option value="admin">Admin</option>
                                      </select>
                                  </div>
                              </div>
                              <!-- buttons -->
                              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
                                  <input type='submit' value='LOGIN' class='btn btn-default text-warning'>
                              </div>
                              <input type='checkbox' value='check' id='check' class='mx-3 mt-1'> <p class='text-danger'>Remember Me</p>
                              <a class='text-danger px-3 w-100 font-weight-lighter' onClick='forgotpassword()'>Forgot Password</a>
                          </div>
                          <p class='text-dark mt-3'>Don't have an account? <a style='cursor : pointer;' id="register-form" class='text-warning' onClick='register()'>click Here</a> to register.</p>
                      </form>
                      </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- social-media-section -->
      <div class="social-media-block" style='position : fixed; bottom : 58px; width : 100%' >
          <div class="container">
              <div class="row">
                  <div class="col-xl-7 col-lg-7 col-md-6 col-sm-6 col-12">
                      <h3 class="text-white mb0 mt10">Would you like to connect with us</h3>
                  </div>
                  <div class="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12 text-right">
                      <div class="social-icons">
                          <a href="#" class="icon-square"><i class="fab fa-facebook-f"></i></a>
                          <a href="#" class="icon-square"><i class="fab fa-twitter"></i> </a>
                          <a href="#" class="icon-square"><i class="fab fa-google-plus-g"></i></a>
                          <a href="#" class="icon-square"><i class="fab fa-instagram"></i></a>
                          <a href="#" class="icon-square"><i class="fab fa-youtube"></i></a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- /.social-media-section -->
      <!-- footer-section -->
      <div class="footer py-3" style='position : fixed; bottom : 0; width : 100%' >
          <div class="container text-center py-0">
              <p class="text-center">All rights reserved &reg; Jolly Party &copy; 2020</p>
          </div>
      </div>
    `;
  // Login fields validation
  document.querySelector("#LoginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    let error = document.querySelector("#Lerror");

    const loginData = {
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
      role: document.querySelector("#role").value,
    };
    const token = await fetch(`${url}api/v1/admin/login`, {
      method: "POST",
      //   mode : 'no-cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    const jsonToken = await token.json();
    console.log(jsonToken);
    if (jsonToken.error || jsonToken.message) {
      return (error.innerHTML = `${jsonToken.message || jsonToken.error}`);
    } else {
      localStorage.setItem("Authorization", jsonToken.token);
      localStorage.setItem("user", JSON.stringify(jsonToken.admin));
      check();
      return (error.innerHTML = "LoggedIn Successfully");
    }
  });
};
let adminlogout = async (e) => {
  await fetch(`${url}api/v1/users/logout/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("Authorization"),
    },
  });
  localStorage.removeItem("user");
  localStorage.removeItem("Authorization");
  adminlogin();
};
