let entries = [];

function addEntry() {
    const entryText = document.getElementById("entryText").value;
    const rating = parseInt(document.getElementById("rating").value);

    if (entryText === "" || isNaN(rating) || rating < 1 || rating > 5) {
        alert("Please provide valid entry text and rating between 1 and 5.");
        return;
    }

    const newEntry = {
        text: entryText,
        rating: rating,
        reviews: []
    };

    entries.push(newEntry);
    displayEntries();
    clearForm();
}

function displayEntries() {
    const entriesContainer = document.getElementById("entries");
    entriesContainer.innerHTML = "";

    entries.forEach((entry, index) => {
        const entryDiv = document.createElement("div");
        entryDiv.innerHTML = `
            <h2>Entry ${index + 1}</h2>
            <p>${entry.text}</p>
            <p>Rating: ${entry.rating}/5</p>
            <label for="review-${index}">Add Review:</label>
            <textarea id="review-${index}" rows="2" cols="30"></textarea>
            <button onclick="addReview(${index})">Add Review</button>
            <div id="reviews-${index}">
                ${entry.reviews.map(review => `<p>${review}</p>`).join("")}
            </div>
        `;
        entriesContainer.appendChild(entryDiv);
    });
}

function addReview(entryIndex) {
    const reviewText = document.getElementById(`review-${entryIndex}`).value;

    if (reviewText === "") {
        alert("Please provide a valid review.");
        return;
    }

    entries[entryIndex].reviews.push(reviewText);
    displayEntries();
    clearReviewForm(entryIndex);
}

function clearForm() {
    document.getElementById("entryText").value = "";
    document.getElementById("rating").value = "";
}

function clearReviewForm(entryIndex) {
    document.getElementById(`review-${entryIndex}`).value = "";
}

// Initial display
displayEntries();
