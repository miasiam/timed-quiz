# timed-quiz

The user starts the game by pressing the start button. It is optional for the user to view the high score page as well.
However, a prompt will not show to insert their name to log their score unless the game is played. 
<!-- completed -->

The quiz is timed. Upon clicking start, the time will start and questions will show.
<!-- still working on researching the best way to have a timer work, more questions are being created -->

Upon clicking an answer, the answer will show red if it is wrong, and green if it is correct. Correct answers should
increase time increments, while wrong answers should decrease it.
<!-- answer colors are working, however I am still working on creating a timer -->

At the end of the game, the game will direct to the scores page, with a prompt requesting for the player to insert their name. The name is logged into local storage and shown on the screen alongside their score.
<!-- redirecting works, storing the name is working, however, I need to put it on the screen with the time/score -->