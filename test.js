const loadData = async(searchText) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  const res = await fetch(url);
  const data = await res.json();
  displayPhones(data.data);
}

const displayPhones = phones => {
  console.log(phones);
  // phones = phones.slice(0,20);
  const phoneContainer = document.getElementById('phone-container');
  phoneContainer.innerHTML = ``
  // no found message
  const warningText = document.getElementById('no-found-msg');
  if(phones.length === 0) {
    warningText.classList.remove('d-none')
  }
  else{
    warningText.classList.add('d-none')
  }
  phones.forEach(phone => {
    console.log(phone)
    const mobileDiv = document.createElement('div');
    mobileDiv.classList.add('col');
    mobileDiv.innerHTML = `
      <div class="card p-3">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${phone.phone_name}</h5>
        <h5 class="card-title">${phone.brand}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    `
    phoneContainer.appendChild(mobileDiv);
    toggleSpnier(false);
  })
}

const searchBtn = document.getElementById('btn-search');
searchBtn.addEventListener('click', function(){
  toggleSpnier(true);
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  console.log('search button clicked', searchText);
  loadData(searchText);
})

const toggleSpnier = isloading => {
  const loader = document.getElementById('loader');
  if(isloading){
    loader.classList.remove('d-none');
  }
  else{
    loader.classList.add('d-none');
  }
}

loadData();