

(() => {

  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    {
        image: "images/skip.svg",
        title: "Skip/Play Back Songs",
        text: "Skip as many songs as you want, and skip back to all your favourite songs.",
    },
    {
        image: "images/battery.svg",
        title: "Battery Light and Volume Slider",
        text: "The battery light is a 2 in 1 that functions as a volume slider aswell.",
    },
    {
        image: "images/hotspot-images.svg",
        title: "High Quality Sound",
        text: "High quality surround sound forever!",
    },
    {
        image: "images/fast-battery.svg",
        title: "Lightning Fast Charger",
        text: "Charges 4x faster than your phone.",
    },
    {
        image: "images/pillow.svg",
        title: "Comfy Quality Silicone",
        text: "Comes with three pairs of silicone ear pods.",
      
    },
  ];
 
  function modelLoaded() {
    hotspots.forEach(hotspot => {
      hotspot.style.display = "block";
    });
  }

  function loadInfoBox() {
      infoBoxes.forEach((infoBox, index) => {
   
      let selected = document.querySelector(`#hotspot-${index+1}`);

      const titleElement = document.createElement('h2');
      titleElement.textContent = infoBox.title;

      const textElement = document.createElement('p');
      textElement.textContent = infoBox.text;

      const imgElement = document.createElement('img');
      imgElement.src = infoBox.image;

      selected.appendChild(imgElement);
      selected.appendChild(titleElement);
      selected.appendChild(textElement);
    });
  }
  loadInfoBox();

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    // console.log("Open")
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    // console.log("close")
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

  gsap.from(".feature-box", 1.3, 
		{scrollTrigger: {
			trigger: "#componets",
			toggleActions:"restart pause reverse none"
		}, 
		y:300, ease:Bounce.easeOut
		});

})();