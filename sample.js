let searchInputEl=document.getElementById("searchInput");
let searchResultsEl=document.getElementById("searchResults");
let spinner=document.getElementById("spinner");
function createAndAppendSearchResults(result){
     let resultItemEl=document.createElement("div");
     resultItemEl.classList.add("result-item"); 
     searchResultsEl.appendChild(resultItemEl);
     let {link,title,description}=result;
     let titleEl=document.createElement("a");
     titleEl.href=link;
     titleEl.target="_blank";
     titleEl.textContent=title;
     titleEl.classList.add("result-title");
     resultItemEl.appendChild(titleEl); 
     let titleBreakEl=document.createElement("br");
     resultItemEl.appendChild(titleBreakEl); 
     let urlEl=document.createElement("a");
     urlEl.href=link;
     urlEl.target="_blank";
     urlEl.textContent=link;
     urlEl.classList.add("result-url");
     resultItemEl.appendChild(urlEl); 
     let linkBreakEl=document.createElement("br");
     resultItemEl.appendChild(linkBreakEl); 
     let descriptionEl=document.createElement("p");
     descriptionEl.classList.add("link-description");
     descriptionEl.textContent=description;
     resultItemEl.appendChild(descriptionEl);
}
function displayResults(searchResults){
     spinner.classList.toggle("d-none");
    for(let result of searchResults){
    createAndAppendSearchResults(result);
    }
}
function searchWikipedia(event){
    
    if(event.key==="Enter"){
        spinner.classList.toggle("d-none");
        searchResultsEl.textContent="";
        let searchInput=searchInputEl.value;
        let url="https://apis.ccbp.in/wiki-search?search="+searchInput;
        let options ={
            method:"GET",
             
        };
        fetch(url,options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsondata){
             let {search_results}=jsondata;
             displayResults(search_results);
        });
      
    }
}
searchInputEl.addEventListener("keydown",searchWikipedia);
