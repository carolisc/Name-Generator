function generateName() {
    const dateOfBirthInput = document.getElementById('dateOfBirth');
    const result = document.getElementById('result');
    const dateOfBirth = new Date(dateOfBirthInput.value);
    const month = dateOfBirth.getMonth();
    
    const namesPerMonth = [
      'Bouncy', 'Giggly', 'Whoopee', 'Quacky', 'Dizzy', 'Fluffy', 'Mumbo-jumbo', 'Noodlehead', 'Brouhaha', 'Higgledy-piggledy', 'Doodle', 'Jamboree'
    ];
    
    const firstName = namesPerMonth[month];
    
    const day = dateOfBirth.getDate();
    const namesPerDay = [
      'Dia01', 'Dia02', 'Dia03', 'Dia04', 'Dia05', 'Dia06', 'Dia07', 'Dia08', 'Dia09', 'Dia10', 'Dia11', 'Dia12', 'Dia13', 'Dia14', 'Dia15', 'Dia16', 'Dia17', 'Dia18', 'Dia19', 'Dia20', 'Dia21', 'Dia22', 'Dia23', 'Dia24', 'Dia25', 'Dia26', 'Dia27', 'Dia28', 'Dia29', 'Dia30', 'Dia31'
    ];

    const secondName = namesPerDay[day];
    
    const generatedName = firstName + ' ' + secondName;
    
    result.textContent = 'Your new gamer name is: ' + generatedName;
    
}

var swiper = new swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    delay: 3000,
});