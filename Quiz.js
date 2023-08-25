const questions = [
    {
    question: "1.What year was the very first model of the iPhone released?",
    choices: ["2007", "2008", "1999", "2000"],
    correctAnswer: "2007"
    },
    {
    question: "2.Is Java a type of OS?",
    choices: ["yes", "no",],
    correctAnswer: "no"
    },
    {
    question: "3.Google Chrome, Safari, Firefox, and Explorer are different types of what?",
    choices: ["web browser", "google", "fire fox", "File"],
    correctAnswer: "web browser"
    },
    {
    question: "4.What was Twitter’s original name?",
    choices: ["tettr", "twtter", "twitter", "twttr"],
    correctAnswer: "twttr"
    },
    {
    question: "5.How many films did Sean Connery play James Bond in?",
    choices: ["seven", "five", "one", "four"],
    correctAnswer: "seven"
    }
    ];
    let currentQuestion = 0;
    let score = 0;
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const scoreElement = document.getElementById("score");
    const submitButton = document.getElementById("submit");
    function loadQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    choicesElement.innerHTML = '';
    current.choices.forEach(choice => {
    const li = document.createElement("li");
    li.textContent = choice;
    li.addEventListener("click", () => checkAnswer(choice));
    choicesElement.appendChild(li);
    });
    }
    function checkAnswer(choice) {
    const current = questions[currentQuestion];
    if (choice === current.correctAnswer) {
    score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
    loadQuestion();
    } else {
    endQuiz();
    }
    }
    function endQuiz() {
    questionElement.textContent = "Quiz Complete!";
    choicesElement.innerHTML = '';
    submitButton.style.display = "none";
    scoreElement.textContent = `Your Score: ${score} / ${questions.length}`;
    }
    loadQuestion();
    submitButton.addEventListener("click", () => {
        checkAnswer(null); 
    });