export function getheapSortAnimations(array) {
    const animations = [];
    const auxiliaryArray = array ; 
    if (array.length <= 1) return array;
 
    heapSorthelper (array ,   animations , auxiliaryArray);
    return animations;
}


function heapSorthelper( arr ,animations , auxiliaryArray)
{
    var N = arr.length;

    // Build heap (rearrange array)
    for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
        heapify(arr, N, i ,animations , auxiliaryArray);

    // One by one extract an element from heap
    for (var i = N - 1; i > 0; i--) {
        animations.push([0,i, "color" , '#FFC400']);
        animations.push([0,i,"color",'rgba(66, 134, 244, 0.8)']);
        animations.push([0, arr[i] , "swap",-1]);
        animations.push([i, arr[0] , "swap",-1]);
        animations.push([i , i, "color" , "green"]);
        // Move current root to end
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        
        // call max heapify on the reduced heap
        heapify(arr, i, 0 ,animations , auxiliaryArray);
    }
    animations.push([0 , 0, "color" , "green"]);
}

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
function heapify(arr, N, i ,  animations , auxiliaryArray)
{
    var largest = i; // Initialize largest as root
    var l = 2 * i + 1; // left = 2*i + 1
    var r = 2 * i + 2; // right = 2*i + 2

    if(l <N ){
        animations.push([l ,i ,  "color" , '#FFC400']);
        animations.push([l, i,"color",'rgba(66, 134, 244, 0.8)']);
    }
    if(r<N){
        animations.push([r,i, "color" , '#FFC400']);
        animations.push([r,i,"color",'rgba(66, 134, 244, 0.8)']);
    }
 
    // If left child is larger than root
    if (l < N && arr[l] > arr[largest])
        largest = l;

    // If right child is larger than largest so far
    if (r < N && arr[r] > arr[largest])
        largest = r;

    // If largest is not root
    if (largest != i) {
        animations.push([i, largest, "color" , '#FF282D']);
        animations.push([i, largest, "color" , 'rgba(66, 134, 244, 0.8)']);
        animations.push([i, arr[largest] , "swap",-1]);
        animations.push([largest, arr[i] , "swap",-1]);

        var swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        // Recursively heapify the affected sub-tree
        heapify(arr, N, largest,  animations , auxiliaryArray);
    }
}

 