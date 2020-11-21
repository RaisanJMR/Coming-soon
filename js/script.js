const countdown = document.querySelector('.countdown');
// Set launch date(ms)
const launchDate = new Date('Dec 31, 2020 13:00:00').getTime();
// Update every second
const intvl = setInterval(() => {
   //    Get todays date and time in (ms)
   const now = new Date().getTime();
   // Distance from now to launch date
   const distance = launchDate - now;
   // Time calculations
   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
   const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
   );
   const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const sec = Math.floor((distance % (1000 * 60)) / 1000);
   // Display result
   countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${min}<span>Minutes</span></div>
    <div>${sec}<span>Seconds</span></div>
    `;
   // if launch date passsed
   if (distance < 0) {
      // Stop the count down
      clearInterval(intvl);
      //    Style and output the text
      countdown.style.color = '#e63946';
      countdown.innerHTML = 'Launched!!';
   }
}, 1000);
