let Ville = {
  continent: 'Europe',
  ville: 'Paris'
}

const url = 'http://worldtimeapi.org/api/timezone/' + Ville.continent + '/' + Ville.ville;

let requete = new XMLHttpRequest();
requete.open('GET', url);
requete.responseType = 'json';
requete.send();
requete.onload = function () {
  if (requete.readyState === XMLHttpRequest.DONE) {
    if (requete.status === 200) {
      let reponse = requete.response;
      console.log(reponse);
    }
  }

}
