      const options = [
        "army men on chess with checkers",
        "The Glaggle Man",
        "Peter Griffin Trololo",
        "My Birthday Is 9/23",
        "Were very proud of course, flies anyway because bees dont need vacations.",
        "We love bob",
        "Bob loves pirating Shrek 1-2",
        "We Do a Bit of Trolling",
        "Love yourself now!",
        "Splatoon 3 is so fucking w",
        "I love Oneshot so much",
        "Rice Spice",
        "Gas Stove And Fridge",
        "🏳️‍⚧️ Trans Rights 🏳️‍⚧️",
        "He no like the banana",
        "Fuck It We Ball",
        "Har Har Har Har",
        "My name is Walter Hartwell White",
        "Red white and blue are the colors of freedom until they start flashing behind you",
        "The rainbow Handheld Portal Device: It is very gay chell",
        "fuit gummy",
      ];

      function changeText() {
        const randomIndex = Math.floor(Math.random() * options.length);
        const randomText = options[randomIndex];
        document.getElementById("random-h1").textContent = randomText;
      }
