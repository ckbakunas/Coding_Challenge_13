// Task 2: Adding Employee Cards Dynamically


function addEmployeeCard(name, position) { // employee card container


    const card = document.createElement('div');
    card.setAttribute('class', 'employee-card'); // class for style

    const heading = document.createElement('h3'); // heading
    heading.textContent = name;

    const paragraph = document.createElement('h3'); // position is a paragragh
    paragraph.textContent = position;

    const removeButton = document.createElement('button'); // remove button
    removeButton.textContent = 'Remove';

    const editButton = document.createElement('button'); // edit button - task 5
    editButton.textContent = 'Edit';

    // appending elements to the card
    card.appendChild(heading);
    card.appendChild(paragraph);
    card.appendChild(editButton);
    card.appendChild(removeButton);
    card.appendChild(editButton);

    // appending card to employee container
    document.getElementById('employeeContainer').appendChild(card);

    // remove functionality
    removeButton.addEventListener('click', function(event) {

        // Task 3: Converting NodeLists to Arrays for Bulk Updates


function bulkUpdateEmployeeCards() {
    const cards = document.querySelectorAll('.employee-card');
    const cardArray = Array.from(cards);


    cardArray.forEach(card => {
        card.style.backgroundColor = 'lightgreen';
    }); // function for bulk updating to cards
}


// activating bulk update function
bulkUpdateEmployeeCards();

// Task 4: Implementing Removal of Employee Crads with Event Bubbling


console.log('Remove button has been clicked');
        event.stopPropagation();
        card.remove();
    });

    // Task 5: Inline Editing of Employee Details


editButton.addEventListener('click', function() {
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text')
    nameInput.value = heading.textContent;


    const positionInput = document.createElement('input');
    positionInput.setAttribute('type','text');
    positionInput.value = paragraph.textContent;


    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
   
    // appending new functions
    card.innerHTML = '';
    card.appendChild(nameInput);
    card.appendChild(positionInput);
    card.appendChild(saveButton);


    // save button listener
    saveButton.addEventListener('click', function() {
        heading.textContent = nameInput.value;
        paragraph.textContent = positionInput.value;


        card.innerHTML = '';
        card.appendChild(heading);
        card.appendChild(paragraph);
        card.appendChild(editButton);
        card.appendChild(removeButton);
    }); // event listener for save button and inner text appending
});
}


// test employees
addEmployeeCard("Bob Ross", "Artist");
addEmployeeCard("Tom Brady", "Quarterback");
addEmployeeCard("Donald Trump", "President");