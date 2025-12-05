// src/data.js

export const questions = [
    {
        id: 1,
        question: "Quel est votre niveau sportif ?",
        options: ["Débutant", "Intermédiaire", "Expert"],
        key: "level"
    },
    {
        id: 2,
        question: "Avez-vous des douleurs ou antécédents ?",
        options: ["Aucun", "Mal de dos", "Genoux fragiles"],
        key: "injury"
    },
    {
        id: 3,
        question: "Quel est votre objectif principal ?",
        options: ["Renforcement musculaire", "Souplesse & Détente", "Cardio"],
        key: "goal"
    }
];

export const exercises = [
    {
        id: "squat",
        name: "Le Squat",
        category: "Renforcement musculaire",
        // Niveau 3 : Illustration (Placeholder)
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop",
        // Niveau 2 : Instructions de base
        instructions: "Pieds largeur d'épaules, descendez les fesses en arrière comme pour vous asseoir, gardez le dos droit.",
        adaptations: {
            "Genoux fragiles": "⚠️ Descendez moins bas (quart de squat) et privilégiez la stabilité.",
            "Mal de dos": "⚠️ Gardez le buste bien droit et contractez les abdominaux pour protéger les lombaires."
        },
        // Niveau 4 : Lien commercial
        products: [
            { name: "Chaussures Fitness 500", price: "35€", url: "https://www.decathlon.fr/" },
            { name: "Short Respirant", price: "12€", url: "https://www.decathlon.fr/" }
        ]
    },
    {
        id: "plank",
        name: "La Planche (Gainage)",
        category: "Renforcement musculaire",
        image: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?q=80&w=600&auto=format&fit=crop",
        instructions: "En appui sur les avant-bras et les orteils, corps aligné. Ne cambrez pas le dos.",
        adaptations: {
            "Mal de dos": "⚠️ Posez les genoux au sol pour réduire la tension lombaire tout en engageant les abdos.",
            "Débutant": "Commencez par des séries courtes de 20 secondes."
        },
        products: [
            { name: "Tapis de sol Confort", price: "20€", url: "https://www.decathlon.fr/" }
        ]
    },
    {
        id: "yoga_tree",
        name: "La Posture de l'Arbre",
        category: "Souplesse & Détente",
        image: "https://images.unsplash.com/photo-1544367563-12123d896889?q=80&w=600&auto=format&fit=crop",
        instructions: "Debout, placez un pied sur l'intérieur de la cuisse opposée. Fixez un point au loin.",
        adaptations: {
            "Genoux fragiles": "⚠️ Placez le pied sur le mollet plutôt que sur la cuisse (jamais sur le genou !).",
            "Débutant": "Gardez une chaise à proximité pour l'équilibre."
        },
        products: [
            { name: "Brique de Yoga Liège", price: "10€", url: "https://www.decathlon.fr/" },
            { name: "Tapis Yoga Antidérapant", price: "45€", url: "https://www.decathlon.fr/" }
        ]
    }
];