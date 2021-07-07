# fibonacci-api-rest
Get the fibonacci series by index number

# Install packages
npm install

# Logic Structure
It create an index.js file, routes and controller. At the controller, It wrote a GET HTTP Method, and set the function to get fibonacci series. In the same controller it created two functions, one for get the fibonacci number by index number and other for get all number of the serie by index number, for example if I send n=6 returns 8 and the serie 0,1,1,2,3,5,8

# Potential improvements
It has two functions, one to get the number serie and other to get all numbers of the serie in a array, but i think that it can improvement that on an only one function.

It also put the functions in another file and import this in the controller file for cleaner code.

To catch error and allows permisions, It also put in another files for clean the index.js file