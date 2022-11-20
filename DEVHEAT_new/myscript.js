function fun(){
    var p1= parseInt(prompt('enter your weight in pounds'));
    var p2= parseInt(prompt('enter your height in inches'));
    var bmi = (p1*703)/(p2*p2);

    
    if(p1 != null && p2 != null)
    {
        if(bmi >= 30 ){
        document.getElementById('demo').innerHTML= 'Your weight is considered to be unhealthy';
        }
        else if(bmi >= 25 && bmi < 30){
        document.getElementById('demo').innerHTML= 'You are currently considered to be overweight';
        }
        else if( bmi >= 18.5 && bmi < 25){
        document.getElementById('demo').innerHTML= 'Your weight is considered normal and healthy';
        }
        else{
        document.getElementById('demo').innerHTML= 'You are considered underweight';
        }
    }
    else{
    document.getElementById('demo').innerHTML= 'Enter some values' ;
    }
}