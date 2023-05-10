
const linkList = [{
  name : 'ANHS',
  year : '2015-2016',
  links : 'noyearbook.html'
},{
  name : 'ANHS',
  year : '2016-2017',
  links : 'noyearbook.html'
},{
  name : 'ANHS',
  year : '2017-2018',
  links : 'noyearbook.html'
},{
  name : 'ANHS',
  year : '2018-2019',
  links : 'noyearbook.html'
},{
  name : 'ANHS',
  year : '2019-2020',
  links : 'noyearbook.html'
},{
  name : 'ANHS',
  year : '2020-2021',
  links : 'noyearbook.html'
},{
  name : 'ANHS',
  year : '2021-2022',
  links : 'noyearbook.html'
},{
  name : 'ANHS',
  year : '2022-2023',
  links : 'noyearbook.html'
},{
  name : 'ANHS',
  year : '2023-2024',
  links : 'noyearbook.html'
},{
  name : 'AA',
  year : '2015-2016',
  links : 'noyearbook.html'
},{
  name : 'AA',
  year : '2016-2017',
  links : 'noyearbook.html'
},{
  name : 'AA',
  year : '2017-2018',
  links : 'noyearbook.html'
},{
  name : 'AA',
  year : '2018-2019',
  links : 'noyearbook.html'
},{
  name : 'AA',
  year : '2019-2020',
  links : 'noyearbook.html'
},{
  name : 'AA',
  year : '2020-2021',
  links : 'noyearbook.html'
},{
  name : 'AA',
  year : '2021-2022',
  links : 'noyearbook.html'
},{
  name : 'AA',
  year : '2022-2023',
  links : 'noyearbook.html'
},{
  name : 'AA',
  year : '2023-2024',
  links : 'noyearbook.html'
},{
  name : 'NDA',
  year : '2015-2016',
  links : 'noyearbook.html'
},{
  name : 'NDA',
  year : '2016-2017',
  links : 'noyearbook.html'
},{
  name : 'NDA',
  year : '2017-2018',
  links : 'noyearbook.html'
},{
  name : 'NDA',
  year : '2018-2019',
  links : 'noyearbook.html'
},{
  name : 'NDA',
  year : '2019-2020',
  links : 'noyearbook.html'
},{
  name : 'NDA',
  year : '2020-2021',
  links : 'noyearbook.html'
},{
  name : 'NDA',
  year : '2021-2022',
  links : 'noyearbook.html'
},{
  name : 'NDA',
  year : '2022-2023',
  links : 'noyearbook.html'
},{
  name : 'NDA',
  year : '2023-2024',
  links : 'noyearbook.html'
},{
  name : 'ACC',
  year : '2015-2016',
  links : 'noyearbook.html'
},{
  name : 'ACC',
  year : '2016-2017',
  links : 'noyearbook.html'
},{
  name : 'ACC',
  year : '2017-2018',
  links : 'noyearbook.html'
},{
  name : 'ACC',
  year : '2018-2019',
  links : 'noyearbook.html'
},{
  name : 'ACC',
  year : '2019-2020',
  links : 'noyearbook.html'
},{
  name : 'ACC',
  year : '2020-2021',
  links : 'noyearbook.html'
},{
  name : 'ACC',
  year : '2021-2022',
  links : 'noyearbook.html'
},{
  name : 'ACC',
  year : '2022-2023',
  links : 'noyearbook.html'
},{
  name : 'ACC',
  year : '2023-2024',
  links : 'noyearbook.html'
}];



search('','')


function search(names,years) {
  let todohtml = '';
  let todo_nonSearch = '';
if (names === '' && years === '') {
  for (let i = 0 ; i < linkList.length; i += 1) {
    let blank_name = linkList[i].name.toUpperCase();
    let blank_year = linkList[i].year;
    let blank_link = linkList[i].links;
    let html = `
    <div class="second">
      <div class="third1">${blank_name}</div>
      <div class="third2">${blank_year}</div>
      <div class="visit-button">
        <a href="${blank_link}">
        <button class="thebutton">Visit</button>
        </a>
      </div>
    </div>
    `;
    todohtml += html;
  }
  document.querySelector('.js-name-list').innerHTML = todohtml;
  document.querySelector('.js-nonSearch').innerHTML = todo_nonSearch;
  todohtml = '';
  todo_nonSearch = '';
}else if (names != '' && years === '') {
  for (let i = 0; i < linkList.length; i += 1) {
    let name_only = linkList[i].name.toUpperCase();
    let year_only = linkList[i].year;
    let link_only = linkList[i].links;
    if (names === name_only) {
      let html = `
        <div class="second">
          <div class="third1">${name_only}</div>
          <div class="third2">${year_only}</div>
          <div class="visit-button">
            <a href="${link_only}">
              <button class="thebutton">Visit</button>
            </a>
          </div>
        </div>
      `;
      todohtml += html;
    }else {
      let nonhtml = `
        <div class = "second">
          <div class="third1">${name_only}</div>
          <div class="third2">${year_only}</div>
          <div class="visit-button">
            <a href="${link_only}">
              <button class="thebutton">Visit</button>
            </a>
          </div>
        </div>
      `;
      todo_nonSearch += nonhtml;
    }
  }
  document.querySelector('.js-name-list').innerHTML = todohtml;
  document.querySelector('.js-nonSearch').innerHTML = todo_nonSearch;
  todohtml = '';
  todo_nonSearch = '';
}else if (names === '' && years != '') {
  for (let i = 0; i < linkList.length; i += 1) {
    let yOnly_name = linkList[i].name.toUpperCase(  );
    let yOnly_year = linkList[i].year;
    let yOnly_link = linkList[i].links;
    if (years === yOnly_year) {
      let html = `
      <div class="second">
        <div class="third1">${yOnly_name}</div>
        <div class="third2">${yOnly_year}</div>
        <div class="visit-button">
          <a href="${yOnly_link}">
            <button class="thebutton">Visit</button>
          </a>
        </div>
      </div>
      `;
      todohtml += html;
    }else {
      let nonhtml = `
      <div class="second">
        <div class="third1">${yOnly_name}</div>
        <div class="third2">${yOnly_year}</div>
        <div class="visit-button">
          <a href="${yOnly_link}">
            <button class="thebutton">Visit</button>
          </a>
        </div>
      </div>
      `;
      todo_nonSearch += nonhtml;
    }
  }
  document.querySelector('.js-name-list').innerHTML = todohtml;
  document.querySelector('.js-nonSearch').innerHTML = todo_nonSearch;
  todohtml = '';
  todo_nonSearch = '';
}else if (names != '' && years != '') {
  for (let i = 0; i < linkList.length; i += 1) {
    let right_name = linkList[i].name;
    let right_year = linkList[i].year;
    let right_link = linkList[i].links;
    if (years === right_year && names === right_name) {
      let html = `
      <div class="second">
        <div class="third1">${right_name}</div>
        <div class="third2">${right_year}</div>
        <div class="visit-button">
          <a href="${right_link}">
            <button class="thebutton">Visit</button>
          </a>
        </div>
      </div>
      `;
      todohtml += html;
    }else {
      let nonhtml = `
      <div class="second">
        <div class="third1">${right_name}</div>
        <div class="third2">${right_year}</div>
        <div class="visit-button">
          <a href="${right_link}">
            <button class="thebutton">Visit</button>
          </a>
        </div>
      </div>
      `;
      todo_nonSearch += nonhtml;
    }
  }
  document.querySelector('.js-name-list').innerHTML = todohtml;
  document.querySelector('.js-nonSearch').innerHTML = todo_nonSearch;
  todohtml = '';
  todo_nonSearch = '';
}
}

function gotop() {
  window.scrollTo({
    top: 0
  })
}


const xbutton = document.querySelector(".navbar-button");
const clicking = document.querySelector(".when-click");

function responsive() {
  if (clicking.style.display === "flex") {
    clicking.style.display = "none";
    xbutton.innerHTML = `<img class="navbar-img" src="navbar.jpg" alt="navbar">`;
  }else {
    xbutton.innerHTML = `<img class="navbar-img" src="x-icon.jpg" alt="navbar">`;
    clicking.style.display = "flex";
  }
}
