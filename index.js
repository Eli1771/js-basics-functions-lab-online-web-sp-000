// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  return Math.abs(42 - blocks);
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;  
}

function distanceTravelledInFeet(startBlock, endBlock) {
  return Math.abs(endBlock - startBlock) * 264;
}

function calculatesFarePrice(startBlock, endBlock) {
  feet = distanceTravelledInFeet(startBlock, endBlock);
  switch(feet) {
    case <= 400:
      return 0;
      break;
    case > 400 && <= 2000: 
      return (feet - 400) * .02; 
      break;
    case > 2000 && <= 2500;
      return 20; 
      break;
    default: 
      return 'cannot travel that far';
  }
}