let Ville = {
  continent: 'Europe',
  ville: 'Paris'
}

let changer = document.querySelector('#changer');

changer.addEventListener('click', () => {
  alert('hello')

});


function getTime() {
  const url = 'http://worldtimeapi.org/api/timezone/' + Ville.continent + '/' + Ville.ville;

  let requete = new XMLHttpRequest();
  requete.open('GET', url);
  requete.responseType = 'json';
  requete.send();
  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {

        let reponse = requete.response;
        let date = reponse.datetime;
        document.querySelector('#time_label').textContent = date;
      }
    }
  }
}

let myTimer = setInterval(getTime, 1000);


