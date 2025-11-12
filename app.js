/* Mad Lib Starter (Beginner JS)

  GOAL:
  - Ask the user for several words using prompt()
  - Save each answer in a variable (use let or const)
  - Build a story string using a template literal (backticks) with ${variableName}
  - Put the finished story into the page by setting innerHTML on the element with id "madlib-output"

  IMPORTANT:
  - Do NOT use if/else or any other advanced JS yet.
  - Only variables, prompt(), strings, and innerHTML.
  - Write your own prompts and story!
*/

/* 1) CREATE VARIABLES 
   - Make one variable per word you need (e.g., a noun, a verb, an adjective, a place, a number, etc.)
   - Use prompt() to ask the user for each word.
   - EXAMPLE CATEGORIES (choose your own): noun1, adjective1, verbPast, place, animal, food
   - Name variables clearly so you remember what each one is for.
*/

let userName = prompt("What is the main character's name?");
let sidekick = prompt("What is the sidekick's name?");
let place = prompt("Where does your story take place?");
let adjective = prompt(" Give me an adjective?");
let adjective2 = prompt("Give me another adjective?");
let animal= prompt("What is ur fav animal?");
let verbEndingInIng = prompt("Give me a verb ending in -ing?");
let food = prompt("What is ur fav food?");
let emotion = prompt("Give me an emotion?");
let verb = prompt("Give me a verb: that does`t end in -ing?");
let someone = prompt("Give me a name of a celebrity?");
let vehicle = prompt("Give me a vehicle?");
let verb2 = prompt("Give me another verb: that does`t end in -ing?");
let emotion2 = prompt("Give me another emotion?");
let action = prompt("Give me a exercise that fills in the blank'do a...'? ");
let basic = prompt("Give me a basic adjective?");

/* 2) BUILD YOUR STORY STRING
   - Use a template literal: it starts and ends with backticks (the ` key).
   - Insert variables with ${variableName} in your sentence.
   - Keep it fun! Make sure your story uses ALL the variables you collected.
*/
let story = `<p>One day ${userName} and ${sidekick} went to ${place}.; </p>
<p> ${userName} was really ${adjective} and ${adjective2}.;</p>
<p> Suddenly, they saw a ${animal} that was ${verbEndingInIng} near a pile of ${food}.;</p>
<p> They were very ${emotion} because that was their favorite food.;</p>
<p> ${userName} and ${sidekick} decided to ${verb} with the ${animal}.;</p>
<P> ${someone} driving past them, saw this and stopped their ${vehicle} to ${verb2}.;</p>
<p> ${userName} was very ${emotion2} about this and decided to do a ${action};</p>
<P> ${someone} thought this was really ${basic} and put them on social media.;</p>
<p> They became famous! The end. ;</p>` 


/* 3) DISPLAY THE STORY ON THE PAGE
   - Select the element with id "madlib-output" using document.getElementById(...)
   - Set its .innerHTML to your story variable from Step 2.
   - Optional: include simple <strong> or <em> tags inside your story string for emphasis.
*/

 document.getElementById("madlib-output").innerHTML = story ;

/* 4) OPTIONAL POLISH
   - Add a title or intro line at the top of your story (still using the same innerHTML).
   - Use <br> tags inside your story string to control line breaks if you want multiple lines.
   - Keep your variable names, prompts, and story grammar consistent.
*/

/* 5) RUBRIC REMINDER (quick checklist)
   - Prompts: You ask for all required words with clear messages.
   - Variables: You use let/const with meaningful names.
   - Template Literals: You use backticks and ${} correctly.
   - Display: The story shows up clearly in #madlib-output.
   - Bootstrap: Don’t remove the .row/.col structure in index.html.
   - Comments: Explain each step in your code.
   - GitHub: Commit often with clear messages; publish on GitHub Pages.
*/
