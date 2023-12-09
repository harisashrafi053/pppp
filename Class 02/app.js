let obj1 = {
  name: "Your name",
  city: "Your City",
};

let new_user = obj1;

//  new_user.name = "Muhammad Haris"

//  new_user.city = "Karachi"

//  console.log(new_user);
//  console.log(obj1);

// let { name: new_name, city: new_city } = new_user;

// new_name = "Haris";

// console.log("Name:", new_name, "City:", new_city);

// // let arr = [1,2,3,4,5]

// // const [firstind,secondind,thirdind,fourthind,fifthind] = arr

// // console.log(fourthind);
// var a = "Muhammad";

// var b = "Haris";

// console.log(`${a} ${b}`);

const data_obj = {
  title: "Product Title",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  image_url:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png",
};

const {
  title: card_title,
  description: card_description,
  image_url: card_img_url,
} = data_obj;

const card = document.getElementById("inner_html");

card.innerHTML = `<div class="card" style="width: 18rem;">
<img src="${card_img_url}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${card_title}</h5>
  <p class="card-text">${card_description}</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`;
