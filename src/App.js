// src/App.js
import React, { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import ExerciseCard from './components/ExerciseCard';
import { exercises } from './data';

function App() {
    const [step, setStep] = useState('quiz'); // 'quiz' ou 'results'
    const [userProfile, setUserProfile] = useState(null);

    // Filtrer les exercices selon l'objectif (Logique simple)
    const filteredExercises = userProfile
        ? exercises.filter(ex => ex.category === userProfile.goal)
        : [];

    return (
        <div className="App">
            <header className="decathlon-header">
                <h1>DECATHLON <span className="light">DIGITAL</span></h1>
                <p>CTO de votre Santé Posturale 🏆</p>
            </header>

            <main>
                {step === 'quiz' && (
                    <Quiz onAnswer={setUserProfile} setStep={setStep} />
                )}

                {step === 'results' && (
                    <div className="results-container">
                        <div className="intro">
                            <h2>Votre Programme "Sans Blessure"</h2>
                            <p>Basé sur votre profil : <strong>{userProfile.level}</strong> • Objectif : <strong>{userProfile.goal}</strong></p>
                            <button className="reset-link" onClick={() => setStep('quiz')}>Refaire le profil</button>
                        </div>

                        <div className="cards-grid">
                            {filteredExercises.length > 0 ? (
                                filteredExercises.map(ex => (
                                    <ExerciseCard key={ex.id} exercise={ex} userProfile={userProfile} />
                                ))
                            ) : (
                                <p>Désolé, aucun exercice ne correspond exactement, essayez un autre objectif.</p>
                            )}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;