const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const motivatedBtn = document.getElementById("motivatedButton")
const colorBtn = document.getElementById("colorButton")
const randomTimeBtn = document.getElementById("randomTimeButton")

const errCallBack = err => console.log(err.response.data)

const createGoal = body => axios.post("http://localhost:4000/api/goal/", body).then(res => {
    console.log(res.data)
}).catch(errCallBack)

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

const getMotivated = () => {
    axios.get("http://localhost:4000/api/motivation/")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

const getColor = () => {
    axios.get("http://localhost:4000/api/color/")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

const getRandomTime = () => {
    axios.get("http://localhost:4000/api/randomTime/")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
motivatedBtn.addEventListener('click', getMotivated)
colorBtn.addEventListener('click', getColor)
randomTimeBtn.addEventListener('click', getRandomTime)