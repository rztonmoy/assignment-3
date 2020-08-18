// Feet to Mile

function feetToMile( feet ) {
    
    if ( feet < 0 ) {
        return 'Input cannot be negative.';
    }

    else {
        var mile = feet / 5280;   
        var mile = mile.toFixed(2);   
        return mile;
    }
}



// Wood calculator

function woodCalculator( chair, table, bed ) {
    var woodPerChair = 1;
    var woodPerTable = 3;
    var woodPerBed = 5;

    if ( (chair < 0) || (table < 0) || (bed < 0) ) {
        return 'Sorry, input is invalid.'; 
    }

    else {
        var totalWoodNeed = ( chair * woodPerChair ) + ( table * woodPerTable ) + ( bed * woodPerBed ); 
        return totalWoodNeed;
    }
}



// Brick Calculator

function brickCalculator ( floor ) {
    var bricksPerFeet = 1000;
    var firstTenFloor = 10;
    var firstTenFloorHeight = 15;
    var tenToTwentyFloorHeight = 12;
    var moreThenTwentyFloorHeight =10;

    if ( floor <= 0 ) {
        return 'input is invalid.';
    }
    else {
        if ( floor <=10 ) {
            var firstTenFloor = floor;
            return firstTenFloor * firstTenFloorHeight * bricksPerFeet;   
        }
        else if ( floor > 10 && floor <=20 ) {
            tenToTwentyFloor = floor - 10;
            return ( firstTenFloor * firstTenFloorHeight * bricksPerFeet ) + ( tenToTwentyFloor * tenToTwentyFloorHeight * bricksPerFeet );   // calculate total bricks
        }
        else {
            tenToTwentyFloor = 10;
            moreThenTwentyFloor = floor - 20;
            return ( firstTenFloor * firstTenFloorHeight * bricksPerFeet ) + ( tenToTwentyFloor * tenToTwentyFloorHeight * bricksPerFeet ) + ( moreThenTwentyFloor * moreThenTwentyFloorHeight * bricksPerFeet );   // calculate total bricks
        }
    }
}



// Tiny Friend

function tinyFriend( friends ) {
    var tiny = friends[0];  

    if ( friends.length == 0 ) {
        return 'Array is empty.'; 
    }

    for ( var i = 0; i < friends.length; i++ ) {
        var length = friends[i].length;
        
        if( length < tiny.length ) {
            tiny = friends[i];   
        }
    }
    return tiny;
}