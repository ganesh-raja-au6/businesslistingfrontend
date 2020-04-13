// var url = "https://salty-castle-33988.herokuapp.com/";
var url = "http://localhost:8000/";
// var frontendurl = "http://127.0.0.1:5500/";

let check = async () => {
  const role = localStorage.getItem("user");
  if (localStorage.getItem("Authorization") && localStorage.getItem("user")) {
    if (JSON.parse(role).role === "vendor") {
      return vendorDashboard(JSON.parse(localStorage.getItem("user")));
    }
    if (JSON.parse(role).role === "user") {
      return clientDashboard();
    }
    if (JSON.parse(role).role === "admin") {
      return adminDashboard();
    }
  }
};
let requestDashboard = async () => {
  const user = localStorage.getItem("user");
  // Orders
  let order = await fetch(
    `${url}api/v1/business/orders/${JSON.parse(user)._id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("Authorization"),
      },
    }
  );
  let response = await order.json();
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
  ).innerHTML = `<a class="btn btn-outline-pink btn-xs mb-5 mx-5 px-4 py-3" onClick='vendorDashboard()'>Dashboard</a>`;
  maindiv.className += "card request-list-table table-responsive mt-5";
  table.className += "table mt-5";
  document.querySelector("body").appendChild(maindiv);
  maindiv.appendChild(table);
  table.appendChild(thead);
  thead.appendChild(theadtr);
  thead.appendChild(th).innerText = "Email";
  thead.appendChild(th1).innerText = "Event";
  thead.appendChild(th2).innerText = "Date";
  thead.appendChild(th3).innerText = "Location";
  thead.appendChild(th4).innerText = "Budget";
  thead.appendChild(th5).innerText = "Mobile";
  thead.appendChild(th6).innerText = "Reject";
  let tbody = document.createElement("tbody");
  table.appendChild(tbody);
  for (let elem of response.data) {
    console.log(elem.email);
    tbody.innerHTML += `
            <tr>
            <td>${elem.email}</td>
            <td>${elem.event}</td>
            <td>${elem.date}</td>
            <td>${elem.location}</td>
            <td>${elem.price}</td>
            <td>${elem.primaryContact}</td>
            <td><a href="#" class="btn btn-outline-pink btn-xs">delete</a></td>
        `;
  }
};
let verifyForgotPassword = () => {
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
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <!-- navigations -->
                <div id="navigation" class="pl-2">
                    <ul>
                        <li><a class='text-danger' href="#" title="#">Home</a></li>
                        <li><a class='text-danger' href="#" title="#">Vendors</a></li>
                        <li><a class='text-danger' href="#">Careers</a></li>
                        <li><a class='text-danger' href="#">Portfolio</a></li>
                        <li><a class='text-danger' href="#">About</a></li>
                        <li><a class='text-danger' href="#">Contact</a></li>
                        <li><a class='text-danger' href="">My Account</a></li>
                    </ul>
                </div>
                <!-- /.navigations -->
            </div>
            <div class="col-xl-4 col-lg-4 text-right col-md-2 col-sm-12 col-12 d-none d-xl-block d-lg-block">
                <!-- header-btn -->
                <div class="header-btn mr-5 ">
                <a class="btn btn-primary btn-sm mr-1 text-dark" id="login-form" onClick='login()'>Login</a>
                <a class="btn btn-primary btn-sm mr-5 text-dark" id="register-form" onClick='register()'>Register</a>
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
                      <div class='card-header'><h2>Reset Password</h2></div>
                      <div class='card-body'>
                      <form id='OTPVerifyPassword' method='POST' action='#'>
                          <p class='text-warning text-center' id='OTPV'>&nbsp;</p>
                          <div class="row">
                              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  <!-- Text input-->
                                  <div class="form-group">
                                      <label class="control-label sr-only" for="passwordToken"></label>
                                      <input id="passwordToken" type="text" name="passwordToken" placeholder="Enter OTP" value='bavdz4nk8udhx5e' class="form-control" required>
                                  </div>
                              </div>
                              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  <!-- Text input-->
                                  <div class="form-group">
                                      <label class="control-label sr-only" for="password"></label>
                                      <input id="password" type="password" name="password" placeholder="Password" value='bavdz4nk8udhx5e' class="form-control" required>
                                  </div>
                              </div>
                              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  <!-- Text input-->
                                  <div class="form-group">
                                      <label class="control-label sr-only" for="cpassword"></label>
                                      <input id="cpassword" type="password" name="cpassword" placeholder="Verify Password" value='bavdz4nk8udhx5e' class="form-control" required>
                                  </div>
                              </div>
                              <!-- buttons -->
                              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
                                  <input type='submit' value='Reset Password' class='btn btn-default text-warning'>
                              </div>
                              <a class='text-danger px-3 font-weight-lighter' onClick='forgotpassword()'>Forgot Password</a>
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
  document
    .querySelector("#OTPVerifyPassword")
    .addEventListener("submit", async (e) => {
      let OTPV = document.querySelector("#OTPV");
      e.preventDefault();
      const data = {
        password: document.querySelector("#password").value,
      };
      let response = await fetch(`${url}api/v1/users/create-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const jsonResponse = await response.json();
      if (jsonResponse.error) {
        return (OTPV.innerHTML = jsonResponse.error);
      } else {
        setTimeout(() => {
          login();
        }, 3000);
        return (OTPV.innerHTML = "Password Changed Successfully.");
      }
    });
};
let forgotpassword = () => {
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
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <!-- navigations -->
                    <div id="navigation" class="pl-2">
                        <ul>
                            <li><a class='text-danger' href="#" title="#">Home</a></li>
                            <li><a class='text-danger' href="#" title="#">Vendors</a></li>
                            <li><a class='text-danger' href="#">Careers</a></li>
                            <li><a class='text-danger' href="#">Portfolio</a></li>
                            <li><a class='text-danger' href="#">About</a></li>
                            <li><a class='text-danger' href="#">Contact</a></li>
                            <li><a class='text-danger' href="">My Account</a></li>
                        </ul>
                    </div>
                    <!-- /.navigations -->
                </div>
                <div class="col-xl-4 col-lg-4 text-right col-md-2 col-sm-12 col-12 d-none d-xl-block d-lg-block">
                    <!-- header-btn -->
                    <div class="header-btn mr-5 ">
                        <a class="btn btn-primary btn-sm mr-1 text-dark" id="login-form" onclick='login()'>Login</a>
                        <a class="btn btn-primary btn-sm mr-5 text-dark" id="register-form" onclick='register()'>Register</a>
                        <!-- Button trigger modal -->
                    </div>
                    <!-- /.header-btn -->
                </div>
            </div>
        </div>
    </div>
    <div class="content">
    <div class="container">
        <div class="row mt-5">
            <div class="offset-xl-3 col-xl-6 offset-lg-3 col-lg-6 col-md-12 col-sm-12 col-12">
                <div class="mb30 card">
                    <div class="card-body">
                        <h1>Lost Password</h1>
                        <p>Follow these simple steps to reset your account:</p>
                        <ul class="list-unstyled mb30">
                            <li>1. Enter your email address</li>
                            <li>2. Wait for your recovery details to be sent.</li>
                            <li>3. Follow as given instructions in your mail account.</li>
                        </ul>
                        <form id='forgotPassword'>
                        <p class='text-danger px-5' id='FPerror'> Hi</p>
                            <div class="forgot-form">
                                <div class="form-group">
                                    <label class="control-label" for="email">Email</label>
                                    <input id="email" type="email" name="email" placeholder="Email" class="form-control" required>
                                </div>
                                <input type="submit" class="btn btn-default btn-block" value='Get New Password'>
                            </div>
                        </form>
                        <div class="mt30">
                            <a class="btn-primary-link mr-3" onClick='login()'>Login </a> <a onClick='register()' class="btn-primary-link">Register </a>
                        </div>
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
  document
    .querySelector("#forgotPassword")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      let FPerror = document.querySelector("#FPerror");
      let emailData = { email: document.querySelector("#email").value };
      let response = await fetch(`${url}api/v1/users/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });
      let jsonResponse = await response.json();
      if (jsonResponse.error) {
        return (FPerror.innerHTML = jsonResponse.error);
      } else {
        setTimeout(() => {
          login();
        }, 3000);
        return (FPerror.innerHTML = "Password successfully sent to email.");
      }
    });
};
let ratings = async () => {
  let id = JSON.parse(localStorage.getItem("user"))._id;
  let rating = await fetch(`${url}api/v1/business/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer Token",
    },
  });
  // console.log(rating)
};
let businesslist = async (e) => {
  let user = localStorage.getItem("user");
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
                        <a class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
    <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12">
        <div class="dashboard-page-header">
            <h3 class="dashboard-page-title">Add New Listing</h3>
            <p>Lists present multiple line items vertically as a single continuous element.</p>
        </div>
    </div>
</div>
<div class="card">
    <div class="card-header"> <h4 class="mb0">About Listing</h4></div>
    <div class="">
        <form class="px-5" id='businessInfo'>
        <p id='Berror'> </p>
            <!-- Form Name -->
            <div class="venue-form-info card-body">
                <div class="row">
                    <!-- Text input-->
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="form-group">
                            <label class="control-label" for="name">Title</label>
                            <input id="name" name="name" type="text" placeholder="Business Title" class="form-control ">
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <!-- Select Basic -->
                        <div class="form-group">
                            <label class="control-label" for="Category">Category</label>
                            <select class="wide" id="category">
                                <option value="">Select Category</option>
                                <option value="Photographer">Photographer</option>
                                <option value="Conventions">Conventions</option>
                                <option value="Florist">Florist</option>
                                <option value="Cake">Cake</option>
                                <option value="Catering">Catering</option>
                                <option value="Dress">Dress</option>
                                <option value="Jewellery">Jewellery</option>
                                <option value="DJ On Hire">DJ On Hire</option>
                                <option value="Dance Groups">Dance Groups</option>
                                  <option value="Dhol Players">Dhol Players</option>
                                  <option value="Event Organisers">Event Organisers</option>
                                  <option value="Flower Decorators">Flower Decorators</option>
                                  <option value="Generator and Power Backup">Generator and Power Backup</option>
                                  <option value="Guest Houses">Guest Houses</option>
                                  <option value="Horses on Hire">Horses on Hire</option>
                                  <option value="Juice Services">Juice Services</option>
                                  <option value="Mehandi Artists">Mehandi Artists</option>
                                  <option value="Pandits">Pandits</option>
                                  <option value="Pan Suppliers">Pan Suppliers</option>
                                  <option value="Wedding Cards">Wedding Cards</option>
                                  <option value="Sound System On Hire">Sound System On Hire</option>
                                  <option value="Grand Entries">Grand Entries</option>
                                  <option value="Bridal Makeup">Bridal Makeup</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label class="control-label" for="email">Business Email</label>
                            <input id="email" name="email" type="email" placeholder="Email" class="form-control ">
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label class="control-label" for="price">Price <small>(Start From)</small></label>
                            <input id="price" name="price" type="text" placeholder="Price" class="form-control ">
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label class="control-label" for="primaryContact">Mobile Number</label>
                            <input id="primaryContact" name="primaryContact" type="text" placeholder="Mobile Number" class="form-control ">
                        </div>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="form-group">
                            <label class="control-label" for="address">Address </label>
                            <input id="address" name="address" type="text" placeholder="Address" class="form-control ">
                        </div>
                    </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label class="control-label" for="city">City </label>
                            <input id="city" name="city" type="text" placeholder="City" class="form-control ">
                    </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label class="control-label" for="pincode">Postcode</label>
                            <input id="pincode" name="pincode" type="text" placeholder="Postal Code" class="form-control">
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label class="control-label" for="dno">D.No</label>
                            <input id="dno" name="dno" type="text" placeholder="D.NO" class="form-control">
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label class="control-label" for="district">District</label>
                            <input id="district" name="district" type="text" placeholder="District" class="form-control">
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <!-- Select Basic -->
                        <div class="form-group">
                            <label class="control-label" for="state">State</label>
                            <input id="state" name="state" type="text" placeholder="State" class="form-control">
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <!-- Select Basic -->
                        <div class="form-group">
                            <label class="control-label" for="country">Country</label>
                            <input id="country" name="country" type="text" placeholder="Country" class="form-control">
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label class="control-label" for="area">Area </label>
                            <input id="area" name="area" type="text" placeholder="Area" class="form-control ">
                        </div>
                        <div class="form-group">
                            <label class="control-label" for="street">Street</label>
                            <input id="street" name="street" type="text" placeholder="Street" class="form-control">
                        </div>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="form-group">
                            <label class="control-label" for="summernote">Description </label>
                            <textarea class="form-control" id="description" name="description" rows="6" placeholder="Write a brief not about your business."></textarea>
                        </div>
                    </div>
                    <div class="social-form-info card-body border-top">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h3>Social Media </h3>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label class="control-label" for="facebookurl">Facebook</label>
                            <input id="facebookurl" name="facebookurl" type="url" placeholder="https://www.facebook.com" class="form-control ">
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label class="control-label" for="twitter">Twitter</label>
                            <input id="twitter" name="twitter" type="url" placeholder="https://www.twitter.com" class="form-control">
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label class="control-label" for="instagramurl">Instagram</label>
                            <input id="instagramurl" name="instagramurl" type="url" placeholder="https://www.instagram.com" class="form-control">
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label class="control-label" for="youtubeurl">Youtube</label>
                            <input id="youtubeurl" name="youtubeurl" type="url" placeholder="https://www.youtube.com" class="form-control">
                        </div>
                    </div>
                </div>
            </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <button class="btn btn-default" type="submit">Submit Here</button>
                    </div>
                </div>
            </div>
            </form>
            <form id='bannerImage' method='POST' enctype='multipart/form-data'>
            <div class="dashboard-venue-gallery card-body border-top">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h3>Add Banner Image</h3>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <!-- File Button -->
                        <div class="form-group">
                            <label class="control-label" for="banner">Browse Image</label>
                            <input id="banner" name="banner" class="btn btn-primary btn-block" type="file">
                        </div>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                                <div class="gallery-upload-img">
                                    <img src="images/gallery-thumb.html" alt="" class="img-fluid">
                                    <span class="delete-gallery-img"> <a href="#"><i class="fa  fa-times-circle"></i></a></span>
                                </div>
                            </div>
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <button class="btn btn-default" type="submit">Submit Image</button>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
            <form id='galleryImage'>
            <div class="dashboard-venue-gallery card-body border-top">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h3>Add Gallery</h3>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <!-- File Button -->
                        <div class="form-group">
                            <label class="control-label" for="filebutton">Browse Image</label>
                            <input id="filebutton" name="filebutton" class="btn btn-primary btn-block" type="file">
                        </div>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                                <div class="gallery-upload-img">
                                    <img src="images/gallery-thumb.html" alt="" class="img-fluid">
                                    <span class="delete-gallery-img"> <a href="#"><i class="fa  fa-times-circle"></i></a></span>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                                <div class="gallery-upload-img">
                                    <img src="images/gallery-thumb.html" alt="" class="img-fluid">
                                    <span class="delete-gallery-img"> <a href="#"><i class="fa  fa-times-circle"></i></a></span>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                                <div class="gallery-upload-img">
                                    <img src="images/gallery-thumb.html" alt="" class="img-fluid">
                                    <span class="delete-gallery-img"> <a href="#"><i class="fa  fa-times-circle"></i></a></span>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                                <div class="gallery-upload-img">
                                    <img src="images/gallery-thumb.html" alt="" class="img-fluid">
                                    <span class="delete-gallery-img"> <a href="#"><i class="fa  fa-times-circle"></i></a></span>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                                <div class="gallery-upload-img">
                                    <img src="images/gallery-thumb.html" alt="" class="img-fluid">
                                    <span class="delete-gallery-img"> <a href="#"><i class="fa  fa-times-circle"></i></a></span>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                                <div class="gallery-upload-img">
                                    <img src="images/gallery-thumb.html" alt="" class="img-fluid">
                                    <span class="delete-gallery-img"> <a href="#"><i class="fa  fa-times-circle"></i></a></span>
                                </div>
                            </div>
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <button class="btn btn-default" type="submit">Submit Image</button>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </span>
    `;
  // Business list
  document
    .querySelector("#businessInfo")
    .addEventListener("submit", async (e) => {
      let error = document.querySelector("#Berror");
      let id = JSON.parse(user)._id;
      e.preventDefault();
      const businessData = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        category: document.querySelector("#category").value,
        city: document.querySelector("#city").value,
        state: document.querySelector("#state").value,
        pincode: document.querySelector("#pincode").value,
        area: document.querySelector("#area").value,
        dno: document.querySelector("#dno").value,
        street: document.querySelector("#street").value,
        address: document.querySelector("#address").value,
        district: document.querySelector("#district").value,
        price: document.querySelector("#price").value,
        primaryContact: document.querySelector("#primaryContact").value,
        facebookurl: document.querySelector("#facebookurl").value,
        youtubeurl: document.querySelector("#youtubeurl").value,
        instagramurl: document.querySelector("#instagramurl").value,
        twitter: document.querySelector("#twitter").value,
        description: document.querySelector("#description").value,
        user: id,
      };

      console.log(document.querySelector("#description").value);
      let result = await fetch(`${url}api/v1/business/`, {
        method: "POST",
        //   mode : 'no-cors',
        headers: {
          "Content-Type": "application/json",
          //   host : 'url',
          Authorization: localStorage.getItem("Authorization"),
        },
        body: JSON.stringify(businessData),
      });
      let res = await result.json();
      console.log(res);
      if (result.error) {
        return (
          (Berror.innerHTML = result.error) ||
          "Youre not authorized to create multiple businesses, kindly contact admin."
        );
      }
    });
  // Banner Image
  document
    .querySelector("#bannerImage")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const formdata = new FormData();
      formdata.append("banner", document.querySelector("#banner").files[0]);
      let data = {
        banner: document.querySelector("#banner").files[0],
      };
      console.log(data);
      let result = await fetch(
        `${url}api/v1/business/image_banner/${JSON.parse(user)._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            //   host : 'url',
            Authorization: localStorage.getItem("Authorization"),
          },
          body: JSON.stringify(formdata),
        }
      );
      console.log(JSON.parse(user)._id);
      let res = await result.json();
      console.log(res);
    });
};
let profileupdate = async (e) => {
  let user = localStorage.getItem("user");
  const id = JSON.parse(user);
  const response = await fetch(`${url}api/v1/business/profile/${id._id}`);
  const jsonResponse = await response.json();

  let data = jsonResponse.data;
  if (jsonResponse.error) {
    data = {
      email: undefined,
      price: undefined,
      primaryContact: undefined,
      description: undefined,
      facebookurl: undefined,
      twitter: undefined,
      instagramurl: undefined,
      youtubeurl: undefined,
    };
  }
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
            <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Delete Account</a>
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
                                            <label class="control-label" for="email">Email</label>
                                            <input id="email" name="email" type="email" placeholder="" value='${
                                              data.email
                                            }' class="form-control ">
                                        </div>
                                    </div>
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label class="control-label" for="price">Price</label>
                                            <input id="price" name="price" type="text" placeholder="Price" value='${
                                              data.price
                                            }' class="form-control ">
                                        </div>
                                    </div>
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label class="control-label" for="primaryContact">Mobile Number </label>
                                        <input type='text' class="form-control" id="primaryContact" name="primaryContact" value='${
                                          data.primaryContact
                                        }' rows="6" placeholder="Mobile Number" />
                                    </div></div>
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="form-group">
                            <label class="control-label" for="description">Description </label>
                            <textarea class="form-control" id="description" name="description" rows="6" placeholder="Write a brief not about your business.">${
                              data.description
                            }</textarea>
                        </div>
                    </div>
                    <div class="social-form-info card-body border-top">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h3>Social Media </h3>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label class="control-label" for="facebookurl">Facebook</label>
                            <input id="facebookurl" name="facebookurl" type="url" placeholder="https://www.facebook.com" value='${
                              data.facebookurl
                            }' class="form-control ">
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label class="control-label" for="twitter">Twitter</label>
                            <input id="twitter" name="twitter" type="url" placeholder="https://www.twitter.com" value='${
                              data.twitter
                            }' class="form-control">
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label class="control-label" for="instagramurl">Instagram</label>
                            <input id="instagramurl" name="instagramurl" type="url" placeholder="https://www.instagram.com" value='${
                              data.instagramurl
                            }' class="form-control">
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label class="control-label" for="youtubeurl">Youtube</label>
                            <input id="youtubeurl" name="youtubeurl" type="url" placeholder="https://www.youtube.com" value='${
                              data.youtubeurl
                            }' class="form-control">
                        </div>
                    </div>
                </div>
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
            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                <div class="card">
                    <div class="card-header">Account Delete</div>
                    <div class="card-body">
                        <p>In the fields below, enter your new password.</p>
                        <form id='deleteAccount'>
                        <p id='DAerror'> </p>
                            <input class="btn btn-primary mt30" type="submit" value='Delete My Account'>
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
      console.log(passwordUpdate);
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
let vendorDashboard = async (jsonToken) => {
  const user = localStorage.getItem("user");
  // Orders
  let order = await fetch(
    `${url}api/v1/business/orders/${JSON.parse(user)._id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("Authorization"),
      },
    }
  );
  let response = await order.json();
  // Reviews
  let review = await fetch(
    `${url}api/v1/business/reviews/${JSON.parse(user)._id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("Authorization"),
      },
    }
  );
  let reviewresponse = await review.json();
  if (reviewresponse.error) {
    reviewresponse = 0;
  } else {
    reviewresponse = reviewresponse = 0;
  }
  // Ratings
  let rating = await fetch(
    `${url}api/v1/business/ratings/${JSON.parse(user)._id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("Authorization"),
      },
    }
  );
  let ratingresponse = await rating.json();
  if (ratingresponse.error) {
    ratingresponse = 0;
  } else {
    ratingresponse = ratingresponse.data.avgRating;
  }
  //   let tablerender = () => {
  //     for(let data of response.data){
  //         console.log(data.email)
  //       `<tr>
  //             <td class="wedding-date">${data.date}</td>
  //             <td class="requester-id">${data.email}</td>
  //             <td class="requester-phone">${data.primaryContact}</td>
  //             <td class="requester-phone">${data.event}</td>
  //             <td class="requester-phone">${data.location}</td>
  //             <td class="requester-phone">${data.budget}</td>
  //             <td class="requester-action"><a href="#" class="btn btn-outline-pink btn-xs ">delete</a></td>
  //         </tr>`
  //     }
  //   }
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
                      <a class="dropdown-item" onclick='return requestDashboard()'>Requests </a>
                      <a class="dropdown-item" onclick='return vendorDashboard()'>Dashboard </a>
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
  <div class="dashboard-content mx-auto">
      <div class="container px-5">
          <div class="row mt80">
              <div class="col-xl-10 col-lg-10 col-md-9 col-sm-12 col-12">
                  <div class="dashboard-page-header">
                      <h3 class="dashboard-page-title">Hi, ${
                        JSON.parse(user).username
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
                            response.data.length
                          }</div>
                          <p>Request Quote</p>
                      </div>
                            <div class="summary-icon"><i class="icon-021-love-1"></i></div>
                      </div>
                      <div class="card-footer text-center"><a href="#">View All</a></div>
                  </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <div class="card card-summary">
                      <div class="card-body">
                          <div class="float-left">
                          <div class="summary-count">${reviewresponse}</div>
                          <p>Your Reviews</p>

                      </div>
                        <div class="summary-icon"><i class="icon-004-chat"></i></div>
                      </div>
                      <div class="card-footer text-center"><a href="#">View All</a></div>
                  </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <div class="card card-rating">
                      <div class="card-body">
                          <h5 class="mb10">Average Ratings</h5>
                          <div class="review-total">${Number(
                            ratingresponse
                          ).toFixed(2)} </div>
                          <small>Based on ${reviewresponse} ratings.</small>
                      </div>
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
let clientDashboard = async (jsonToken) => {
  let user = localStorage.getItem("user");
  const id = JSON.parse(user);
  const response = await fetch(`${url}api/v1/business/${id._id}`);
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  let data = jsonResponse.data;
  //   console.log(data)
  document.querySelector("body").innerHTML = `
        <div class="dashboard-header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-10 col-lg-10 col-md-8 col-sm-6 col-6">
                    <div class="header-logo">
                        <h3 class='text-danger font-weight-bold'>Jolly Party</h3>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2 text-right col-md-4 col-sm-6 col-6">
                    <div class="user-vendor">
                        <div class="dropdown">
                            <a class=" dropdown-toggle" id="dropdownMenuButton" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span class="user-icon">  <img src="images/dashboard-profile-couple.jpg" alt="" class="rounded-circle mb10"></span><span class="user-vendor-name">${
                            JSON.parse(user).username
                          }</span> 
                        </a>
                            <div class=" dashboard-dropdown-menu dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" onclick="userDashboard()">Dashboard</a>
                                <a class="dropdown-item" onclick="logout()">Log Out </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="navbar-expand-lg">
        <button class="navbar-toggler" type="button" data-toggle="offcanvas">
            <span id="icon-toggle" class="fa fa-bars"></span>
        </button>
    </div>
    <div class="dashboard-wrapper">
        <div class="dashboard-content">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="dashboard-page-header">
                            <h3 class="dashboard-page-title">Hi ${
                              JSON.parse(user).username
                            }</h3>
                            <p>Welcome. You can check and manage your Profile Here.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="dashboard-contnt">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
                                    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Profile</a>
                                        <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Password Change</a>
                                        <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Delete Account</a>
                                    </div>
                                </div>
                                <div class="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
                                    <div class="tab-content" id="v-pills-tabContent">
                                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                            <div class="card">
                                                <div class="card-header">Profile</div>
                                                <div class="card-body">
                                                    <form id="updateProfile">
                                                    <p id='UPerror' class='text-danger px-3'>&nbsp;</p>
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
                                                                        <label class="control-label" for="username">Name</label>
                                                                        <input id="username" name="username" type="text" value='${
                                                                          JSON.parse(
                                                                            user
                                                                          )
                                                                            .username
                                                                        }' placeholder="User Name" class="form-control ">
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                    <div class="form-group">
                                                                        <label class="control-label" for="email">Email</label>
                                                                        <input id="email" name="email" type="email" placeholder="Email" value='${
                                                                          JSON.parse(
                                                                            user
                                                                          )
                                                                            .email
                                                                        }' class="form-control ">
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                    <div class="form-group">
                                                                        <label class="control-label" for="mobileNumber">Phone</label>
                                                                        <input id="mobileNumber" name="mobileNumber" type="text"  value='${
                                                                          JSON.parse(
                                                                            user
                                                                          )
                                                                            .mobileNumber
                                                                        }' placeholder="Mobile Number" class="form-control ">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="social-form-info mb-0">
                                                            <div class="row">
                                                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                    <button class="btn btn-default" type="submit">Update profile</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    <div class="tab-pane " id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                        <div class="card">
                                            <div class="card-header">Password Change</div>
                                            <div class="card-body">
                                                <form class="row" id="modifyPassword">
                                                    <p id='MPerror' class='text-danger px-3'>&nbsp;</p>
                                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <div class="form-group">
                                                            <label class="control-label" for="password">Current Password</label>
                                                            <input id="password" name="password" type="password" placeholder="Old Password" class="form-control ">
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
                                    <div class="tab-pane " id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                        <div class="card">
                                            <div class="card-header">Account Delete</div>
                                            <div class="card-body">
                                                <p>In the fields below, enter your new password.</p>
                                                <form id="deleteAccount">
                                                <p id='DAerror' class='text-danger px-3'>&nbsp;</p>
                                                    <button class="btn btn-primary mt30" type="submit">Delete My Account</button>
                                                </form>
                                            </div>
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
        mobileNumber: document.querySelector("#mobileNumber").value,
        username: document.querySelector("#username").value,
      };
      if (!email || !username || !mobileNumber) {
        error.innerHTML = "Fields cant be empty.";
      }
      let result = await fetch(`${url}api/v1/users/${JSON.parse(user)._id}`, {
        method: "PUT",
        //   mode : 'no-cors',
        headers: {
          "Content-Type": "application/json",
          //   host : 'url',
          Authorization: localStorage.getItem("Authorization"),
        },
        body: JSON.stringify(businessData),
      });
      let res = await result.json();
      console.log(res);
      if (res.error) {
        return (error.innerHTML = res.error);
      } else {
        return (error.innerHTML = "Updated Profile successfully.");
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
      console.log(passwordUpdate);
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
let register = (e) => {
  // Launch Register/Login Form
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
          <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <!-- navigations -->
              <div id="navigation" class="pl-2">
                  <ul>
                      <li><a class='text-danger' href="#" title="#">Home</a></li>
                      <li><a class='text-danger' href="#" title="#">Vendors</a></li>
                      <li><a class='text-danger' href="#">Careers</a></li>
                      <li><a class='text-danger' href="#">Portfolio</a></li>
                      <li><a class='text-danger' href="#">About</a></li>
                      <li><a class='text-danger' href="#">Contact</a></li>
                      <li><a class='text-danger' href="">My Account</a></li>
                  </ul>
              </div>
              <!-- /.navigations -->
          </div>
          <div class="col-xl-4 col-lg-4 text-right col-md-2 col-sm-12 col-12 d-none d-xl-block d-lg-block">
              <!-- header-btn -->
              <div class="header-btn mr-5 ">
                  <a class="btn btn-primary btn-sm mr-1 text-dark" id="login-form" onClick='login()'>Login</a>
                  <a class="btn btn-primary btn-sm mr-5 text-dark" id="register-form" onClick='register()'>Register</a>
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
                        <p class='text-warning text-center' id='Rerror'>&nbsp;</p>
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
                                    <label class="control-label sr-only" for="email"></label>
                                    <input id="confirmEmail" type="text" placeholder="Confirm Email" class="form-control" required>
                                </div>
                            </div>
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                <!-- Text input-->
                                <div class="form-group service-form-group">
                                    <label class="control-label sr-only" for="mobileNumber"></label>
                                    <input id="mobileNumber" type="text" placeholder="mobile Number" class="form-control" required>
                                </div>
                            </div>
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                <!-- select -->
                                <div class="form-group">
                                    <select class="wide mb20 form-control" id='role'>
                                        <option>Choose Type</option>
                                        <option value="vendor">Vendor</option>
                                        <option value="user">User</option>
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
  // Register field validation
  document
    .querySelector("#RegisterForm")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const [username, email, confirmEmail, mobileNumber, role] = [
        document.querySelector("#username"),
        document.querySelector("#email"),
        document.querySelector("#confirmEmail"),
        document.querySelector("#mobileNumber"),
        document.querySelector("#role"),
      ];
      let error = document.querySelector("#Rerror");
      if (username.value.length < 3 || username.value.length > 25) {
        error.innerHTML = "Invalid Username!";
      } else if (!email) {
        error.innerHTML = "Email Cant Be Empty!";
      } else if (email.value !== confirmEmail.value) {
        error.innerHTML = "Email's Doesn't Match!";
      } else if (
        mobileNumber.value.length < 10 ||
        mobileNumber.value.length > 13 ||
        !mobileNumber.value
      ) {
        error.innerHTML = "Mobile Number must be 10-13 characters!";
      } else if (!role) {
        error.innerHTML = "Role not defined!";
      } else {
        const registerData = {
          username: document.querySelector("#username").value,
          email: document.querySelector("#email").value,
          mobileNumber: document.querySelector("#mobileNumber").value,
          role: document.querySelector("#role").value,
        };
        const token = await fetch(`${url}api/v1/users/register`, {
          method: "POST",
          //   mode : 'no-cors',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registerData),
        });
        const jsonToken = await token.json();
        console.log(jsonToken);
        if (jsonToken.message || jsonToken.error) {
          return (error.innerHTML = `${jsonToken.message || jsonToken.error}`);
        } else {
          return (error.innerHTML = "Registered Successfully");
        }
      }
    });
};
let search = async (e) => {
  const user = localStorage.getItem("user");
  // Orders

  document
    .querySelector("#searchCategory")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      let order = await fetch(
        `${url}api/v1/business/orders/${JSON.parse(user)._id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("Authorization"),
          },
        }
      );
      let orderResponse = await order.json();
      let error = document.querySelector("#searchCategoryError");
      const category = document.querySelector("#searchCategoryCategory").value;
      const location = document.querySelector("#searchCategoryLocation").value;

      if (!location || !category) {
        return (error.innerHTML = `Enter category and location`);
      }
      let response = await fetch(
        `${url}api/v1/users/view-all/main-search?city=${location}&category=${category}`
      );
      let jsonResponse = await response.json();
      if (jsonResponse.success === false) {
        return (error.innerHTML = `No vendors at requested location`);
      }
      document.querySelector(".space-small").style.display = "none";
      document.querySelector(".space-medium").style.display = "none";
      document.querySelector(".social-media-block").style.display = "none";
      document.querySelector(".footer").style.display = "none";
      let loadVendordetails = document.querySelector("#loadVendordetails");
      loadVendordetails.style.display = "block";
      loadVendordetails.style.position = "absolute";
      loadVendordetails.style.top = 0;
      loadVendordetails.style.left = 0;
      loadVendordetails.style.width = 100 + "%";
      loadVendordetails.style.height = 100 + "%";
      loadVendordetails.style.background = "#ccc";
      for (let elem of jsonResponse.data) {
        document.querySelector("#displayvendorDetails").innerHTML = `
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div class="vendor-thumbnail">
                            <!-- Vendor thumbnail -->
                            <div class="vendor-img zoomimg">
                                <!-- Vendor img -->
                                <a href="#"><img src="${elem.banne}" alt="" class="img-fluid"></a>
                            </div>
                            <!-- /.Vendor img -->
                            <div class="vendor-content">
                                <!-- Vendor Content -->
                                <h2 class="vendor-title"><a href="#" class="title">${elem.name}</a></h2>
                                <p class="vendor-address">${elem.city} ${elem.state}</p>
                            </div>
                            <div class="vendor-meta">
                                <div class="vendor-meta-item vendor-meta-item-bordered">
                                    <span class="vendor-price">
                                        ${elem.price}
                                    </span>
                                    <span class="vendor-text">Start From</span></div>
                                <div class="vendor-meta-item vendor-meta-item-bordered">
                                    <span class="vendor-guest">
                                        ${orderResponse.data.length}
                                    </span>
                                    <span class="vendor-text">Orders</span>
                                </div>
                                <div class="vendor-meta-item vendor-meta-item-bordered">
                                <span class="vendor-guest">
                                ${elem.avgRating}
                            </span>
                            <span class="vendor-text">Orders</span>
                            </div>
                            <!-- /.Vendor Content -->
                        </div>
                        <!-- /.Vendor thumbnail -->
                    </div>
            `;
      }
    });
};
let searchVendorByCategory = async (category) => {
  const user = localStorage.getItem("user");
  let vendor = fetch(`${url}api/v1/users/${category}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("Authorization"),
    },
  })
    .then((data) => data.json())
    .then((data) =>
      data.data.forEach(async (elem) => {
        let order = await fetch(`${url}api/v1/business/orders/${elem._id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        let orderResponse = await order.json();
        console.log(orderResponse);
        document.querySelector("#loadSingleVendor").style.display = "none";
        document.querySelector(".space-small").style.display = "none";
        document.querySelector(".space-medium").style.display = "none";
        document.querySelector(".social-media-block").style.display = "none";
        document.querySelector(".footer").style.display = "none";
        let loadVendordetails = document.querySelector("#loadVendordetails");
        loadVendordetails.style.display = "block";
        loadVendordetails.style.position = "absolute";
        loadVendordetails.style.top = 0;
        loadVendordetails.style.left = 0;
        loadVendordetails.style.width = 100 + "%";
        loadVendordetails.style.height = 100 + "%";
        loadVendordetails.style.background = "#ccc";
        document.querySelector("#displayvendorDetails").innerHTML += `
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" onClick='displayVendor("${elem._id}")'>
                        <div class="vendor-thumbnail">
                            <!-- Vendor thumbnail -->
                            <div class="vendor-img zoomimg">
                                <!-- Vendor img -->
                                <a href="#"><img src="${elem.banner}" alt="" class="img-fluid"></a>
                            </div>
                            <!-- /.Vendor img -->
                            <div class="vendor-content">
                                <!-- Vendor Content -->
                                <h2 class="vendor-title"><a href="#" class="title">${elem.name}</a></h2>
                                <p class="vendor-address">${elem.city} ${elem.state}</p>
                            </div>
                            <div class="vendor-meta">
                                <div class="vendor-meta-item vendor-meta-item-bordered">
                                    <span class="vendor-price">
                                        ${elem.price}
                                    </span>
                                    <span class="vendor-text">Start From</span></div>
                                <div class="vendor-meta-item vendor-meta-item-bordered">
                                    <span class="vendor-guest">
                                        ${orderResponse.data.length}
                                    </span>
                                    <span class="vendor-text">Orders</span>
                                </div>
                                <div class="vendor-meta-item vendor-meta-item-bordered">
                                <span class="vendor-guest">
                                ${elem.avgRating}
                            </span>
                            <span class="vendor-text">Orders</span>
                            </div>
                            <!-- /.Vendor Content -->
                        </div>
                        <!-- /.Vendor thumbnail -->
                    </div>
            `;
      })
    );
};
let displayVendor = async (id) => {
  let vendor = await fetch(`${url}api/v1/business/${id}`);
  let vendorResponse = await vendor.json();
  if (vendorResponse.error) {
    return alert("Error in retriving data " + vendorResponse.error);
  }
  document.querySelector("#loadVendordetails").style.display = "none";
  document.querySelector(".space-small").style.display = "none";
  document.querySelector(".space-medium").style.display = "none";
  document.querySelector(".social-media-block").style.display = "none";
  document.querySelector(".footer").style.display = "none";
  let loadVendordetails = document.querySelector("#loadSingleVendor");
  loadVendordetails.style.display = "block";
  loadVendordetails.style.position = "absolute";
  loadVendordetails.style.top = 0;
  loadVendordetails.style.left = 0;
  loadVendordetails.style.width = 100 + "%";
  loadVendordetails.style.height = 100 + "%";
  loadVendordetails.style.background = "#ccc";
  document.querySelector("#displ").innerHTML = `
    <div class="container">
    <div class="row">
      <div
        class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center"
      >
        <div class="realwed-caption">
          <h1 class="real-wedding-single-title">${vendorResponse.data.name}</h1>
          <span class="real-wedding-date text-white">${vendorResponse.data.category}</span>
          <span class="real-wedding-place ml-4 text-white"
            ><i class="fas fa-map-marker-alt pr-2"></i>${vendorResponse.data.city}, ${vendorResponse.data.city}, ${vendorResponse.data.area}</span
          >
        </div>
      </div>
    </div>
  </div>
  <!-- page caption -->
  <div class="realwed-addressbar">
    <div class="container">
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <p>
            <i class="fas fa-map-marker-alt pr-2"></i><span class="ml-4"
              >Location : ${vendorResponse.data.city}, ${vendorResponse.data.city}, ${vendorResponse.data.area}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- page breadcrumb -->
  <div class="content">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
          <div class="leftsocial-icon">
            <a href="${vendorResponse.data.facebookurl}" target='_blank' class="icon-square-outline facebook-outline"
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a href="${vendorResponse.data.twitter}" target='_blank' class="icon-square-outline twitter-outline"
              ><i class="fab fa-twitter"></i>
            </a>
            <a href="${vendorResponse.data.instagramurl}" target='_blank' class="icon-square-outline instagram-outline"
              ><i class="fab fa-instagram"></i
            ></a>
            <a href="${vendorResponse.data.youtubeurl}" target='_blank' class="icon-square-outline youtube-outline"
              ><i class="fab fa-youtube"></i
            ></a>
          </div>
          <div class="real-wedding-content bg-white border">
                <!-- real-wedding-story -->
                <div class="mb30">
                  <h3>Our Story</h3>
                  <p class='text-justify'>${vendorResponse.data.descriptio}</p>
                  <img src="${vendorResponse.data.gallery[0]}" alt="" />
                  <!-- /.real-wedding-story -->
                </div>
                <div class="mb30">
                  <img
                    src="${vendorResponse.data.gallery[1]}"
                    alt=""
                    class="mb10"
                  />
                  <img
                    src="${vendorResponse.data.gallery[2]}"
                    alt=""
                    class="mb10"
                  />
                  <img src="${vendorResponse.data.gallery[4]}" alt="" />
                </div>
                <div class="mb30">
                  <img src="${vendorResponse.data.gallery[5]}" alt="" />
                </div>
                <div class="mb30">
                  <img src="${vendorResponse.data.gallery[6]}" alt="" />
                </div>
              </div>
              <!-- /.real-wedding-grid -->
            </div>
          </div>



          <div class="content">
      <div class="container">
        <div class="row">
          <div class="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12 mb60">
            <!-- contact-section-title -->
            <div class="text-center">
              <p class="lead mt-5">
                We would like to talk with you, Talk to us and we'll show you
                what we’ve done, and what we can do for you.
              </p>
            </div>
            <!-- /.contact-section-title -->
          </div>
          <div class="offset-xl-3 col-xl-6 offset-lg-3 col-lg-6 col-md-12 col-sm-12 col-12">
            <form action="https://jituchauhan.com/real-wed/realwed/contactus.php" method="post" id='placeOrder'>
              <!-- form -->
              <p id='ODerror'>&nbsp;</p>
              <div class="contact-form">
                <div class="row">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb10">
                    <h3>Place an order</h3>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <!-- Text input-->
                    <div class="form-group service-form-group">
                      <input id="date" type="date" name="date" placeholder="Date" class="form-control" required />
                    </div>
                  </div>
                  <!-- Text input-->
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="form-group service-form-group">
                      <input id="event" type="text" name="event" placeholder="Event" class="form-control" required />
                    </div>
                  </div>
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb10">
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <!-- Text input-->
                    <div class="form-group service-form-group">
                      <input id="budget" type="text" name="budget" placeholder="Budget" class="form-control" required />
                    </div>
                  </div>
                  <!-- Text input-->
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="form-group service-form-group">
                      <input id="mobile" type="text" name="moble" placeholder="Mobile Number" class="form-control" required />
                    </div>
                  </div>
                  <!-- Text input-->
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="form-group service-form-group">
                      <input id="location" type="text" name="location" placeholder="Location" class="form-control"required />
                    </div>
                  </div>
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="form-group service-form-group">
                      <input id="email" type="text" name="email" placeholder="Email" class="form-control"required />
                    </div>
                  </div>
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <!-- textarea -->
                    <div class="form-group">
                      <textarea class="form-control" id="description" name="description" rows="3" placeholder="Describe breif about your event." ></textarea>
                    </div>
                  </div>
                  <!--button -->
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <button type="submit" name="submit" class="btn btn-danger"> PLACE ORDER </button>
                  </div>
                </div>
              </div>
              <!-- /.form -->
            </form>
            
          </div>
        </div>
      </div>
    </div>
    `;
  document
    .querySelector("#placeOrder")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      let ODerror = document.querySelector("#ODerror");
      const orderData = {
        date: document.querySelector("#date").value,
        event: document.querySelector("#event").value,
        budget: document.querySelector("#budget").value,
        location: document.querySelector("#location").value,
        description: document.querySelector("#description").value,
        primaryContact: document.querySelector("#mobile").value,
        email: document.querySelector("#email").value,
      };
      let response = await fetch(
        `${url}api/v1/users/send-request/${vendorResponse.data._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("Authorization"),
          },
          body: JSON.stringify(orderData),
        }
      );
      let jsonResponse = await response.json();
      if (jsonResponse.error) {
        return (ODerror.innerHTML = jsonResponse.error);
      }
      return (ODerror.innerHTML = jsonResponse.message);
    });
};
// Login
let login = (e) => {
  // ratings()
  // Check if user logged In or not
  check();
  // Launch Register/Login Form
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
          <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <!-- navigations -->
              <div id="navigation" class="pl-2">
                  <ul>
                      <li><a class='text-danger' href="#" title="#">Home</a></li>
                      <li><a class='text-danger' href="#" title="#">Vendors</a></li>
                      <li><a class='text-danger' href="#">Careers</a></li>
                      <li><a class='text-danger' href="#">Portfolio</a></li>
                      <li><a class='text-danger' href="#">About</a></li>
                      <li><a class='text-danger' href="#">Contact</a></li>
                      <li><a class='text-danger' href="">My Account</a></li>
                  </ul>
              </div>
              <!-- /.navigations -->
          </div>
          <div class="col-xl-4 col-lg-4 text-right col-md-2 col-sm-12 col-12 d-none d-xl-block d-lg-block">
              <!-- header-btn -->
              <div class="header-btn mr-5 ">
              <a class="btn btn-primary btn-sm mr-1 text-dark" id="login-form" onClick='login()'>Login</a>
              <a class="btn btn-primary btn-sm mr-5 text-dark" id="register-form" onClick='register()'>Register</a>
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
                                        <option>Choose Type</option>
                                        <option value="vendor">Vendor</option>
                                        <option value="user">User</option>
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
    const token = await fetch(`${url}api/v1/users/login`, {
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
      if (document.querySelector("#check").value) {
        localStorage.setItem("jollyparty", JSON.stringify(jsonToken.user));
      }
      localStorage.setItem("Authorization", jsonToken.token);
      localStorage.setItem("user", JSON.stringify(jsonToken.user));
      check();
      return (error.innerHTML = "LoggedIn Successfully");
    }
  });
};
let logout = async (e) => {
  const user = localStorage.getItem("user");
  let response = await fetch(`${url}api/v1/users/logout/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("Authorization"),
    },
  });
  let jsonResponse = await response.json();
  localStorage.removeItem("user");
  localStorage.removeItem("Authorization");
  login();
};
// Actual code
document.querySelector("#register-form").addEventListener("click", (e) => {
  register(e);
  document.querySelector("body").style.backgroundColor = "#ccc";
});

// Login
document.querySelector("#login-form").addEventListener("click", (e) => {
  login(e);
  document.querySelector("body").style.backgroundColor = "#ccc";
});
