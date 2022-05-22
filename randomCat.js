const button = document.querySelector('#cat');
const url = 'https://api.thecatapi.com/v1/images/search?size=full';

const getCatImage = function() {
    axios.get(url)
    .then(
        (response) => {
            const imgURL = response.data[0].url;
            const catImage = document.createElement("img");
            catImage.src = imgURL;
            catImage.style.width = "450px"
            catImage.style.height ="590px";
            document.querySelector("#catImgBox").appendChild(catImage);
        }
    )
}
window.onload = function(){
    getCatImage();
}