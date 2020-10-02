
let questions = [
  {
    id: 1,
    question: "Do you feel feverish and/or have chills ?",
    answer: "Yes",
    options: [
      "Not at all",
      "Slightly",
      "Felt somedays back but now improving",
      "Yes"
    ]
  },
  {
    id: 2,
    question: "Do you have body aches and/or fatigue above what is normal for you ?",
    answer: "Yes",
    options: [
      "Not at all",
      "Slightly",
      "Felt somedays back but now improving",
      "Yes"
  ]
  },
  {
    id: 3,
    question: "Do you have a runny nose and/or watery eyes ?",
    answer: "Yes",
    options: [  
      "Not at all",
      "Slightly",
      "Felt somedays back but now improving",
      "Yes"
  ]
  },
  {
    id: 4,
    question: "Are you having congestion or problems related to breathing ?",
    answer: "Yes",
    options: [  
      "Not at all",
      "Slightly",
      "Felt somedays back but now improving",
      "Yes"
  ]
  },
  {
    id: 5,
    question: "Do you have sneezing or coughing above what is normal for you ?",
    answer: "Yes",
    options: [
      "Not at all",
      "Slightly",
      "Felt somedays back but now improving",
      "Yes"
  ]
  },
  {
    id: 6,
    question: "Are you having bitterness or tastelessness in your mouth ?",
    answer: "Yes",
    options: [
      "Not at all",
      "Slightly",
      "Felt somedays back but now improving",
      "Yes"
  ]
  },
  {
    id: 7,
    question: "What physical activity are you having to keep yourself fit ?",
    options: [
      "Running and/or Jogging",
      "Walking",
      "Climbing Stairs",
      "None at all"
    ]
  },
  {
    id: 8,
    question: "In past 7 days, how often have you been bothered by emotional problems such as anxiety, feeling low or irritable ?",
    options: [
      "Never",
      "Sometimes",
      "Often",
      "Always"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // evaluating the quiz      ***********************************************************


  if (user_answer == questions[question_count].options[0]) {
    points += 0;
  }
  if (user_answer == questions[question_count].options[1]) {
    points += 25;
  }
  if (user_answer == questions[question_count].options[2]) {
    points += 35;
  }
  if (user_answer == questions[question_count].options[3]) {
    points += 100;
  }

  sessionStorage.setItem("points", points);
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;

  toggleActive();
}
///////*********************************************************************************************************************************** */
function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
