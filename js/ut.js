const stateInfo = [
    {
      stateName: 'Andaman and Nicobar Islands',
      stateImage: '../images/anda.jpg',
      stateAcr: 'Emerald Isles',
      redirectUrl: 'https://www.ap.gov.in/#/', 
    },
    {
        stateName: 'Chandigarh',
        stateImage: '../images/ch.jpg',
        stateAcr: 'Emerald Isles',
        redirectUrl: 'https://www.ap.gov.in/#/', 
      },
    {
      stateName: 'Dadra and Nagar Haveli',
      stateImage: '../images/dnh.jpg',
      stateAcr: 'Land of the Rising Sun',
      redirectUrl: 'https://arunachalpradesh.gov.in/', 
    },
    {
      stateName: 'Daman and Diu',
      stateImage: '../images/dd.jpg',
      stateAcr: 'The Tea Garden of India',
      redirectUrl: 'https://assam.gov.in/',
    },
    {
      stateName: 'Delhi',
      stateImage: '../images/del.webp',
      stateAcr: 'Dilwalion ki Dilli',
      redirectUrl: 'https://delhi.gov.in/', 
    },
    {
      stateName: 'Jammu & Kashmir',
      stateImage: '../images/jk.jpg',
      stateAcr: 'Rice Bowl of India',
      redirectUrl: 'https://cgstate.gov.in/en', 
    },
    {
        stateName: 'Ladakh',
        stateImage: '../images/ladakh.jpg',
        stateAcr: 'The Land of High Passes',
        redirectUrl: 'https://ladakh.nic.in', 
    },
    {
        stateName: 'Lakshadweep',
        stateImage: '../images/laksha.jpg',
        stateAcr: 'The Coral Paradise of India',
        redirectUrl: 'https://www.ap.gov.in/#/', 
    },
    {
      stateName: 'Pondicherry',
      stateImage: '../images/pond.jpg',
      stateAcr: 'The French Riviera of the East',
      redirectUrl: 'https://www.goa.gov.in/', 
    },
  ];
  
  const swiperContainer = document.querySelector('#swiper-wrapper-1');
  const searchBar = document.querySelector('#search');
  
  const showSlider = (states) => {
    swiperContainer.innerHTML = ''; 
    states.forEach((item) => {
      swiperContainer.innerHTML += `<div class="swiper-slide" style="padding: 10px;">
            <div class="box" style="background:url(${item.stateImage}) no-repeat;background-size:cover;">
              <div class="content">
                <h2>${item.stateName}</h2>
                <h3>${item.stateAcr}</h3>
                <a href="#" class="btns" onclick="showPopup('${item.stateName}', '${item.redirectUrl}')">
                  <i class="fa fa-plane fa-2x"></i>
                </a>
              </div>
            </div>
          </div>`;
    });
  };
  
  const showPopup = (stateName, redirectUrl) => {
    const userConfirmed = confirm(`Do you want to explore ${stateName}?`);
    if (userConfirmed) {
      window.location.href = redirectUrl;
    }
  };
  
  showSlider(stateInfo);
  
  searchBar.addEventListener('keyup', (input_value) => {
    const inputValue = input_value.target.value.toLowerCase();
    const findStates = stateInfo.filter((item) => {
      return item.stateName.toLowerCase().includes(inputValue);
    });
    showSlider(findStates);
  });
  
  