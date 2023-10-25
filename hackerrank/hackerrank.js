 /* 1.- Algo Practice
 * HackerLand University has the following grading policy:
 * Every student receives a  in the inclusive range from 0 to 100.
 * Any grade less than 33 is a failing grade.
 * Sam is a professor at the university 
 * and likes to round each student's grade according to these rules:
 * If the difference between the grade and the next multiple of 5 is less than 3, 
 * round grade up to the next multiple of 5.
 * If the value of grade is less than 38, 
 * no rounding occurs as the result will still be a failing grade.
 * 
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    let result = [];
    
    grades.forEach(function(grade){
        if (grade > 33){
            let i = 0;
            do {
                i++;                
            } while ((grade + i)%5 != 0)
            if (i < 3 && grade + i >= 38)
                result.push(grade + i)
            else
                result.push(grade)
        }
        else
            result.push(grade)
    })
    return result;
}


/* 2.- Algo Practice
* Sam's house has an apple tree and an orange tree that yield an abundance of fruit. 
* Using the information given below, determine the number of apples and oranges 
* that land on Sam's house.
* The red region denotes the house, where s is the start point, and t is the endpoint. 
* The apple tree is to the left of the house, and the orange tree is to its right.
* Assume the trees are located on a single point, where the apple tree is at point a, 
* and the orange tree is at point b.
* When a fruit falls from its tree, it lands d units of distance 
* from its tree of origin along the x-axis. 
* A negative value of d means the fruit fell d units to the tree's left, 
* and a positive value of d means it falls d units to the tree's right. 
* Given the value of d for m apples and n oranges, determine how many apples and oranges 
* will fall on Sam's house (i.e., in the inclusive range [s,t])?
*The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let countApple = 0;
    let countOrange = 0;    
    apples.forEach(function(apple){
      if(apple >0){
          if (a + apple >= s && a + apple <= t)
            countApple ++;
      }
    })
    console.log(countApple);
    
    oranges.forEach(function(orange){
      if(orange < 0){
          if (b + orange >= s && b + orange <= t)
            countOrange ++;
      }
    })
    console.log(countOrange);
}