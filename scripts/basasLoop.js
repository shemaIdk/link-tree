const inputInterval = 120;
const newBasaTimeout = 1000;

const basas = await getBasas();
startLoop(0, basas)

async function startLoop(index, basas) {
  await setBasa(basas[index]);

  if(index + 1 >= basas.length) index = 0
  else index++;

  setTimeout(() => {
    startLoop(index, basas)
  }, newBasaTimeout)

  return;
}

function setBasa(string) {
  const basaEl = document.querySelector('.basa');

  return new Promise((resolve, reject) => {
    let sliceTo = 1;

    const id = setInterval(() => {
      if(sliceTo == string.length) {
        clearInterval(id);
        resolve();
      }

      basaEl.textContent = string.slice(0, sliceTo++);
    }, inputInterval)
  })
}

async function getBasas() {
  const basas = await fetch('/data/basas.json')
    .then(res => res.json())
    .then(res => res.basas);
  
  return basas;
} 
