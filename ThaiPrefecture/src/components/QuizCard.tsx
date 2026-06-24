// src/components/QuizCard.tsx

type QuizCardProps = {
  question: string;
  choices: string[];
  selectedAnswer: string | null;
  correctAnswer: string;
  onSelectAnswer: (answer: string) => void;
};

export function QuizCard({
  question,
  choices,
  selectedAnswer,
  correctAnswer,
  onSelectAnswer,
}: QuizCardProps) {
  const isCorrect = selectedAnswer === correctAnswer;

  return (
    <div>
      <h2>{question}</h2>

      <div>
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => onSelectAnswer(choice)}
            disabled={selectedAnswer !== null}
          >
            {choice}
          </button>
        ))}
      </div>

      {selectedAnswer && (
        <div>
          {isCorrect ? (
            <p>正解！</p>
          ) : (
            <p>不正解。正解は {correctAnswer} です。</p>
          )}
        </div>
      )}
    </div>
  );
}