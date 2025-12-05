// src/components/ExerciseCard.js
import React from 'react';

const ExerciseCard = ({ exercise, userProfile }) => {
    // Logique d'adaptation (Niveau 2)
    const adaptation = exercise.adaptations[userProfile.injury] || exercise.adaptations[userProfile.level];

    return (
        <div className="exercise-card">
            {/* Niveau 3 : Illustration */}
            <img src={exercise.image} alt={exercise.name} className="exercise-img" />

            <div className="content">
                <h3>{exercise.name}</h3>

                {/* Niveau 2 : Instructions */}
                <div className="instructions">
                    <h4>📍 Posture Idéale :</h4>
                    <p>{exercise.instructions}</p>

                    {adaptation && (
                        <div className="alert-box">
                            <strong>💡 Conseil personnalisé ({userProfile.injury || userProfile.level}) :</strong>
                            <p>{adaptation}</p>
                        </div>
                    )}
                </div>

                {/* Niveau 4 : Lien Commercial */}
                <div className="products-section">
                    <h4>🛒 Équipement recommandé Decathlon :</h4>
                    <div className="product-list">
                        {exercise.products.map((prod, index) => (
                            <a key={index} href={prod.url} target="_blank" rel="noreferrer" className="product-chip">
                                {prod.name} ({prod.price}) ↗
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExerciseCard;