const cryptoContainer = document.querySelector('.crypto-container')
const sportsContainer = document.querySelector('.sports-container')
const moviesContainer = document.querySelector('.movies-container')
const navContainer = document.querySelector(".navbar")
const homecontainer = document.querySelector('.head-lines')




function navbar() {

  const cardd = document.createElement('div')
  cardd.classList.add('cardd')

  const heading=document.createElement('h1')
  heading.innerHTML="NEWS API"
  heading.style.color='orange'
  

  const btn0 = document.createElement('a')
  btn0.innerHTML = "HEAD LINES"
  btn0.style.color='white'

  btn0.addEventListener('click', () => {
   
    cryptoContainer.classList.add('hide')
    sportsContainer.classList.add('hide')
    moviesContainer.classList.add('hide')
    homecontainer.classList.remove('hide')
  
  })

  const btn1 = document.createElement('a')
  btn1.innerHTML = "CRYPTO"
  btn1.style.color='white'

  btn1.addEventListener('click', () => {
   
    cryptoContainer.classList.remove('hide')
    sportsContainer.classList.add('hide')
    moviesContainer.classList.add('hide')
    homecontainer.classList.add('hide')
  })


  const btn2 = document.createElement('a')
  btn2.innerHTML = "SPORTS"
  btn2.style.color='white'

  btn2.addEventListener('click', () => {
   
    cryptoContainer.classList.add('hide')
    sportsContainer.classList.remove('hide')
    moviesContainer.classList.add('hide')
    homecontainer.classList.add('hide')
  })

  const btn3 = document.createElement('a')
  btn3.innerHTML = "MOVIES"
  btn3.style.color='white'

  btn3.addEventListener('click', () => {
   
    cryptoContainer.classList.add('hide')
    sportsContainer.classList.add('hide')
    moviesContainer.classList.remove('hide')
    homecontainer.classList.add('hide')
  })

  cardd.appendChild(heading)
  cardd.appendChild(btn0)
  cardd.appendChild(btn1)
  cardd.appendChild(btn2)
  cardd.appendChild(btn3)
  
  navContainer.appendChild(cardd)
  





}
navbar()
getNewsApi();
getCryptoData();
getSportsData();
getMoviesData();

function getNewsApi() {

 
  fetch('https://newsapi.org/v2/everything?q=news&apiKey=e10d5fde840f41d69ae9c347dd0cbe6d')
    .then(response => {
      return response.json();
    }).then(data => {
      console.log(data)
      createNewApi(data.articles)
    })
}

function createNewApi(apiData) {
  apiData.forEach((news) => {
    const card0 = document.createElement('div')
    card0.classList.add('card')


    const image = document.createElement('img')
    image.src = news.urlToImage
    image.height = 180
    image.style.width = 180
    image.alt = "No Image Found"

    const head = document.createElement('h2')
    head.innerHTML = news.author

    const paraa = document.createElement('h3')
    paraa.innerHTML = news.title

    const para = document.createElement('p')
    para.innerHTML = news.description

    const a = document.createElement('a')
    a.innerHTML = 'Read more'
    a.href=news.url

    card0.appendChild(image)
    card0.appendChild(head)
    card0.appendChild(paraa)
    card0.appendChild(para)
    card0.appendChild(a)


    homecontainer.appendChild(card0)


  });

}



function getCryptoData() {

  fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=e10d5fde840f41d69ae9c347dd0cbe6d')
    .then(response => {
      return response.json();
    }).then(data => {
      console.log(data)
      createCryptoCard(data.articles)
    })
}


function createCryptoCard(apiData) {
  apiData.forEach((bitcoin) => {
    const card = document.createElement('div')
    card.classList.add('card')


    const image = document.createElement('img')
    image.src = bitcoin.urlToImage
    image.height = 150
    image.style.width = 150
    image.alt = "No Image Found"

    const head = document.createElement('h2')
    head.innerHTML = bitcoin.author

    const paraa = document.createElement('h3')
    paraa.innerHTML = bitcoin.title

    const para = document.createElement('p')
    para.innerHTML = bitcoin.description

    const a = document.createElement('a')
    a.innerHTML = 'Read more'
    a.href=bitcoin.url

    card.appendChild(image)
    card.appendChild(head)
    card.appendChild(paraa)
    card.appendChild(para)
    card.appendChild(a)


    cryptoContainer.appendChild(card)


  });

}

function getSportsData() {

  fetch('https://newsapi.org/v2/everything?q=sports&apiKey=e10d5fde840f41d69ae9c347dd0cbe6d')
    .then(response => {
      return response.json();
    }).then(data => {
      console.log(data)
      createSportsCard(data.articles)
    })
}


function createSportsCard(apiData) {
  apiData.forEach((data) => {
    const card1 = document.createElement('div')
    card1.classList.add('card')


    const image = document.createElement('img')
    image.src = data.urlToImage
    image.height = 200
    image.style.width = 200
    image.alt ="No Image Found"

    const head = document.createElement('h2')
    head.innerHTML = data.author

    const paraa = document.createElement('h3')
    paraa.innerHTML = data.title

    const para = document.createElement('p')
    para.innerHTML = data.description
    const a = document.createElement('a')
    a.innerHTML = 'Read more'
    a.href=data.url

    card1.appendChild(image)
    card1.appendChild(head)
    card1.appendChild(paraa)
    card1.appendChild(para)
    card1.appendChild(a)



    sportsContainer.appendChild(card1)


  });

}


function getMoviesData() {

  fetch('https://newsapi.org/v2/everything?q=entertainment&apiKey=e10d5fde840f41d69ae9c347dd0cbe6d')
    .then(response => {
      return response.json();
    }).then(data => {
      console.log(data)
      createMoviescard(data.articles)
    })
}

  function createMoviescard(apiData) {
    apiData.forEach((data) => {
      const card2 = document.createElement('div')
      card2.classList.add('card')


      const image = document.createElement('img')
      image.src = data.urlToImage
      image.height = 200
      image.style.width = 200
      image.alt = "No Image Found"

      const head = document.createElement('h2')
      head.innerHTML = data.author

      const paraa = document.createElement('h3')
      paraa.innerHTML = data.title

      const para = document.createElement('p')
      para.innerHTML = data.description

      const a = document.createElement('a')
      a.innerHTML = 'Read more'
      a.href=data.url

      card2.appendChild(image)
      card2.appendChild(head)
      card2.appendChild(paraa)
      card2.appendChild(para)
      card2.appendChild(a)

      moviesContainer.appendChild(card2)


    });
  }