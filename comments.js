/*
console.log({
  parent: app.parentElement,
  prevSister: app.previousElementSibling,
  nextSister: app.nextElementSibling,
  firstChild: app.firstElementChild,
  lastChild: app.lastElementChild,
  children: app.children
}) 
*/

/*
document.getElementById;
document.getElementsByClassName;
document.getElementsByTagName; 
*/

// app.innerHTML = `<div>salut</div>`;

/*
const div = document.createElement('div');
const title = document.createElement('h1');
title.classList.add('big-title', 'title');
title.className = 'big-title';
title.id = 'Mon-titre';
title.style.background = 'blue';
title.innerText = 'Gauthier';
div.appendChild(title);

const input = document.createElement('input');
div.appendChild(input);

app.appendChild(div); 
*/

/*
let i = 0;

startButton.addEventListener('click', () => {
  const question =
    document.querySelector('#question') ?? document.createElement('p');
  question.id = 'question';
  question.innerText = Questions[i].question;
  app.insertBefore(question, startButton);

  i++;
  if (i > Questions.length - 1) {
    question.remove();
    i = 0;
  }
});

*/
