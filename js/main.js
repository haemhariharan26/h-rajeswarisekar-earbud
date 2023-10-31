

// question ask about console error and images

(() => {

  //HotSpot object array
  const hotspots = [
    {
      id: "hotspot-1",
      position: "50.64203781932278m 500.1655192434828m -25.487933315367457m",
      normal: "0.08717427877460024m 0.001712260987459407m -0.9961916047038537m",
      visibilityAttribute: "visible",
      image: "../images/skip.svg",
      annotation: {
        title: "Skip/Play Back Songs",
        description: "Skip as many songs as you want, and skip back to all your favourite songs.",
      },
    },
    {
      id: "hotspot-2",
      position: "-40.74815807965315m 316.15727362709094m -23.12639141851534m",
      normal: "0.45098019910760695m 0.3558793177885306m -0.8185149792051659m",
      visibilityAttribute: "visible",
      image: "../images/battery.svg",
      annotation: {
        title: "Battery Light and Volume Slider",
        description: "The battery light is a 2 in 1 that functions as a volume slider aswell.",
      },
    },
    {
      id: "hotspot-3",
      position: "157.16903525908833m 422.0847346256417m 56.53733933821843m",
      normal: "0.8336247536691919m -0.11831062351244646m 0.5395112292010943m",
      visibilityAttribute: "visible",
      image: "../images/hotspot-images.svg",
      annotation: {
        title: "High Quality Sound",
        description: "High quality surround sound forever!",
      },
    },
    {
      id: "hotspot-5",
      position: "9.590505287564497m 550.7568709138694m 83.50520154996329m",
      normal: "-0.1161910535765589m 0.11107938030835081m 0.9869959525444277m",
      visibilityAttribute: "visible",
      image: "../images/fast-charger.svg",
      annotation: {
        title: "Lightning Fast Charger",
        description: "Charges 4x faster than your phone.",
      },
    },
    {
      id: "hotspot-6",
      position: "-37.68962719614919m 394.1449677344069m 151.90409520103628m",
      normal: "-0.8822996849776343m 0.21716687481586824m 0.4175952758007165m",
      visibilityAttribute: "visible",
      image: "../images/pillow.svg",
      annotation: {
        title: "Comfy Quality Silicone",
        description: "Comes with three pairs of silicone ear pods.",
      },
    },
  ];

  // varibles
  const model = document.querySelector("#model")
  const hotSpots = document.querySelectorAll(".Hotspot");



  function createHotspotButtons() {
    hotspots.forEach(hotspot => {
      //Creating an button element on the html 
      const button = document.createElement("button");

      button.classList.add("Hotspot");
      //Setting the button elements "slot" value for the current hotspot in for loop
      button.slot = hotspot.id;

      //setting the position value for the current hotspot in for loop 
      const positionData = hotspot.position;
      const visibilityAttribute = hotspot.visibilityAttribute;

      button.dataset.position = positionData;
      button.dataset.normal = hotspot.normal;
      button.dataset.visibilityAttribute = visibilityAttribute;

      const annotation = hotspot.annotation;
      const annotationDiv = document.createElement("div");
      annotationDiv.classList.add("HotspotAnnotation");
      annotationDiv.innerHTML = `<h3>${annotation.title}</h3><p>${annotation.description}</p>`;

      button.appendChild(annotationDiv);

      model.appendChild(button);

      button.addEventListener("mouseover", showInfo);
      button.addEventListener("mouseout", hideInfo);
    });
  }

  createHotspotButtons();

  // function

  // function loaded() {
  //   console.log(hotSpots);
  //   hotSpots.forEach(hotSpot => {
  //   })
  // }

  function showInfo(e) {
    let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);

    selected.style.display = "block";
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo(e) {
    let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
    gsap.to(selected, 1, { autoAlpha: 0 });

  }

  // event listners

  //model.addEventListener("load", loaded);

})();