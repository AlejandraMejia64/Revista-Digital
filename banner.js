const banners = [
  {
    image: "imgindex/img1.png",
    title: "Uso excesivo de la tecnología y rendimiento académico",
    text: "Una revista digital para informar, reflexionar y promover hábitos responsables en 1ero de Bachillerato."
  },
  {
    image: "imgindex/img2.png",
    title: "Desconexión emocional en entornos digitales",
    text: "El impacto de la sobreexposición tecnológica en la infancia y el desarrollo personal."
  },
  {
    image: "imgindex/img4.png",
    title: "Distracción en el aula por dispositivos móviles",
    text: "Cómo el uso inadecuado de la tecnología afecta la atención y el aprendizaje escolar."
  },
  {
  image: "imgindex/img3.png",
  title: "Fatiga e insomnio digital",
  text: "El uso nocturno de dispositivos afecta el descanso y la concentración escolar."
},
{
  image: "imgindex/img5.png",
  title: "Aislamiento social",
  text: "La dependencia tecnológica puede alejar a los jóvenes de la interacción real."
},
{
  image: "imgindex/img6.png",
  title: "Estrés académico",
  text: "Las distracciones digitales reducen el tiempo de estudio y aumentan la presión escolar."
},

];

let current = 0;
function rotateBanner() {
  const bannerImage = document.getElementById("bannerImage");
  const bannerTitle = document.getElementById("bannerTitle");
  const bannerText = document.getElementById("bannerText");
  const bannerContent = document.getElementById("bannerContent");
  

  bannerContent.style.opacity = 0;

  setTimeout(() => {
    bannerImage.style.backgroundImage = `url('${banners[current].image}')`;
    bannerTitle.textContent = banners[current].title;
    bannerText.textContent = banners[current].text;
    bannerContent.style.opacity = 1;
  }, 500);

  current = (current + 1) % banners.length;
}

setInterval(rotateBanner, 5000);