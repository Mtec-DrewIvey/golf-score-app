# golf-score-app
Golf Score Web App

Create a golf score card that has all the functionality a golfer would need. This includes the ability to fill out the player name, add thier scores for each hole and add up totals for the player. We will be using a api to get the course information. Players will be able to select from 3 different courses and the scorecard will update accordingly. 

# User Instructions
User should select a course and teeBox when arriving on the page. This is what will populate the table with the course information. Please note that currently the API seems to have some irregularities for the Fox Hollow Golf Course:
- It has a teeBox option called 'auto change locations'. Looking at the other 2 courses, this option is contained in it's own array called changeLocations. I just added a check to see if teeType === "auto change location" and if it is, don't add it as one of the tee options.
- Looks like each teeBox option (Pro, Champion, Men, Women) all have the same hole information such as yards, meters, lat, lng... So in updating the selectedTeeBox I don't notice any updates on my card, but that's only because the information is the same.

Once a course and teebox are selected you can start adding players. Attempting to add scores to a player row with no name will result in no score being able to be added. This is due to how I handle adding scores to each player by identifying the unique ID assigned to the player when the name is entered.

Players are limited between 1 and 99 shots per hole. If you need more than 99 swings per hole you may be playing the wrong sport...

# Developers Thoughts
I definitely need to revisit this project when time allows. Currently, there is a lot of things to be improved on:
1. The UI is messy and not very mobile friendly. I fell ill in the middle of the alloted project time and was rushed to completing this before the Due Date. I focused on getting the data from the API and working to get everything returned to the user correctly.
2. The implementation of some of my functions needs organizing and reworking. While I was able to use ES6 modules, there are several functions near the completion of the project that were hastily added.
3. One thing you may notice is that if you enter a score, then delete the score the cell containing the total (Out/In) will display NaN. I wish I had time to further investigate and handle that issue. The score cell will update when a valid score is entered.
4. Implementing Error Handling. I feel I need a lot of practice in error handling. I'm not sure the best practices when it comes to error handling.

Overall I had some issues with the project due to some time being eaten up by illness. I'm happy I was able to complete the project and the functionality is mostly working as expected. Just like my other projects, I'll be reviewing and revising this project when I get the chance. I enjoy playing golf and want to create an app that I am proud of and shows my appreciation for the sport. 
