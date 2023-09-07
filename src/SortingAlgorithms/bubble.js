export function getbubbleSortAnimations(array) {
    const animations = [];
    const auxiliaryArray = array ; 
    if (array.length <= 1) return array;
 
    bubbleSort(array ,   animations , auxiliaryArray);
    return animations;
}

function bubbleSort(
    arr,    
    animations,
 
) {
    for(var i = 0; i < arr.length; i++){
    
       
        for(var j = 0; j < ( arr.length - i -1 ); j++){
            animations.push([j, j+1, "color" , '#FFC400']);
            animations.push([j, j+1,"color",'rgba(66, 134, 244, 0.8)']);
      
          if(arr[j] > arr[j+1]){    
            
            animations.push([j, j+1, "color" , '#FF282D']);
            animations.push([j, j+1, "color" , 'rgba(66, 134, 244, 0.8)']);
            animations.push([j, arr[j+1] , "swap",-1]);
            animations.push([j+1, arr[j] , "swap",-1]);
         
            // If the condition is true then swap them
            var temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j+1] = temp
          }
        }
        animations.push([arr.length-1-i,arr.length-1-i, "color" , "green"])
      }
 
}

// function doMerge(
//     mainArray,
//     startIdx,
//     middleIdx,
//     endIdx,
//     auxiliaryArray,
//     animations,
// ) {
//     let k = startIdx;
//     let i = startIdx;
//     let j = middleIdx + 1;
//     while (i <= middleIdx && j <= endIdx) {
//         // These are the values that we're comparing; we push them once
//         // to change their color.
//         animations.push([i, j]);
//         // These are the values that we're comparing; we push them a second
//         // time to revert their color.
//         animations.push([i, j]);
//         if (auxiliaryArray[i] <= auxiliaryArray[j]) {
//             // We overwrite the value at index k in the original array with the
//             // value at index i in the auxiliary array.
//             animations.push([k, auxiliaryArray[i]]);
//             mainArray[k++] = auxiliaryArray[i++];
//         } else {
//             // We overwrite the value at index k in the original array with the
//             // value at index j in the auxiliary array.
//             animations.push([k, auxiliaryArray[j]]);
//             mainArray[k++] = auxiliaryArray[j++];
//         }
//     }
//     while (i <= middleIdx) {
//         // These are the values that we're comparing; we push them once
//         // to change their color.
//         animations.push([i, i]);
//         // These are the values that we're comparing; we push them a second
//         // time to revert their color.
//         animations.push([i, i]);
//         // We overwrite the value at index k in the original array with the
//         // value at index i in the auxiliary array.
//         animations.push([k, auxiliaryArray[i]]);
//         mainArray[k++] = auxiliaryArray[i++];
//     }
//     while (j <= endIdx) {
//         // These are the values that we're comparing; we push them once
//         // to change their color.
//         animations.push([j, j]);
//         // These are the values that we're comparing; we push them a second
//         // time to revert their color.
//         animations.push([j, j]);
//         // We overwrite the value at index k in the original array with the
//         // value at index j in the auxiliary array.
//         animations.push([k, auxiliaryArray[j]]);
//         mainArray[k++] = auxiliaryArray[j++];
//     }
// }