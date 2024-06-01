const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
var statusGame = document.querySelector('.status');

rock.addEventListener('click', () => {
    var a = Math.floor(Math.random() * 3);
    const arr = ["rock", "paper", "scissor"];
    const res = arr[a];
    if (res == "rock")
        statusGame.innerText = "Draw";
    else if (res == "paper")
        statusGame.innerText = "You lose to paper";
    else
    statusGame.innerText = "You win to scissors";
});

paper.addEventListener('click', () => {
    var a = Math.floor(Math.random() * 3);
    const arr = ["rock", "paper", "scissor"];
    const res = arr[a];
    if (res == "rock")
        statusGame.innerText = "You win to rock";
    else if (res == "paper")
        statusGame.innerText = "Draw";
    else
        statusGame.innerText = "You lose to scissors";
});

scissor.addEventListener('click', () => {
    var a = Math.floor(Math.random() * 3);
    const arr = ["rock", "paper", "scissor"];
    const res = arr[a];
    if (res == "rock")
        statusGame.innerText = "You lose to rock";
    else if (res == "paper")
        statusGame.innerText = "You win to paper";
    else
        statusGame.innerText = "Draw";
});
