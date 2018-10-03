class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }
  //Display profile in UI
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-2">View Profile</a>
          </div>
          <div class="col-md-9">
          <span class="badges badge-primary">Public Repos:${user.public_repos}</span>
          <span class="badges badge-secondary">Public Gists${user.publi_gists}</span>
          <span class="badges badge-success">Followers:${user.followers}</span>
          <span class="badges badge-info">Following${user.following}</span>
          <br>
          <ul class="list-group">
            <li class="list-group-item">Company:${user.company}</li>
            <li class="list-group-item">Website/blog:${user.blog}</li>
            <li class="list-group-item">Member Since:${user.created_at}</li>

          </div>
        </div>
      </div>
      <h3 class="page heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;

  }
  //Clear Alert Messgae
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    
    if (currentAlert) {
      currentAlert.remove();
    }

  }

  //Remove Profile from UI
  clearProfile() {
     this.profile.innerHTML = '';
   }
  // Show alert meeage
   showAlert(message , className) {
    //Clear any remaining alerts
    this.clearAlert();
    const div = document.createElement('div');
    // add class
    div.className = className;
    //Add Text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.searchContainer');
    //Get search Box
    const search = document.querySelector('.search');
    //Insert alert
    container.insertBefore(div,search);

    //Timeout after 3 sec
    setTimeout(() =>{ this.clearAlert();}, 3000 );


   }


}