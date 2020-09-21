const body = $(`body`);

const image1 = $("#image1");
const title1 = $("#title1");
image1.attr("src", videos[0].thumbnail);
title1.attr("title", "dsdsdsds");
console.log(title1);



const thumbnail_parent=$("thumbnail_parent")

// to create a new html element use `document.createElement` and pass in the name of the tag you want to create
const newElement = document.createElement("h1");
// you can modify the newly created element's attributes by accessing it and changing the attributes for the values
newElement.innerText = "Headerddddddddddddddddddddddd One";
newElement.id = "header_id";



const new_div = document.createElement('div');
    new_div.className ='thumbnail_parent';    
    new_div.id='newDiv'
for(i=0;i<videos.length;i++){
    /* videos = [
  {
    id: "7yLxxyzGiko",
    title: "Kittens walk with a tiny chicken",
    thumbnail:*/
    const image=document.createElement('img');
    const a1=document.createElement('a');
    a1.target= '_blank',a1.href=videos[i].thumbnail;
    //image.id='image1';
    image.alt='Cinque Terre';
    image.width='200';
    image.height='125';
    //image.attr('href','youtube.jpg');
    image.src=videos[i].thumbnail;

    const title_div = document.createElement('div');
    title_div.className ='desc';    
    title_div.id=videos[i].id;
    title_div.innerText=videos[i].title;

    a1.append(image)
    
    new_div.append(a1);
    new_div.append(title_div)
    body.append(new_div);
    thumbnail_parent.append(new_div);

}


// <div class="gallery">
    //         <a target="_blank" href="img_5terre.jpg">
    //         <img id="image1" alt="Cinque Terre" width="600" height="400">
    //         </a>
    //         <div id="title1" class="desc">cat1</div>
    //     </div>
// to remove the header element use the `remove` method
//header.remove();