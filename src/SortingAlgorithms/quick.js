export function getquickSortAnimations(array){
    const animations = [];
 
    if(array.length <=1) return array ;
    quickSorthelper(array , 0 , array.length -1, animations);
    for(var i = 0 ; i <array.length; i++){
        animations.push([i, i, "color" , 'green']);
    }   
    return animations;

}

function partition(array , low , high , animations){
    const pivot = array[low];
     
    let i = low ;
    let j = high;
    while (i <j){

        
        while(array[i] <=pivot){
            animations.push([i, low, "color" , '#FFC400']);
            animations.push([i, low,"color",'rgba(66, 134, 244, 0.8)']);

            i++;
        }
        while(array[j]>pivot){
            animations.push([i, low, "color" , '#FFC400']);
            animations.push([i, low,"color",'rgba(66, 134, 244, 0.8)']);
            j--;
        }


        if(i<j){
            animations.push([i , j,  "color" , '#FF282D']);
            animations.push([i , j , "color" , 'rgba(66, 134, 244, 0.8)']);
            animations.push([j, array[i] , "swap",-1]);
            animations.push([i, array[j] , "swap",-1]);
            var temp = array[j];
            array[j] = array[i];
            array[i] = temp;
        }
    }

    animations.push([j , low,  "color" , '#FF282D']);
    animations.push([j , low , "color" , 'rgba(66, 134, 244, 0.8)']);
    animations.push([j, array[low] , "swap",-1]);
    animations.push([low, array[j] , "swap",-1]);
    
    var temp = array[j];
    array[j] = array[low];
    array[low] = temp;
    return j ;

}
function quickSorthelper(array , low , high ,animations ){
    if(low<high)// atleast two element 
    {
        var p  = partition(array , low , high,animations);
        animations.push([p,p ,  "color" , 'green']);
        quickSorthelper(array , low , p-1 ,animations);
        quickSorthelper(array , p+1 , high,animations);
    }
}