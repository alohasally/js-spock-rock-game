@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

html {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  background: whitesmoke;
  font-family: Quicksand, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}

.game-container {
  width: 530px;
  height: 600px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 5px 10px 20px -5px rgba(0,0,0,0.3) 
}

.header {
  background: rgb(55, 177, 94);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  color: white;
  font-size: 30px;
}

.player-container,
.computer-container {
  margin: 50px;
}

h2 {
  margin-bottom: 20px;
}

.far {
  font-size: 50px;
  margin-right: 40px;
  User-select: none;
}

#player .far,
#player .choice{
  color:rgb(59, 205, 137);
  cursor: pointer;
}

#computer .far,
#computer .choice{
  color:rgb(205, 69, 59);
}

#player .far:last-of-type,
#computer .far:last-of-type{ 
   margin-right: 0;
}

.selected {
  color:black !important;
}

.reset-icon {
  font-size: 30px;
  cursor: pointer;
  margin-left: 50px;
}

.result-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.result-text {
  font-size: 40px;
  margin: unset;
  margin-top: 20px;
}

/* Media Query: Large Smartphone (Vertical) */
@media screen and (max-width: 600px) {
  .game-container {
    width: 95%;
    height: 580px;
  }

  h1 {
    font-size: 24px;
  }

  .player-container {
    margin: 50px 0 25px 25px;
  }

  .far {
    margin-right: 20px;
  }

  .reset-icon {
    margin-top: 25px;
    margin-left: 25px;
  }
}

/* Media Query: iPhone (Vertical) */
@media screen and (max-width: 376px) {
  .game-container {
    height: 550px;
  }

  h1 {
    font-size: 22px;
  }

  .player-container {
    margin: 43px 0 25px 20px;
  }

  .far {
    font-size: 43px;
  }

  .reset-icon {
    margin-top: 15px;
  }

  .result-container {
    margin: 0 20px;
  }
}
