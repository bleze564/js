// const closeButton = document.querySelector('[data-action="close-modal"]');
// const openButton = document.querySelector('[data-action="open-modal"]');

// closeButton.addEventListener("click", toggleModal);
// openButton.addEventListener("click", toggleModal);

// function toggleModal() {
//   document.body.classList.toggle("show-modal");
// }



// const openM = document.querySelector('[data-action="open-modal"]')
// const backdrop = document.querySelector(".js-backdrop")
// const modal = document.querySelector(".modal")
// const body = document.body
// const closeM = document.querySelector('[data-action="close-modal"]')

// function onBtnClick() {
//     document.body.classList.toggle('show-modal')

// }
// openM.addEventListener('click', onBtnClick);
// closeM.addEventListener('click', onBtnClick);

// window.addEventListener('keydown', (event) => {
//     //console.log(event.key);
//     if (event.key === 'Escape' && document.body.classList.contains('show-modal')) {
//         onBtnClick()
//     }
// })




const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];
const colorPickerOption =`<button style="backgroundColor:${color}" class="btn">${label}</button>`

