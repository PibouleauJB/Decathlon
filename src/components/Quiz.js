// src/components/Quiz.js
import React from 'react';

const Quiz = ({ onAnswer, setStep }) => {
    const [answers, setAnswers] = React.useState({});

    const handleOptionChange = (key, value) => {
        setAnswers({ ...answers, [key]: value });
    };

    const handleSubmit = () => {
        // Vérifie que tout est répondu (simplifié pour l'exemple)
        onAnswer(answers);
        setStep('results');
    };

    const questions = [
        { id: 1, text: "Quel est votre niveau ?", options: ["Débutant", "Intermédiaire"], key: "level" },
        { id: 2, text: "Zones sensibles ?", options: ["Aucune", "Mal de dos", "Genoux fragiles"], key: "injury" },
        { id: 3, text: "Votre objectif ?", options: ["Renforcement musculaire", "Souplesse & Détente"], key: "goal" }
    ];

    return (
        <div className="quiz-container">
            <h2>👤 Profilage Sportif</h2>
            <p>Aidez-nous à adapter vos exercices.</p>

            {questions.map((q) => (
                <div key={q.id} className="question-block">
                    <h3>{q.text}</h3>
                    <div className="options">
                        {q.options.map((opt) => (
                            <button
                                key={opt}
                                className={answers[q.key] === opt ? 'selected' : ''}
                                onClick={() => handleOptionChange(q.key, opt)}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
            ))}

            <button className="cta-button" onClick={handleSubmit} disabled={Object.keys(answers).length < 3}>
                Voir mes exercices recommandés
            </button>
        </div>
    );
};

export default Quiz;
