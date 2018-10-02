class Github {
  constructor() {
    this.client_id = '0caeaae0bba85dcc3898';
    this.client_secret = 'd22a8dcab71d596418a1a62ba0e89bb0a575b111';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    return {
      profile
    }
  }
}