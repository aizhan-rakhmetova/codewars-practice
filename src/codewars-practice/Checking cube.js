var cubeChecker = function(volume, side){
    if (volume <= 0 || side <= 0) {
        return false;
    }
    const cubeVolume = Math.pow(side, 3);
    return cubeVolume === volume;
}

function hasEqualSides(volume, side) {
    return isCube(volume, side);
}
