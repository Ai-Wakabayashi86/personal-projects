let quizMode = "";

let currentLevel = "";
let currentCountries = [];

let score = 0;
let questionCount = 0;
let maxQuestions = 10;
let answer;

let usedQuestions = [];

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function setMode(mode) {
    quizMode = mode;

    document.getElementById("modeSelect").style.display = "none";
    document.getElementById("levelSelect").style.display = "grid";
    document.getElementById("result").textContent = "難易度を選んでください";
}

function setLevel(level) {
    currentLevel = Number(level);
    currentCountries = countries.filter(c => c.level === currentLevel);

    score = 0;
    questionCount = 0;
    usedQuestions = [];

    document.getElementById("score").textContent = "スコア: 0";
    document.getElementById("levelSelect").style.display = "none";
    document.getElementById("result").innerHTML = "";

    nextQuestion();
}

function nextQuestion() {

    document.getElementById("result").innerHTML = "";

    if (questionCount >= maxQuestions) {
        showResult();
        return;
    }

    const availableCountries = currentCountries.filter(
        c => !usedQuestions.includes(c.name)
    );

    if (availableCountries.length === 0) {
        showResult();
        return;
    }

    answer = availableCountries[
        Math.floor(Math.random() * availableCountries.length)
    ];

    usedQuestions.push(answer.name);

    const wrongChoices = shuffle(
        currentCountries.filter(c => c.name !== answer.name)
    ).slice(0, 3);

    const choices = shuffle([
        answer,
        ...wrongChoices
    ]);

    if (quizMode === "flag") {

        document.getElementById("question").innerHTML = `
            <img src="https://flagcdn.com/w640/${answer.code}.png"
                 alt="${answer.name}の国旗">
        `;

    } else {

        document.getElementById("question").innerHTML = `
            <div class="trivia">
                <p>この国はどこでしょう？</p>
                <ul>
                    <li>${answer.trivia[0]}</li>
                    <li>${answer.trivia[1]}</li>
                    <li>${answer.trivia[2]}</li>
                </ul>
            </div>
        `;
    }

    document.getElementById("question").innerHTML += `
        <button id="hintButton" onclick="showHint()">
            💡 ヒントを見る
        </button>

        <div id="hintArea"></div>
    `;

    const choicesDiv =
        document.getElementById("choices");

    choicesDiv.innerHTML = "";

    choices.forEach(choice => {

        const button =
            document.createElement("button");

        button.textContent =
            choice.name;

        button.onclick =
            () => checkAnswer(choice);

        choicesDiv.appendChild(button);
    });

    questionCount++;

    document.getElementById("score").textContent =
        `第${questionCount}問 / ${maxQuestions}問　正解数: ${score}`;
}

function showHint() {

    const hintArea =
        document.getElementById("hintArea");

    if (quizMode === "flag") {

        hintArea.innerHTML = `
            <div class="hintBox">
                <p>💡 ヒント</p>
                <ul>
                    <li>${answer.trivia[0]}</li>
                    <li>${answer.trivia[1]}</li>
                    <li>${answer.trivia[2]}</li>
                </ul>
            </div>
        `;

    } else {

        hintArea.innerHTML = `
            <div class="hintBox">
                <p>💡 ヒント</p>

                <img
                    src="https://flagcdn.com/w320/${answer.code}.png"
                    alt="${answer.name}の国旗"
                >
            </div>
        `;
    }

    document.getElementById("hintButton").style.display =
        "none";
}

function checkAnswer(choice) {

    const result =
        document.getElementById("result");

    if (choice.name === answer.name) {

        score++;

        result.textContent =
            "⭕ 正解！";

    } else {

        result.textContent =
            `❌ 不正解！ 正解は「${answer.name}」です`;
    }

    document.getElementById("score").textContent =
        `第${questionCount}問 / ${maxQuestions}問　正解数: ${score}`;

    setTimeout(nextQuestion, 600);
}

function showResult() {

    document.getElementById("question").innerHTML = "";
    document.getElementById("choices").innerHTML = "";

    document.getElementById("result").innerHTML = `
        <h2>結果発表</h2>

        <p>
            ${maxQuestions}問中
            ${score}問正解！
        </p>

        <button onclick="retryQuiz()">
            再挑戦
        </button>

        <button onclick="finishQuiz()">
            終了
        </button>
    `;
}

function retryQuiz() {

    score = 0;
    questionCount = 0;
    usedQuestions = [];

    document.getElementById("result").innerHTML = "";

    nextQuestion();
}

function finishQuiz() {

    score = 0;
    questionCount = 0;
    usedQuestions = [];

    currentLevel = "";
    currentCountries = [];
    quizMode = "";

    document.getElementById("question").innerHTML = "";
    document.getElementById("choices").innerHTML = "";

    document.getElementById("score").textContent =
        "スコア: 0";

    document.getElementById("result").textContent =
        "クイズの種類を選んでください";

    document.getElementById("modeSelect").style.display =
        "block";

    document.getElementById("levelSelect").style.display =
        "none";
}

document.getElementById("result").textContent =
    "クイズの種類を選んでください";