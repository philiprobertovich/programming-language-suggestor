// Recieves user input from form
function handleSelect (event) {
  event.preventDefault();
  const question1 = document.querySelector("input[name='bagel']:checked").value;
  const question2 = document.querySelector("input[name='difficulty']:checked").value;
  const question3 = document.querySelector("input[name='goals']:checked").value;
}