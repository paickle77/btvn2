function getFree(isMember){
    return isMember?'$2.00':'$10.00';
}
console.log("phi thanh vien la",getFree(true));
console.log("phi thanh vien la",getFree(false));
console.log("phi thanh vien la",getFree(null));
