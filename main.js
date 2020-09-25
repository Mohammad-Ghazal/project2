const body = $(`body`);
const searchBox = $("#searchBox");
const iframeVidTitle = $("#iframeVidTitle");
const iFrame1 = $("#iFrame1");

const iFrameChanger = (id) => {
  let oldUrl = iFrame1.attr("src");
  videos.forEach((video) => {
    if (video["id"] === id) {
      iFrame1.attr("src", "https://www.youtube.com/embed/" + video.id);
      iframeVidTitle.text(video["title"]);
    }
  });

  $("#" + id).hide();
  let oldId = oldUrl.split("/");
  $("#" + oldId[oldId.length - 1]).show();
};

const rightSide = document.createElement("div");
rightSide.className = "rightSide";

//TODO:change to jquery
for (i = 0; i < videos.length; i++) {
  const thumbnail_parent = document.createElement("div");
  thumbnail_parent.className = "thumbnail_parent";
  thumbnail_parent.id = videos[i].id;
  const thumbnail = document.createElement("img");
  thumbnail.className = "thumbnail";
  thumbnail.src = videos[i].thumbnail;

  //Finally
  thumbnail.setAttribute("onClick", "iFrameChanger('" + videos[i].id + "')");
  const imgTitle = document.createElement("div");

  imgTitle.className = "imgTitle";

  imgTitle.innerText = videos[i].title;

  thumbnail_parent.append(thumbnail);
  thumbnail_parent.append(imgTitle);
  rightSide.append(thumbnail_parent);
}
body.append(rightSide);
//defult
$("#" + videos[0].id).hide();
