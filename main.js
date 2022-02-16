let App = Vue.createApp({
    data() {
        return {
            healthValue: 70,
            healthValueDecrease: 2,
            healthValueIncrease: 8,
            fullValue: 100,
            happyValue: 85,
            neutralValue: 45,
            worriedValue: 20, 
            wantToEatValue: 10,
            sadValue: 1,
            isEating: false,
            isSuperEating: false
        }
    },
    created() {
        setInterval(() => {
            if (this.healthValue > 0 && this.isEating == false) {
                this.healthValue -= this.healthValueDecrease;
            }
        }, 1000)
    },
    computed: {
        computeImage() {
            if (this.isEating == true) {
                // eating
                return "https://khyeborg.github.io/simulationHostedAssets/images/eating.gif";
            }

            else {
                // really full: 100
                if (this.healthValue >= this.fullValue) {
                    return "https://khyeborg.github.io/simulationHostedAssets/images/full.png";
                }

                // happy: 85 - 100
                else if (this.healthValue >= this.happyValue) {
                    return "https://khyeborg.github.io/simulationHostedAssets/images/happy.png";
                }

                // neutral: 45 - 79
                else if (this.healthValue >= this.neutralValue) {
                    return "https://khyeborg.github.io/simulationHostedAssets/images/neutral.png";
                }

                // worried: 20 - 44
                else if (this.healthValue >= this.worriedValue) {
                    return "https://khyeborg.github.io/simulationHostedAssets/images/worried.png";
                }

                // want to eat: 10 - 19
                else if (this.healthValue >= this.wantToEatValue) {
                    return "https://khyeborg.github.io/simulationHostedAssets/images/want_to_eat.png";
                }

                // sad: 1 - 9
                else if (this.healthValue >= this.sadValue) {
                    return "https://khyeborg.github.io/simulationHostedAssets/images/sad.png";
                }

                // fainted: 0 
                else {
                    return "https://khyeborg.github.io/simulationHostedAssets/images/fainted.png";
                }
            }
        }, 
        computeMessage() {
            if (this.isEating == true) {
                // super eating
                if (this.isSuperEating == true) {
                    return "SUPER EATINGGGGG";
                }
                
                // eating
                else {
                    return "Eatinggg";
                }
            }

            else {
                // really full: 100
                if (this.healthValue >= this.fullValue) {
                    return "I'm so full, I can go to sleep";
                }

                // happy: 85 - 100
                else if (this.healthValue >= this.happyValue) {
                    return "Pikachuuuuuu";
                }

                // neutral: 45 - 79
                else if (this.healthValue >= this.neutralValue) {
                    return "Pika Pika";
                }

                // worried: 20 - 44
                else if (this.healthValue >= this.worriedValue) {
                    return "I'm getting hungry... Do I get food soon?";
                }

                // want to eat: 10 - 19
                else if (this.healthValue >= this.wantToEatValue) {
                    return "Bruh, where my food at?";
                }

                // sad: 1 - 9
                else if (this.healthValue >= this.sadValue) {
                    return "Please, please gimme food...";
                }

                // fainted: 0 
                else {
                    return "I died";
                }
            }
        },
        computeButtonStyle() {
            if (this.isEating == true) {
                return { opacity: 0.5 }
            }
        },
        computeColor() {
            if (this.healthValue >= 100) {
                return { color: "pink" };
            }
            
            else if (this.healthValue >= this.neutralValue) {
                return { color: "green" };
            }

            else if (this.healthValue >= this.wantToEatValue) {
                return { color: "orange" };
            }

            else if (this.healthValue >= this.sadValue) {
                return { color: "red" };
            }
          
            else {
              	return { color: "black" };
            }
        }
    },
    methods: {
        feedPikachu() {
            if (this.healthValue < 100 && this.isEating == false) {
                this.healthValue += this.healthValueIncrease;

                if (this.healthValue > 106) {
                    this.healthValue = 106;
                }

                this.isEating = true;

                this.pauseFeed = setInterval(() => {
                    this.isEating = false;
                    clearInterval(this.pauseFeed);
                }, 3000)
            }
        },
        superFeedPikachu() {
            this.healthValue = 106;
            this.isEating = true;
            this.isSuperEating = true;

            this.pauseFeed = setInterval(() => {
                this.isEating = false;
                this.isSuperEating = false;
                clearInterval(this.pauseFeed);
            }, 7500)
        }
    }
  });
  
App.mount("#app");