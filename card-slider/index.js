const boxs = document.querySelectorAll('.box')
const body = document.querySelector('body')
const container = document.querySelector('.container')

body.addEventListener('click',  () => container.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr')
container.addEventListener('click',  () => container.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr')

boxs.forEach((box, id) => {
  const arr = '1fr 1fr 1fr 1fr 1fr'.split(' ')
  box.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    arr[id] = '4fr';
    container.style.gridTemplateColumns = arr.join(' ')
  })
})