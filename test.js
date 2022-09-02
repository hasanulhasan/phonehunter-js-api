const loadData = async(searchText) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  const res = await fetch(url);
  const data = await res.json();
  displayPhones(data.data);
}

//displaye phone and appending child
const displayPhones = phones => {
  console.log(phones);
  
  const showall = document.getElementById('show-all');
  if(phones.length >= 10){
    phones = phones.slice(0,10);
    showall.classList.remove('d-none');
  }
  else{
    showall.classList.add('d-none');
  }
  
  const phoneContainer = document.getElementById('phone-container');
  phoneContainer.innerHTML = ``
  // no found message
  const warningText = document.getElementById('no-found-msg');
  if(phones.length === 0) {
    warningText.classList.remove('d-none');
    toggleSpnier(false);
  }
  else{
    warningText.classList.add('d-none');

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

//search button clicked
const searchBtn = document.getElementById('btn-search');
searchBtn.addEventListener('click', function(){
  toggleSpnier(true);
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  console.log('search button clicked', searchText);
  loadData(searchText);
})

//spninner condition
const toggleSpnier = isloading => {
  const loader = document.getElementById('loader');
  if(isloading){
    loader.classList.remove('d-none');
  }
  else{
    loader.classList.add('d-none');
  }
}

// Enterbutton manipulation
const searchOption = document.getElementById('search-field');
searchOption.addEventListener('keydown', function(e){
  console.log(e.key);
  if(e.key === 'Enter'){
    console.log('if kaj kortece')
  }
})

loadData();