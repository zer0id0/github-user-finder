class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

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

}