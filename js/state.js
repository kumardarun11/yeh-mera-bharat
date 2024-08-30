const stateInfo = [
  {
    stateName: 'Andhra Pradesh',
    stateImage: '../images/Andhra.jpg',
    stateAcr: 'Kohinoor of India',
    redirectUrl: 'https://www.ap.gov.in/#/', 
  },
  {
    stateName: 'Arunachal Pradesh',
    stateImage: '../images/Arunachal.webp',
    stateAcr: 'Land of the Rising Sun',
    redirectUrl: 'https://arunachalpradesh.gov.in/', 
  },
  {
    stateName: 'Assam',
    stateImage: '../images/Assam.webp',
    stateAcr: 'The Tea Garden of India',
    redirectUrl: 'https://assam.gov.in/',
  },
  {
    stateName: 'Bihar',
    stateImage: '../images/bihar.jpg',
    stateAcr: 'The Land of Buddha',
    redirectUrl: 'https://state.bihar.gov.in/main/CitizenHome.html', 
  },
  {
    stateName: 'Chhattisgarh',
    stateImage: 'https://lh5.googleusercontent.com/p/AF1QipOyd_JnlUkG3I2MtloIq3RFKCBU2OQhcCzmDpf5=w675-h390-n-k-no',
    stateAcr: 'Rice Bowl of India',
    redirectUrl: 'https://cgstate.gov.in/en', 
  },
  {
    stateName: 'Goa',
    stateImage: '../images/goa.jpeg',
    stateAcr: 'Pearl of the Orient',
    redirectUrl: 'https://www.goa.gov.in/', 
  },
  {
    stateName: 'Gujarat',
    stateImage: '../images/guj.jpg',
    stateAcr: 'Jewel of Western India',
    redirectUrl: 'https://gujaratindia.gov.in/', 
  },
  {
    stateName: 'Haryana',
    stateImage: 'https://lh5.googleusercontent.com/p/AF1QipMgvEaA59uOASsReL-iSn2kbHBsALjgcEHotNyM=w675-h390-n-k-no',
    stateAcr: 'The Abode of God',
    redirectUrl: 'https://haryana.gov.in/', 
  },
  {
    stateName: 'Himachal Pradesh',
    stateImage: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTWNR93D2R5V3ksOgAaU1qdfSKB2W5ZnFGDuhtQqoT5JbMoAJIP55KiUPYCQccdRKGsPDwxccLgwDLCcFJc4ftRMycOZ9kCt2xVBwQ3RA',
    stateAcr: 'Land of Gods (Dev Bhoomi)',
    redirectUrl: 'https://himachal.nic.in/en-IN/',
  },
  {
    stateName: 'Jharkhand',
    stateImage: '../images/jhar.jpg',
    stateAcr: 'The Land of Forests',
    redirectUrl: 'https://www.jharkhand.gov.in/', 
  },
  {
    stateName: 'Karnataka',
    stateImage: 'https://www.ibef.org/assets/images/states/Karnataka-2.jpg',
    stateAcr: 'Silicon Valley of India',
    redirectUrl: 'https://www.karnataka.gov.in/',
  },
  {
    stateName: 'Kerala',
    stateImage: '../images/ker1.jpg',
    stateAcr: "God's Own Country",
    redirectUrl: 'https://kerala.gov.in/', 
  },
  {
    stateName: 'Madhya Pradesh',
    stateImage: '../images/mp.jpg',
    stateAcr: 'The Heart of India',
    redirectUrl: 'https://www.mp.gov.in/', 
  },
  {
    stateName: 'Maharashtra',
    stateImage: '../images/Maha.jpg',
    stateAcr: 'Gateway of India',
    redirectUrl: 'https://www.maharashtra.gov.in/', 
  },
  {
    stateName: 'Manipur',
    stateImage: 'https://lh5.googleusercontent.com/p/AF1QipNJWpw4SW4GhSmbF-ir71GEb1SzrIqTVR0c6BxX=w675-h390-n-k-no',
    stateAcr: 'Jewel of India',
    redirectUrl: 'https://manipur.gov.in/', 
  },
  {
    stateName: 'Meghalaya',
    stateImage: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTzKVFZUMPxEZFi58PAMIZbS1gU5AV6HJ9LrbmRIVRrS45EalBACCtnsgy5WsiCF0Ck90gI23JmSJDAWjie82eoerkewFae9RtxrVfnCw',
    stateAcr: 'The Abode of Clouds',
    redirectUrl: 'https://meghalaya.gov.in/', 
  },
  {
    stateName: 'Mizoram',
    stateImage: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSdcCHoBKl6i4cLxl0-9AMNKU8SbcbpVpB2jL1BCCxLEaeTFOXq8MNy0AxqaWMzFNMdOnvZ7UqC_AC-8eYkzB2FUxmaPR-LyoOSFzeTNw',
    stateAcr: 'The Land of Blue Mountains',
    redirectUrl: 'https://mizoram.gov.in/', 
  },
  {
    stateName: 'Nagaland',
    stateImage: 'https://lh5.googleusercontent.com/p/AF1QipO9kHncuc3BcoEmzQPtkeKsPpUfQKsBq6fFwf7Q=w675-h390-n-k-no',
    stateAcr: 'Land of Festivals',
    redirectUrl: 'https://www.nagaland.gov.in/',
  },
  {
    stateName: 'Odisha',
    stateImage: '../images/puri.jpeg',
    stateAcr: 'The Soul of India',
    redirectUrl: 'https://www.odisha.gov.in/', 
  },
  {
    stateName: 'Punjab',
    stateImage: 'https://lh5.googleusercontent.com/p/AF1QipMU8xPHOakcdPjjT4bNIiIxuTiv6pQ7DRWxIGfn=w675-h390-n-k-no',
    stateAcr: 'The Land of Five Rivers',
    redirectUrl: 'https://punjab.gov.in/', 
  },
  {
    stateName: 'Rajasthan',
    stateImage: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSXjEAbSBawJXIz9-NJCInmI0A-aK-bekPntYDYs3vF_5-NF3h8T3xVQW3kwwvcnF5tEpfkeHC5D8yNhtAo7VM2Yo8JXa7VaIRittXEnw',
    stateAcr: 'The Land of Kings',
    redirectUrl: 'https://www.rajasthan.gov.in/', 
  },
  {
    stateName: 'Sikkim',
    stateImage: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTYD6oBnywmN39VqX7MKQlYVtf52dM0VIUUGUH0uFPCm-h82-HMxv6JxO_XKjd1RWIWo7rVLTMGW1JXKaiWw9R3s-09PSl_mqk8vtfK4Q',
    stateAcr: 'Valley of Flowers',
    redirectUrl: 'https://sikkim.gov.in/', 
  },
  {
    stateName: 'Tamil Nadu',
    stateImage: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTRIzW3EatgomM5J4PKjGwjQNpAP7MKOUDcUnJSHHej1o1n-MrvMUq9tb71QNccbtMK7YekmNghWt4J1HIh6UdT7KeGc3Y3uYAOxpvNCg',
    stateAcr: 'Land of Temples',
    redirectUrl: 'https://www.tn.gov.in/', 
  },
  {
    stateName: 'Telangana',
    stateImage: '../images/39fdd3a421e4a9a7122fc0ffadc4c68b.jpg',
    stateAcr: 'The Land of Biryani',
    redirectUrl: 'https://www.telangana.gov.in/',
  },
  {
    stateName: 'Tripura',
    stateImage: '../images/Unakoti__ঊনকোটি_01.jpg',
    stateAcr: 'The Queen of the Eastern Hills',
    redirectUrl: 'https://tripura.gov.in/', 
  },
  {
    stateName: 'Uttar Pradesh',
    stateImage: 'https://cdn.britannica.com/22/124522-050-D8C3C313/pilgrims-Varanasi-Ganges-River-India-Uttar-Pradesh.jpg',
    stateAcr: 'The Heartland of India',
    redirectUrl: 'https://up.gov.in/', 
  },
  {
    stateName: 'Uttarakhand',
    stateImage: '../images/licensed-image.jpeg',
    stateAcr: 'The Land of the Gods',
    redirectUrl: 'https://uk.gov.in/', 
  },
  {
    stateName: 'West Bengal',
    stateImage: '../images/download.jpeg',
    stateAcr: 'Cultural Capital of India',
    redirectUrl: 'https://wb.gov.in/',
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

