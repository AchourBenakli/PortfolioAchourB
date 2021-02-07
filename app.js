let ville = "Rome"; //Ville de base

let changer = document.querySelector('#changer');//Assigne la class html changer a JS

changer.addEventListener('click', () => { //On detecte au click la class html changer (via notre let changer)
  ville = prompt('Quelle ville souhaitez vous choisir?');//Demander la ville 
  recupererVilleTemp(ville);//Appeler la fonction avec comme props ville
});


document.querySelector('#temperature_label');//Assigne la class html temperature_label a JS
document.querySelector('#ville');//Assigne la class html ville a JS

function recupererVilleTemp(ville) {
  const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=0f742df61f598864d52a0736573d2f53&units=metric';//On cherche lApi meteo via une cle + la variable ville pour pouvoir choisir la ville souhaite
  let requete = new XMLHttpRequest(); // On cree une requete afin de recuperer des donnes url
  requete.open('get', url); //  Mise a zero de la requete
  requete.responseType = 'json';// On veut utiliser du JSON 
  requete.send();//On envoie la requete au server
  requete.onload = function () { //On load la requete
    if (requete.readyState === XMLHttpRequest.DONE) { //SI requete via ReadyState(qui decrit letat de la props) = DONE
      if (requete.status === 200) { //Si le status est egale a 200 donc OK (statut 200 signifie Requete OK)
        let reponse = requete.response;//Tu me cree une variable pour recuperer la reponse de la requete
        let temperature = reponse.main.temp;//Tu me cree une variable pour recuperer la temperature
        let ville = reponse.name;//Tu me cree une variable pour recuperer le nom
        document.querySelector('#temperature_label').textContent = temperature;
        document.querySelector('#ville').textContent = ville;
      } else {
        alert('Un probleme est intervenu')
      }
    }
  }

}






