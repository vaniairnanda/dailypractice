function basicOp(operation, value1, value2)
{ var result = ' ';
if (operation == '-') {
result = value1 - value2;}
else if (operation == '+') {
result = value1 + value2;}
else if (operation == '*') {
result = value1 * value2;}
else if (operation == '/') {
result = value1 / value2;}
return result;
}


console.log("Basic tests\n");
Test.assertSimilar(basicOp('+', 4, 7), 11);
Test.assertSimilar(basicOp('-', 15, 18), -3);
Test.assertSimilar(basicOp('*', 5, 5), 25);
Test.assertSimilar(basicOp('/', 49, 7), 7);