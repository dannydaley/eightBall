let round = document.getElementById('round')
const ball = () => {
let answerField = document.getElementById('answerBox')

let question = document.getElementById('input').value;
  if (question) {
    round.className = 'roundAnimate'
  let randomNumber = Math.floor(Math.random() * 8)
  let eightBall = '';            
  switch (randomNumber) {
  case 0:
    eightBall = 'It is certain'
    break;
  case 1:
    eightBall = 'It is decidedly so'
    break;
  case 2:
    eightBall = 'Reply hazy, try again'
    break;
  case 3:
    eightBall = 'Cannot predict now'
    break;
  case 4:
    eightBall = 'Dont count on it'
    break;
  case 5: 
    eightBall = 'Outlook not so good'
    break;
  case 6:
    eightBall = 'My sources say no.'
    break;
  case 7:
    eightBall = 'I wouldnt do that..'
    break;
    default:
    eightBall = 'The eightball awaits..'
    }

  answerField.innerHTML = `<h2 class="fade-in">${eightBall}</h2>`

    document.getElementById('input').value = '';
    setTimeout(function() {
      round.className = ' '
    }, 2000)
    document.getElementById('input').focus();
  } 
  if (question === '') {
    answerField.innerHTML = `<h2 class="fade-in">No question</h2>`
    document.getElementById('input').focus();
  }
}
document.getElementById('input').addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    ball()
  }
})

let ask = document.getElementById('ask');

ask.addEventListener('click', ball);
