
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={}&appid={API key} 

// var API_Key = 'a2f3feb72761a5fddc83462ec3263530'


async function restCountry() {

    let rest_api = await fetch('https://restcountries.com/v3.1/all');

    let output = await rest_api.json();

    // console.log(output[0]);

    var body = document.querySelector('body')
                //    let parent_container = document.createElement('div')
                //    parent_container.classList.add('parentContainer')
                   let container = document.createElement('div')
                   container.classList.add('container')
                   body.append(container)
                //    parent_container.append(container)

    for(let i of output){
        
          try{
                   

                let containerChild = document.createElement('div')
                containerChild.classList.add('card')
                container.append(containerChild)
                
                let header1 = document.createElement('div')
                header1.classList.add('card-header')
                // header1.classList.add('bg-primary')

                containerChild.append(header1)
                
                let cardBody = document.createElement('div')
                cardBody.classList.add('card-body')
                containerChild.append(cardBody)

                let footer = document.createElement('div')
                footer.classList.add('card-footer')
                containerChild.append(footer)
                      

                       let lat = i.latlng[0];
                       let lng = i.latlng[1];

                       footer.setAttribute('lat',lat);
                       footer.setAttribute('lng',lng);


                      //  console.log(i.latlng)

                      // Name :
                      let name_para = document.createElement('h1')
                      name_para.innerText = i.name.common
                      header1.append(name_para)
                    //   console.log(i.name.common);

                      // flags:
                      let flag_image = document.createElement('img')
                      flag_image.setAttribute('src',i.flags.png)
                      cardBody.append(flag_image)

                    //   console.log(i.flags.png);

                      // capital:
                      let capital_para = document.createElement('p')
                      capital_para.innerText = "capital: " + i.capital[0]
                      cardBody.append(capital_para)
                    //   console.log("capital: ",i.capital[0]);
                       
                      // region:
                      let region_para = document.createElement('p')
                      region_para.innerText = "Region: " + i.region
                      cardBody.append(region_para)
                    //   console.log("Region: ",i.region);
                       
                      // country code:
                      let countryCode_para = document.createElement('p')
                      countryCode_para.innerText = "Country Code: " + i.cca2
                      cardBody.append(countryCode_para)
                    //   console.log("Country Code: ",i.cca2);

                     let button = document.createElement('div')
                     button.classList.add('btn')
                     button.classList.add('btn-primary')
                    //  button.classList.add('btn-block')

                     button.setAttribute('onclick', 'weatherData(this)')
                     button.innerText = "Click for Weather"
                     footer.append(button)
          } catch{
            
          }

    }

}

restCountry();


async function weatherData(e) {
    
    //  console.log(e)

    let parent = e.parentElement;

    // console.log(parentEle)

    let lat = parent.getAttribute('lat');
    let lng = parent.getAttribute('lng');


    // console.log(lat,lng);

   var API_Key = 'a2f3feb72761a5fddc83462ec3263530'
   let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_Key}`
   

    let data = await fetch(url);

    let data1 = await data.json();

    console.log(data1.weather[0]);

    
}

