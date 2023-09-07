export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    for(var i = 0 ; i <array.length; i++){
        animations.push([i, i, "color" , 'green']);
    }
    return animations;
}

function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {

        animations.push([i, j, "color" , '#FFC400']);
        animations.push([i, j,"color",'rgba(66, 134, 244, 0.8)']);

        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
   
            animations.push([i , k,  "color" , '#FF282D']);
            animations.push([i , k , "color" , 'rgba(66, 134, 244, 0.8)']);

            animations.push([k, auxiliaryArray[i] , "swap",-1]);
            

            animations.push([k, auxiliaryArray[i]] );
            mainArray[k++] = auxiliaryArray[i++];
        } else {

            animations.push([j , k,  "color" , '#FF282D']);
            animations.push([j , k , "color" , 'rgba(66, 134, 244, 0.8)']);

            animations.push([k, auxiliaryArray[j] , "swap",-1]);
            mainArray[k++] = auxiliaryArray[j++];
        }
        
    }
    while (i <= middleIdx) {
    
        animations.push([i , k,  "color" , '#FF282D']);
        animations.push([i , k , "color" , 'rgba(66, 134, 244, 0.8)']);

        animations.push([k, auxiliaryArray[i] , "swap",-1]);
     
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        animations.push([j , k,  "color" , '#FF282D']);
        animations.push([j , k , "color" , 'rgba(66, 134, 244, 0.8)']);

        animations.push([k, auxiliaryArray[j] , "swap",-1]);

        mainArray[k++] = auxiliaryArray[j++];
    }
}