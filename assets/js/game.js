// Game States

// "WIN" - Player robot has defeated all enemy-robots

//     * Fight all enemy-robots

//     * Defeat each enemy-robot

// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");

var playerHealth = 100;

var playerAttack = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];

var enemyHealth = 50;

var enemyAttack = 12;

var playerMoney = 10;

var fight = function(enemyName) {

    // fight function statements

    // repeat and execute as long as the enemy-robot is alive

    while(playerHealth > 0 && enemyHealth > 0) {

     var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");

         // if player picks "skip" confirm and then stop the loop

     
    if (promptFight === "skip" || promptFight === "SKIP") {

// confirm the player wants to skip
    
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

// if yes (true), leave fight

if (confirmSkip) {

    window.alert(playerName + " has decided to skip this fight. Goodbye!");

    //subtract money from playerMoney for skipping

    playerMoney = playerMoney - 10;

    console.log("playerMoney", playerMoney);

    break;
    }

    }

    // if player choses to fight, then fight

    if (promptFight === "fight" || promptFight === "FIGHT") {

    // remove enemy's health by subtracting the amount set in the playerAttack variable

    enemyHealth = enemyHealth - playerAttack;

        console.log(

            playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining."
        );

    // check enemy's health

    if (enemyHealth <= 0) {

        window.alert(enemyName + " has died! ");

        break;
    }
        else {

            window.alert(enemyName + " still has " + enemyHealth + " health left. ");
        }

    // remove player's health by subtracting the amount set in the enemyAttack variable

    playerHealth = playerHealth - enemyAttack;

        console.log(

            enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining. "
        );

    // check player's health

    if (playerHealth <= 0) {

        window.alert(playerName + " has died! ");

        break;
    }
        else {

            window.alert(playerName + " still has " + playerHealth + " health left. ");
        }

        }

    }

};

for(var i = 0; i < enemyNames.length; i++) {

    if (playerHealth > 0) {

    // let player know what round they are in

        window.alert("Welcome to Robot Gladiators! Round" + ( i + 1 ) );

    // pick new enemy to fight based on index of the enemyNames array

        var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight

        enemyHealth = 50;

    // use debugger to pause script from running and check what's going on at that moment in the code

        // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    
        fight(pickedEnemyName);

        else {

            window.alert("You have lost your robot in battle! Game Over!");

            break;
        }
    
    }


}