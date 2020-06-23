import TokenService from './token-service';

export default class HttpService {
    baseURL = 'https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1';

    tokenService = new TokenService();

    getSectionByType(type) {
      return fetch(`${this.baseURL}/section/`)
        .then(res => res.json())
        .then(data => data.content.filter(sections => sections.type === type)[0]);
    }

    authorization(loginObject) {
      return fetch(`${this.baseURL}/user/login`, {
        method: 'POST',
        body: JSON.stringify( loginObject ),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json());
    }
    
    updateSection(data) {
      const token = this.tokenService.getToken();
      return fetch(`${this.baseURL}/section/navigation`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(res => res.json());
    }
}
