
 async function apendGif(event)
 { 
  event.preventDefault();
  console.log("Let's get this party started!");
   const searchTerm = document.getElementById("searchText").value;
    const imglink = await getGif(searchTerm);  
    const newDiv= document.createElement("div");
    const newImg= document.createElement("img");
    newImg.setAttribute("src",imglink);
    newDiv.append(newImg);
    document.getElementById("gifBox").append(newDiv);
 }
 const searchForm = document.getElementById("searchGif");
 searchForm.addEventListener("submit",apendGif);
 const removeButton = document.getElementById("removeImages");
 removeButton.addEventListener("click",removeImagesFunc);

 async function getGif(searchTerm)
 {
  const q = searchTerm;
  const api_key="MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
  let response = await axios.get(`http://api.giphy.com/v1/gifs/search`,{params:{q ,api_key}});
  const numberOfResults = response.data.data.length
  const randomOption = Math.floor(Math.random() * numberOfResults)
  const imglink = response.data.data[randomOption].images.fixed_height.url;
  return imglink ;
 }
 function removeImagesFunc ()
 {
  const gifBox = document.getElementById("gifBox");
  gifBox.innerHTML="";

 }
