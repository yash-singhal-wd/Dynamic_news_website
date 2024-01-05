const xhr = new XMLHttpRequest();
let elementToAddNewsInto = document.getElementById("newshere");

xhr.open('GET', 'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json', true);

let promise1 = new Promise(function(resolved, rejected){
    xhr.onload = function(){
        if(this.status == 200){
            resolved("Fetched successfully"); 
            let json = JSON.parse(this.responseText);
            let newsHtml = "";
            json.articles.forEach(element => {
                var content = `<hr>
                <div class="row my-4">
                  <div class="col-4 image" style="background-image: url(${element.urlToImage}); background-repeat: no-repeat; background-size: 380px 250px;">
                  </div>
                  <div class="col-8">
                    <div class="my-2 text-center"><b> ${element.title} </b></div>
                    ${element.content}
                    <div class="my-2 text-right text-muted"><span class="badge badge-secondary">- ${element.author} </span></b></div>
                  </div>
                </div>
                <hr>
                `
                newsHtml = newsHtml+content;
            });
            elementToAddNewsInto.innerHTML = newsHtml;
        } else {
            rejected(alert("Something went wrong"));
        }
    }
});

promise1.then(
    function(val) {
        console.log(val);
    },
    function(error){
        alert("Something went wrong");
    }
)

xhr.send();

// advertisement to add
let adv1 = document.getElementById("adv-container-1");
let adv2 = document.getElementById("adv-container-2");


const xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'https://api.unsplash.com/photos/random?count=2&client_id=YrtNEbcL5AgONLuiaxOiH2iX0nset_wd_BC6q8Y-pa4', true);

let promise2 = new Promise(function(resolved, rejected){
    xhr2.onload = function(){
        if(this.status == 200){
            resolved("Fetched successfully"); 
            let json = JSON.parse(this.responseText);
            adv1.style.backgroundImage = `url('${json[0].urls.full}')`;
            adv1.style.backgroundRepeat = 'no-repeat';
            adv1.style.backgroundSize = '260px 800px';
            adv2.style.backgroundImage = `url('${json[1].urls.full}')`;
            adv2.style.backgroundSize = '70px 670px'
            adv2.style.backgroundSize = '260px 800px';

        } else {
            rejected(alert("Something went wrong"));
        }
    }

});

promise2.then(
    function(val) {
        console.log(val);
    },
    function(error){
        alert("Something went wrong");
    }
)

xhr2.send();

// alternate key: wPzRWkFlRXW_m_L9TLS5p6ENPa91e1WDzZQ1i_Q86E4