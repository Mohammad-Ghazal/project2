const body = $(`body`);
const searchBox = $("#searchBox");
const iframeVidTitle = $("#titleH1");

// const iFrameChanger =function(id){
const iFrame1 = $("#iFrame1");

const iFrameChanger = (id) => {
    console.log('iFrameChanger called');
  videos.forEach((video) => {
    //video['id']===id ?console.log(video['title']) //: 'else');
    if (video["id"] === id) {
      iFrame1.attr("src", "https://www.youtube.com/embed/" + video.id);
      //$('\''+'#'+id+'\'').fadeOut();
      console.log(id);
    }
  });

  //$('#'+videos[i].id+'\'').Show();
 
};
//iFrameChanger("Cz47GimSxIc");

const rightSide = document.createElement("div");
rightSide.className = "rightSide";

//TODO:change to jquery
for (i = 0; i < videos.length; i++) {
  //const thumbnail_parent1 =$('body').add( "div" ).addClass( "thumbnail_parent" );

  const thumbnail_parent = document.createElement("div");
  thumbnail_parent.className = "thumbnail_parent";
  thumbnail_parent.id=videos[i].id;
  const thumbnail = document.createElement("img");
  thumbnail.className = "thumbnail";
  thumbnail.src = videos[i].thumbnail;
 
 



  //Finally
  thumbnail.setAttribute('onClick','iFrameChanger(\''+videos[i].id+'\')');
  const imgTitle = document.createElement("div");

  imgTitle.className = "imgTitle";

  imgTitle.innerText = videos[i].title;

  thumbnail_parent.append(thumbnail);
  thumbnail_parent.append(imgTitle);
  rightSide.append(thumbnail_parent);
}
body.append(rightSide);
