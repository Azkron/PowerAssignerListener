@ Hugo Barbachano 2020 / hugobeny@gmail.com

# PowerAssingnerViewer

This app is simple viewer that connects through a socket to the PowerAssinger webservice (`https://github.com/Azkron/PowerAssinger`) through `https://localhost:5001/assingments`

It simply waits for the PowerAssinger webservice and displays the assingments broadcasted by it. Note that for this exercise the PowerAssinger socket only accepts connections from `http://localhost:4200`

# Build the app
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

In order to build you will need to install node.js and angular.
- Download and install node.js https://nodejs.org/en/download/
- On the command line run `npm install -g @angular/cli`
- On the root folder of the project run `npm i` followed by `npm start`, this should automatically launch the browser on `http://localhost:4200/`.

# Or use the files on /dist
You can also copy the files on the dist folder on your localhost folder, but you will need to make sure that the app is hosted at `http://localhost:4200/` or you will need to modify the PowerAssinger webservice to accept connections from other urls by changing the line `.WithOrigins("http://localhost:4200")` on the `Startup.cs` file.

