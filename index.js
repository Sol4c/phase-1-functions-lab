function distanceFromHqInBlocks(someValue){
    return Math.abs(someValue - 42) 

}

function distanceFromHqInFeet(someValue){
    let blocks = distanceFromHqInBlocks(someValue);
    let feet = blocks * 264
    return feet
    
}

function distanceTravelledInFeet(start, end ){
    let distance = start - end
    return Math.abs(distance * 264)
     

}

function calculatesFarePrice(start, end) {
    let distance = distanceTravelledInFeet(start, end);
    if (distance <= 400) {
      return 0;
    } else if (distance <= 2000) {
      let price = 0.02 * (distance - 400);
      return price;
    } else if (distance >= 2000 && distance <= 2500) {
      return 25;
    } else if (distance > 2500) {
      return 'cannot travel that far';
    }
  }

    
    
  