// База даних аніме
const animeDatabase = [
    {
        title: "Атака Титанів",
        genres: ["action"],
        description: "Епічна постапокаліптична сага про боротьбу людства з таємничими велетнями. Історія Ерена Єґера та його друзів, які стикаються з жахливими таємницями світу за стінами."
    },
    {
        title: "Клинок розсікаючий демонів", 
        genres: ["action"],
        description: "Емоційна історія Танджіро Камадо, який стає мисливцем на демонів, щоб врятувати свою сестру та помститися за смерть родини. Дивовижна анімація та глибокі персонажі."
    },
    {
        title: "Магічна битва",
        genres: ["drama", "fantasy"], 
        description: "Юджи Ітадорі потрапляє у світ прокльонів та магії після того, як з'їдає палець могутнього прокляття. Насичена екшном історія з унікальною системою магії."
    },
    {
        title: "Хантер Х Хантер",
        genres: ["action", "comedy"],
        description: "12-річний Гон відправляється на небезпечний іспит Хантера, щоб знайти свого батька. Складний світ з глибокою системою Нен та незабутніми персонажами."
    },
    {
        title: "5 сантиметрів в секунду",
        genres: ["romance", "drama"],
        description: "Поетична історія кохання на відстані, розказана через три частини життя головного героя. Візуально приголомшливий фільм про ностальгію, час та втрачені можливості."
    }
];

// Отримати рекомендації
function getRecommendations() {
    const selectedGenre = document.querySelector('input[name="genre"]:checked');

    if (!selectedGenre) {
        alert('Будь ласка, оберіть жанр аніме!');
        return;
    }

    const recommendations = animeDatabase.filter(anime => 
        anime.genres.includes(selectedGenre.value)
    );
    
    const resultsDiv = document.getElementById('anime-list');
    resultsDiv.innerHTML = '';
    
    if (recommendations.length > 0) {
        recommendations.forEach(anime => {
            resultsDiv.innerHTML += `
                <div class="anime-card">
                    <h3>${anime.title}</h3>
                    <p>${anime.description}</p>
                </div>
            `;
        });
    } else {
        resultsDiv.innerHTML = `<p>На жаль, не знайдено аніме у жанрі "${selectedGenre.value}" 😢</p>`;
    }
    
    document.getElementById('results').style.display = 'block';
    document.getElementById('anime-test-form').style.display = 'none';
}

// Обробка форми
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('anime-test-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            getRecommendations();
        });
    }
});