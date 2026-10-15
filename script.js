const ban = document.getElementById("banner");

const bann= document.createElement("img");
bann.src = "assets/1.jpg";
 
ban.appendChild(bann);


const data = [
  {
    title: "Viaje 1",
    description: "Buen sitio, creo",
    url_img: "assets/viajes-2.jpg"
  },
  {
    title: "Viaje 2",
    description: "Le gusta a mi perro",
    url_img: "assets/viajes-5.jpg"
  },
  {
    title: "Viaje 3",
    description: "Esta bien para lo que ofrece",
    url_img: "assets/viajes-3.jpg"
  }
];
const tabl = document.getElementById("viajes");

for(let i = 0; data.length; i++){
    const imagen = document.createElement("img")
    imagen.src = `${data[i].url_img}`;
    const titu = document.createElement("h3")
    titu.textContent = `${data[i].title}`;
    const text = document.createElement("p")
    text.textContent = `${data[i].description}`;
    tabl.appendChild(imagen);
    tabl.appendChild(titu);
    tabl.appendChild(text);
}