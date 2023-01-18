
let goals = []

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["Happy life is just in front of you.", "Tonight you will be blinded by passion.", "You are soon going to change your present line of work.", "You will be blessed with longevity.", "You will inherit a large sum of money."]

        randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },

    createGoal: (req, res) => {
        goals.push(req.body)
        res.status(200).send(goals)
    },

    getMotivated: (req, res) => {
        const motivation = ["Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.", "Duty is heavier then a mountain, death lighter then a feather.", "The core of man's spirit comes from new experiences.", "Make a radical change in your lifestyle and begin to boldy do things which you may have thought of doing or been too hesitant to attempt."]

        randomIndex = Math.floor(Math.random() * motivation.length)
        let randomMotivation = motivation[randomIndex]

        res.status(200).send(randomMotivation)
    },

    getColor: (req, res) => {
        const colors = ["red", "blue", "yellow", "orange", "purple"]

        randomIndex = Math.floor(Math.random() * colors.length)
        let randomColor = colors[randomIndex]

        res.status(200).send(randomColor)
    },

    getRandomTime: (req, res) => {
        const randomTimes = ["12:32", "7:15", "7:06", "5:00", "2:30"]

        randomIndex = Math.floor(Math.random() * randomTimes.length)
        let randomRandomTime = randomTimes[randomIndex]

        res.status(200).send(randomRandomTime)
    }

}