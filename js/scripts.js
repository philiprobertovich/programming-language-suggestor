// Receives user input from form and displays output
function handleForm (event) {
  event.preventDefault();
  const reset = document.getElementById("reset");
  reset.removeAttribute("class");
  reset.addEventListener("reset", function() {
    document.getElementById("output").setAttribute("class", "hidden");
  });

  const question1 = document.querySelector("input[name='bagel']:checked").value;
  const question2 = document.querySelector("input[name='difficulty']:checked").value;
  const question3 = document.querySelector("input[name='goals']:checked").value;

  document.getElementById("output").removeAttribute("class");
  document.querySelector("span").innerText = processQuestions(question1, question2, question3);
}

// Take the values of the questions, interpret them, and returns a language 
function processQuestions(question1, question2, question3) {  
  if (question1 == "plain" && question2 == "easy" && question3 == "webpage") {
    return "Javascript";
  }
  if (question1 == "plain" && question2 == "easy" && question3 == "software") {
    return "Javascript";
  }
  if (question1 == "plain" && question2 == "easy" && question3 == "problem-solving") {
    return "Javascript";
  }
  if (question1 == "plain" && question2 == "moderate" && question3 == "webpage") {
    return "Javascript";
  }
  if (question1 == "plain" && question2 == "moderate" && question3 == "software") {
    return "Javascript";
  }
  if (question1 == "plain" && question2 == "moderate" && question3 == "problem-solving") {
    return "Javascript";
  }
  if (question1 == "plain" && question2 == "hard" && question3 == "webpage") {
    return "Javascript";
  }
  if (question1 == "plain" && question2 == "hard" && question3 == "software") {
    return "Javascript";
  }
  if (question1 == "plain" && question2 == "hard" && question3 == "problem-solving") {
    return "Javascript";
  }
  if (question1 == "everything" && question2 == "easy" && question3 == "webpage") {
    return "C#";
  }
  if (question1 == "everything" && question2 == "easy" && question3 == "software") {
    return "C#";
  }
  if (question1 == "everything" && question2 == "easy" && question3 == "problem-solving") {
    return "C#";
  }
  if (question1 == "everything" && question2 == "moderate" && question3 == "webpage") {
    return "C#";
  }
  if (question1 == "everything" && question2 == "moderate" && question3 == "software") {
    return "C#";
  }
  if (question1 == "everything" && question2 == "moderate" && question3 == "problem-solving") {
    return "C#";
  }
  if (question1 == "everything" && question2 == "hard" && question3 == "webpage") {
    return "C#";
  }
  if (question1 == "everything" && question2 == "hard" && question3 == "software") {
    return "C#";
  }
  if (question1 == "everything" && question2 == "hard" && question3 == "problem-solving") {
    return "C#";
  }
  if (question1 == "raisin" && question2 == "easy" && question3 == "webpage") {
    return "Python";
  }
  if (question1 == "raisin" && question2 == "easy" && question3 == "-software") {
    return "Python";
  }
  if (question1 == "raisin" && question2 == "easy" && question3 == "problem-solving") {
    return "Python";
  }
  if (question1 == "raisin" && question2 == "moderate" && question3 == "webpage") {
    return "Python";
  }
  if (question1 == "raisin" && question2 == "moderate" && question3 == "software") {
    return "Python";
  }
  if (question1 == "raisin" && question2 == "moderate" && question3 == "problem-solving") {
    return "Python";
  }
  if (question1 == "raisin" && question2 == "hard" && question3 == "webpage") {
    return "Python";
  }
  if (question1 == "raisin" && question2 == "hard" && question3 == "software") {
    return "Python";
  }
  if (question1 == "raisin" && question2 == "hard" && question3 == "problem-solving") {
    return "Python";
  }
}

window.addEventListener("load", function() {
  const form = document.getElementById("form");
  form.addEventListener("submit", handleForm);
});