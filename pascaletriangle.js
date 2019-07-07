

var LIMIT = 16;
var triangle = [];
for (var row = 0; row < LIMIT; row += 1) {
    triangle.push([]);
    for (var colomn =0; colomn<=row; colomn +=1) {
        if  (colomn ===0 || colomn === row) {
            triangle[row][colomn] =1;

        }
        else{
           triangle[row] [colomn] = triangle[row-1][colomn-1] + triangle[row-1][colomn];
        }
    }
}
    for (var row=0;row < triangle.length; row+=1){
    console.log(triangle[row].join(''));

}