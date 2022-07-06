const jokes = document.querySelector("#jokes");
const button = document.querySelector('button');


const addJokes = async ()=>{
    const jokeText = await getDadJoke();
    const newLI = document.createElement("li");
    newLI.append(jokeText);
    jokes.append(newLI);
}

const getDadJoke = async()=>{
    const config = {headers: {Accept: 'application/json'}};//required header
    const res = await axios.get("https://icanhazdadjoke.com/",config);
    return res.data.joke;
}

button.addEventListener('click', addJokes);