// url
var url = "https://salty-castle-33988.herokuapp.com/";
var frontendurl = "http://127.0.0.1:5500/";
// Functions
// Vendor Dashboard
// Page Redirect
// let pageRedirect = () => {
//     const role = localStorage.getItem('user')
//   if(localStorage.getItem('authorization') && localStorage.getItem('user')){
//     if(JSON.parse(role).role === 'vendor'){
//       window.location = `${frontendurl}vendor-dashboard-overview.html`
//     }
//     if(JSON.parse(role).role === 'user'){
//       return clientDashboard();
//     }
//   }
// }

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
let businesslist = (e) => {
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
                            <a class="dropdown-item" onclick='return profileupdate()'>My Profile </a>
                            <a class="dropdown-item" onclick='return businesslist()'>List Your Business</a>
                            <a class="dropdown-item" >Log Out</a>
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
                            <label class="control-label" for="city">Address </label>
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
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <button class="btn btn-default" type="submit">Submit Here</button>
                    </div>
                </div>
            </div>
            </form>
            <form id='bannerImage'>
            <div class="dashboard-venue-gallery card-body border-top">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h3>Add Gallery Of Venue</h3>
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
                        <h3>Add Gallery Of Venue</h3>
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
            <form id='socialMedia'>
            <div class="social-form-info card-body border-top">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h3>Social Media </h3>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label class="control-label" for="facebook">Facebook</label>
                            <input id="facebook" name="facebook" type="url" placeholder="https://www.facebook.com" class="form-control ">
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
                            <label class="control-label" for="instagram">Instagram</label>
                            <input id="instagram" name="instagram" type="url" placeholder="https://www.instagram.com" class="form-control">
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label class="control-label" for="youtube">Youtube</label>
                            <input id="youtube" name="youtube" type="url" placeholder="https://www.youtube.com" class="form-control">
                        </div>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <button class="btn btn-default" type="submit">Submit</button>
                    </div>
                </div>
            </div>
            </form>
        </>
    `;
  document
    .querySelector("#businessInfo")
    .addEventListener("submit", async (e) => {
      let error = document.querySelector("#Berror");
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
        user: user,
      };
      let result = await fetch(`${url}api/v1/business`, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          Autherization: `${localStorage.getItem("Authorization")}`,
        },
        body: JSON.stringify(businessData),
      });
      console.log(result);
      if (result.error) {
        return (Berror.innerHTML = result.error);
      }
    });
};
let profileupdate = (e) => {
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
                        <a class="dropdown-toggle" id="dropdownMenuButton" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="user-icon">  <img src="images/dashboard-profile.jpg" alt="" class="rounded-circle mb10"></span><span class="user-vendor-name">${
                          JSON.parse(user).username
                        }</span> 
                    </a>
                        <div class=" dashboard-dropdown-menu dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" onclick='return vendorDashboard()'>Dashboard </a>
                            <a class="dropdown-item" onclick='return profileupdate()'>My Profile </a>
                            <a class="dropdown-item" onclick='return businesslist()'>List Your Business</a>
                            <a class="dropdown-item" href="index.html">Log Out</a>
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
                        <form>
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
                                            <label class="control-label" for="vendorname">Vendor Name</label>
                                            <input id="vendorname" name="vendorname" type="text" placeholder="" class="form-control ">
                                        </div>
                                    </div>
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label class="control-label" for="email">Email</label>
                                            <input id="email" name="email" type="email" placeholder="" class="form-control ">
                                        </div>
                                    </div>
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label class="control-label" for="phone">Phone</label>
                                            <input id="phone" name="phone" type="text" placeholder="" class="form-control ">
                                        </div>
                                    </div>
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
                        <form class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="form-group">
                                    <label class="control-label" for="currentpassword">Current Password</label>
                                    <input id="currentpassword" name="currentpassword" type="password" placeholder="" class="form-control ">
                                </div>
                            </div>
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="form-group">
                                    <label class="control-label" for="newpassword">New Password</label>
                                    <input id="newpassword" name="newpassword" type="password" placeholder="" class="form-control ">
                                </div>
                            </div>
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="form-group">
                                    <label class="control-label" for="retypepassword">Retype Password</label>
                                    <input id="retypepassword" name="retypepassword" type="password" placeholder="" class="form-control ">
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
                        <form>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                <label class="custom-control-label" for="customCheck1">Delete my account and data listing also.</label>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck2">
                                <label class="custom-control-label" for="customCheck2">Delete my account only.</label>
                            </div>
                            <button class="btn btn-primary mt30" type="submit">Delete My Account</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
};
let vendorDashboard = (jsonToken) => {
  const user = localStorage.getItem("user");
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
                      <a class="dropdown-item" onclick='return profileupdate()'>My Profile </a>
                      <a class="dropdown-item" onclick='return businesslist()'>List Your Business</a>
                          <a class="dropdown-item" href="index.html">Log Out</a>
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
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                  <div class="card card-summary">
                      <div class="card-body">
                          <div class="float-left">
                          <div class="summary-count">6</div>
                          <p>Total Listed Item</p>
                      </div>
                            <div class="summary-icon"><i class="icon-051-wedding-arch"></i></div>

                      </div>
                        <div class="card-footer text-center"><a href="#">View All</a></div>
                  </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                  <div class="card card-summary">
                      <div class="card-body">
                          <div class="float-left">
                          <div class="summary-count">2</div>
                          <p>Request Quote</p>
                      </div>
                            <div class="summary-icon"><i class="icon-021-love-1"></i></div>
                      </div>
                      <div class="card-footer text-center"><a href="#">View All</a></div>
                  </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                  <div class="card card-summary">
                      <div class="card-body">
                          <div class="float-left">
                          <div class="summary-count">1</div>
                          <p>Your Reviews</p>

                      </div>
                        <div class="summary-icon"><i class="icon-004-chat"></i></div>
                      </div>
                      <div class="card-footer text-center"><a href="#">View All</a></div>
                  </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                  <div class="card card-rating">
                      <div class="card-body">
                          <h5 class="mb10">Average Ratings</h5>
                          <div class="review-total">4.8 </div>
                          <small>4.8 based on 8 ratings.</small>
                      </div>
                  </div>
              </div>
          </div>
      </div>
                  <div class="dashboard-page-header ml30">
                      <div class="row px-5">
                          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <h3 class="dashboard-page-title">Request List</h3>
                              <p>Check your request quote.</p>
                          </div>
                      </div>
                  </div>
                  <div class="card request-list-table table-responsive px-5">
                      <table class="table">
                          <thead>
                              <tr>
                                  <th>Name</th>
                                  <th>Wedding Date</th>
                                  <th>Email</th>
                                  <th>Phone</th>
                                  <th>Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td class="requester-name">Jessica J. Titus</td>
                                  <td class="wedding-date">26/10/2020</td>
                                  <td class="requester-id">jessicatitus@gmail.com</td>
                                  <td class="requester-phone">00000000</td>
                                  <td class="requester-action"><a href="#" class="btn btn-outline-pink btn-xs ">delete</a></td>
                              </tr>
                              <tr>
                                  <td class="requester-name">Anita Parmar</td>
                                  <td class="wedding-date">26/11/2020</td>
                                  <td class="requester-id">anita@gmail.com</td>
                                  <td class="requester-phone">111111111</td>
                                  <td class="requester-action"><a href="#" class="btn btn-outline-pink btn-xs ">delete</a></td>
                              </tr>
                              <tr>
                                  <td class="requester-name">Kim R. Wiley</td>
                                  <td class="wedding-date">26/12/2020</td>
                                  <td class="requester-id">kim@gmail.com</td>
                                  <td class="requester-phone">22222222</td>
                                  <td class="requester-action"><a href="#" class="btn btn-outline-pink btn-xs">delete</a></td>
                              </tr>
                              <tr>
                                  <td class="requester-name">Betty L. Plain</td>
                                  <td class="wedding-date">28/12/2020</td>
                                  <td class="requester-id">plain@gmail.com</td>
                                  <td class="requester-phone">333333333 </td>
                                  <td class="requester-action"><a href="#" class="btn btn-outline-pink btn-xs">delete</a></td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
  `;
};
let register = (e) => {
  // Launch Register/Login Form
  document.querySelector("body").innerHTML = `
    <div class=" vendor-form">
        <div class="container">
            <div class="row ">
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
          headers: {
            "Content-Type": "application/json",
            authorization: "Bearer Token",
          },
          body: JSON.stringify(registerData),
        });
        const jsonToken = await token.json();
        if (jsonToken.message || jsonToken.error) {
          return (error.innerHTML = `${jsonToken.message || jsonToken.error}`);
        } else {
          return (error.innerHTML = "Registered Successfully");
        }
      }
    });
};

// Login
let login = (e) => {
  // ratings()
  // Check if user logged In or not
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
  // Launch Register/Login Form
  document.querySelector("body").innerHTML = `
    <div class=" vendor-form">
        <div class="container">
            <div class="row ">
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
                                    <input id="email" type="text" name="email" placeholder="Email" value='ganeshrajamaddi@gmail.com' class="form-control" required>
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
                                <input type='submit' value='LOGIN' class='btn btn-default text-warning'>
                            </div>
                        </div>
                        <p class='text-dark mt-3'>Don't have an account? <a style='cursor : pointer;' id="register-form" class='text-warning' onClick='register()'>click Here</a> to register.</p>
                    </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
  // Login fields validation
  document.querySelector("#LoginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    let error = document.querySelector("#Lerror");
    // let bearer = 'Bearer ' + bearer_token;

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
    if (jsonToken.error || jsonToken.message) {
      return (error.innerHTML = `${jsonToken.message || jsonToken.error}`);
    } else {
      localStorage.setItem("Authorization", jsonToken.token);
      localStorage.setItem("user", JSON.stringify(jsonToken.user));
      vendorDashboard(jsonToken);
      return (error.innerHTML = "LoggedIn Successfully");
    }
  });
  ``;
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
