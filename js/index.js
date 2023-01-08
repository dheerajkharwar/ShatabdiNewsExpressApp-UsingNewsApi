

const xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://gnews.io/api/v4/top-headlines?&token=b90253662911d37bfa10196e28160758";

    // let source = "bbc-news";
    // let apiKey= "884c4840c0a846819b50156e75eba0fb";
    // let url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`;

xhr.open(method, url, true);
xhr.onload = function(){
    if(this.status === 200){
        let obj = JSON.parse(this.responseText);
        let articles = obj.articles;
        let news='';
        for(key in articles){
            news += `<div class="accordion-item">
            <h2 class="accordion-header" id="heading${key+1}">
              <button class="accordion-button collapsed btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${key+1}" aria-expanded="false" aria-controls="collapse${key+1}">
                ${articles[key]['title']}
              </button>
            </h2>
            <div id="collapse${key+1}" class="accordion-collapse collapse" aria-labelledby="heading${key+1}" data-bs-parent="#newsAccordian">
              <div class="accordion-body">${articles[key]['description']}<a href="${articles[key]['url']}" target="_blank">Read More...</a></div>
            </div>
          </div>`;
        }
        document.getElementById('newsAccordian').innerHTML = news;
    }
    else{
        console.error('Some error occured');
    }
}

xhr.send();