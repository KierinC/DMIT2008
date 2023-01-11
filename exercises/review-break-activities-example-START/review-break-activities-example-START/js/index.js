/*
Enter JS here

HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/
let form = document.querySelector('.new-topic-form');
let topicList = document.querySelector('.topics-list');

const addTopicToPage = (topicListElement, topic) => {
    topicListElement.innerHTML += `<li class="list-group-item">
    ${topic}
</li>`;
}

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    let topicInput = evt.target.elements['new-topic'];

    if (topicInput.value === '') {
        topicInput.classList.add('is-invalid');
        return
    } else {
        topicInput.classList.remove('is-invalid');
    }
    addTopicToPage(topicList, topicInput.value);
    topicInput.value = "";
});