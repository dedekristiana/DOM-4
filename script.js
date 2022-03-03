const container = document.getElementsByClassName("container");
const card = document.getElementById("card");
const h2 = document.getElementsByTagName("h2");
const img = document.getElementsByTagName("img");

container[0].style.color = "blue";

for (let i = 0; i < h2.length; i++) {
  h2[i].style.color = "red";
}

img[0].src =
  "https://www.99.co/blog/indonesia/wp-content/uploads/2021/07/idntimes-com.jpg";
