function getAge() {
    const dob = document.getElementById('dob').value;
    const result = document.getElementById('result');
    
    if (dob === '') {
        result.textContent = 'Please enter your date of birth.';
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    result.textContent = "You are " + age + " years old.";
}