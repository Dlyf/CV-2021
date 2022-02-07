// const database = require("mime-db");

(function() {
    let title = 'Soccer table';
    let nodeTitle = document.getElementById('title');
    let divTableTeam = document.getElementById('tableTeam');
    let divFilters = document.getElementById('filters');
    let divMessage = document.getElementById('message');
    let selectCountry = divFilters.children[0];
    let textSearch = divFilters.children[1];
    let data = {};
    // let animation = false
    const URL = 'http://localhost:5000/teams';

    function init() {
        nodeTitle.innerText = title;

        fetch(URL)
        .then(res => res.json())
        .then(teams => {
          data.teams = teams;
          data.teamsToDisplays = data.teams;
          buildTeamTable();
        })
        .catch((err) => {
          divTableTeam.innerHTML += 'Erreur: impossible de charger les équipes';
          divTableTeam.classList.add('alert-danger');
        })
    }

    function buildTeamTable() {

        let header = '<tr><th>logo</th><th>name</th><th>country</th><th>stadium</th><th>coach</th><th>founded</th><th>nbCup</th></tr>';
        let s = '<table class = "table table-bordered table-striped">';
        s += header;
        data.teamsToDisplays.forEach((team, index) => {

            s += '<tr>'
            s += '<td>';
            s += '<img class="logo" src="'+team.logo+'" alt="">';
            s += '</td>';
            s += '<td>';
            s += team.name;
            s += '</td>';
            s += '<td>';
            s += team.country;
            s += '</td>';
            s += '<td>';
            s += team.stadium;
            s += '</td>';
            s += '<td>';
            s += team.coach;
            s += '</td>';
            s += '<td>';
            s += team.founded;
            s += '</td>';
            s += '<td>';
            for(let i = 0; i < team.nbCup; i++) {
              s +='<i class="fas fa-trophy"></i>'
            }
            s += '</td>';
            s += '</tr>'
        })
        s += '</table>';
        divTableTeam.innerHTML = s;
    }
    //test filtrer the country
    selectCountry.addEventListener('change', function() {
      let selectedCountry = this.value;
      if (selectedCountry == '0') {
        data.teamsToDisplays = data.teams;
        divMessage.innerText = '';
      } else {
        // problem with filter and fetchData()
        let countriesFiltered2 = data.teams.filter(function(team) {
          return team.country.indexOf(selectedCountry) != -1;
        })
        data.teamsToDisplays = countriesFiltered2;

        divMessage.innerText = data.teamsToDisplays.length + ' pays(s) trouvé(s)';
        console.log(countriesFiltered2)

      }
        buildTeamTable();
    })

    textSearch.addEventListener('keyup', function() {
      if (this.value.length > 2) {
        let countriesFiltered2 = data.teams.filter(
          team => team.name.toLowerCase().indexOf(this.value.toLowerCase()) != -1);
        // let countriesFiltered3 = data.teams.filter(
        //   team => team.coach.toLowerCase().indexOf(this.value.toLowerCase()) != -1);
      
        data.teamsToDisplays = countriesFiltered2;
      } else {
        data.teamsToDisplays = data.teams;
      }
      buildTeamTable();
    })
    init();
}) ()

// En vous inspirant de ce qu'on a fait durant la formation, créer une application affichant des équipes de football sous forme d'un tableau avec une colonne par propriétés des équipes (logo, name, etc...)
// Les équipes seront chargées à l'initialisation de l'application par une requêtes ajax (http://localhost:5000/teams)
// Au-dessus du tableau proposer les filtres suivants:
// - par pays: menu déroulant avec les pays ok
// - par recherche libre sur les noms des équipes ou celui du coach

// Bonus: dans la colonne "Nombre de coupes", afficher des icônes de coupes plutôt qu'une valeur numérique