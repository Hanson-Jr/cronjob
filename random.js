 const schedule = require ("node-schedule")
 
 const randomQuote = [
  "You’re not an option. You’re my priority.",
  "You are the only person I want to come home to.",
  "I am beyond lucky to have fallen in love with my best friend.",
 " We go together like peanut butter and jelly.",
 "You changed my world the day I met you and I have never looked back since.",
 "Every moment I spend with you is my favorite.",
 "Just one message from you is enough to brighten my whole day.",
 "I love that you see all of me and love me anyway."
 ]
const randomQuoteGenerator = () => {
    const randomIndex = Math.floor(Math.random() * randomQuote.length);
    return randomQuote[randomIndex];
}

schedule.scheduleJob('* * * * * *', () => {
    const quote = randomQuoteGenerator();
    console.log(quote)


})


//

