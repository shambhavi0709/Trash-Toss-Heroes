document.addEventListener('DOMContentLoaded', function () {
    const profileData = {
        name: 'John Doe',
        picture: 'profile-picture.jpg', // Add your image file path here
        email: 'john.doe@example.com',
        phoneNumber: '123-456-7890',
        points: 150,
    };

    const editProfileBtn = document.getElementById('editProfileBtn');
    const seeRewardBtn = document.getElementById('seeRewardBtn');

    editProfileBtn.addEventListener('click', function () {
        alert('Edit profile functionality can be implemented here.');
    });

    seeRewardBtn.addEventListener('click', function () {
        alert('See reward functionality can be implemented here.');
    });

    renderUserProfile(profileData);
});

function renderUserProfile(data) {
    const appContainer = document.getElementById('app');

    const profileSection = document.createElement('div');
    profileSection.className = 'profile-container';

    // Profile Picture
    const profilePicture = document.createElement('img');
    profilePicture.src = data.picture;
    profilePicture.alt = 'Profile Picture';
    profilePicture.className = 'profile-picture';
    profileSection.appendChild(profilePicture);

    // User Information
    const userInfo = document.createElement('div');
    userInfo.className = 'user-info';

    const nameElement = createProfileElement('Name', data.name);
    const emailElement = createProfileElement('Email', data.email);
    const phoneNumberElement = createProfileElement('Phone Number', data.phoneNumber);

    userInfo.appendChild(nameElement);
    userInfo.appendChild(emailElement);
    userInfo.appendChild(phoneNumberElement);

    // Points Section
    const pointsSection = document.createElement('div');
    pointsSection.className = 'points-section';

    const pointsLabel = document.createElement('div');
    pointsLabel.textContent = 'Points Earned:';
    pointsSection.appendChild(pointsLabel);

    const pointsValue = document.createElement('div');
    pointsValue.textContent = data.points;
    pointsSection.appendChild(pointsValue);

    // Buttons
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'buttons-container';

    const editProfileBtn = document.createElement('button');
    editProfileBtn.textContent = 'Edit Your Profile';
    editProfileBtn.id = 'editProfileBtn';
    buttonsContainer.appendChild(editProfileBtn);

    const seeRewardBtn = document.createElement('button');
    seeRewardBtn.textContent = 'See Your Reward';
    seeRewardBtn.id = 'seeRewardBtn';
    buttonsContainer.appendChild(seeRewardBtn);

    // Append to Profile Section
    profileSection.appendChild(userInfo);
    profileSection.appendChild(pointsSection);
    profileSection.appendChild(buttonsContainer);

    // Append to App Container
    appContainer.appendChild(profileSection);
}

function createProfileElement(label, value) {
    const element = document.createElement('div');
    const labelElement = document.createElement('span');
    labelElement.textContent = `${label}: `;
    element.appendChild(labelElement);

    const valueElement = document.createElement('span');
    valueElement.textContent = value;
    element.appendChild(valueElement);

    return element;
}