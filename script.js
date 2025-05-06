function changeText() {
    const heading = document.getElementById('main-heading');
    heading.textContent = 'Text changed with JavaScript!';
  }
  
  function toggleStyle() {
    const intro = document.getElementById('intro-text');
    intro.classList.toggle('highlight');
  }
  
  function addItem() {
    const ul = document.getElementById('item-list');
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    ul.appendChild(newItem);
  }
  
  function removeItem() {
    const ul = document.getElementById('item-list');
    if (ul.lastElementChild) {
      ul.removeChild(ul.lastElementChild);
    }
  }
  