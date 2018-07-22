/****************************
 * 
 * Md Al Amin (mdalamin.mis@gmail.com)
 *  
 *****************************/   

/*===== Callback function ===================================================*/
/* =========== Example 01*/
var obj={
    name: 'Md. Al-Amin',
    age: 30,
    home: 'Manikgonj'
}

function info(person, cb){  
    return cb(person);
}
var ag = info(obj, function(data){    
    return data.age;    
})
console.log('My age is ' + ag)
obj


/* ========Example 02*/
var arr = [1,2,3,4,5,6,7,8]

function valuecalculation(arg, cbf){

    var newarr = []

    for(i = 0; i<arg.length; i++){
        newarr[i] = cbf(arg[i])        
    }    
    return newarr
}

var result1 = valuecalculation(arr, function(data){
    return data *-1; 
})
result1

var result2 = valuecalculation(arr, function(data){
    return data - 1; 
})
result2

var result3 = valuecalculation(arr, function(data){
    return data / 2; 
})
result3

var result4 = valuecalculation(arr, function(data){
    return data + 2; 
})
result4

arr

/*==================================================*/

/*==== Customize Map Function ======================*/

var arr = [1,2,3,4,5,6,7]

function mymap(data, callback){
    var newarr = []
    for(var i = 0; i<data.length; i++){
        newarr.push(callback(data[i]))
    }
    return newarr;
}

var mapresult1 = mymap(arr, function(a){
    return a * 3;
})

mapresult1

var mapresult2 = mymap(arr, function(a){
    return a * 4;
})

mapresult2
