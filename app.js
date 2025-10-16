let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let value = e.target.innerText;

    if (value === '=') {
      try {
        string = eval(string).toString();
      } catch {
        string = 'Error';
      }
      inputBox.value = string;
    } else if (value === 'AC') {
      string = '';
      inputBox.value = '0';
    } else if (value === 'DEL') {
      string = string.slice(0, -1);
      inputBox.value = string || '0';
    } else if (button.id === 'plusminus') {
      if (string) {
        string = (-1 * parseFloat(string)).toString();
        inputBox.value = string;
      }
    } else {
      string += value;
      inputBox.value = string;
    }
  });
});
