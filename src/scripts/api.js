// import CardList from './cardlist.js'

  class Api {
    constructor(options) {
      this.serverUrl = options.serverUrl;
      this.token = options.headers.authorization;
    }
  
    getUser(){
      return fetch(`${this.serverUrl}/users/me`, {
        headers: {
          authorization: this.token
        }
      })
  
      .then((res) => {
        if (res.ok) {
          return res.json();        
        } 
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен. Код ошибки:', err);      
      });
    }
  
    getInitialCards() {
      return fetch(`${this.serverUrl}/cards`, {
        headers: {
          authorization: this.token
        }
      })
   
      .then((res) => {
        if (res.ok) {
          return res.json();        
        }      
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен. Код ошибки:', err);
      });
    }
  
    editUserOnServer(){
      return fetch(`${this.serverUrl}/users/me`, {
        method: 'PATCH',
        headers: {
          authorization:  this.token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        name: document.forms.userInfoEdit.userName.value,
        about: document.forms.userInfoEdit.userJob.value
        }) 
      })
  
      .then((res) => {
        if (res.ok) {
          return res.json();        
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен. Код ошибки:', err);      
      });
    }  
  }
  
  export const api = new Api({
    serverUrl: 'http://95.216.175.5/cohort3',
    headers: {
      authorization: 'c79ba222-ea08-4c5f-913f-ef9b73e1970f',
      'Content-Type': 'application/json'
    }
  });


//   api.getUser().then(data => {
//     if (data.name && data.about)  {
//       document.querySelector('.user-info__name').textContent = data.name;
//       document.querySelector('.user-info__job').textContent = data.about;
//       document.querySelector('.user-info__photo').style.backgroundImage = `url(${data.avatar})`;
//     }
//   });
  
//   api.getInitialCards().then(cards => {
//     if(cards && cards.length > 0) {
//       new CardList(document.querySelector('.places-list'), cards, buttonAddCard);  
//     }  
//   });

  

  export default Api
  