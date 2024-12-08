
cd ..            --->>>  prev file directory
cd fileName      --->>>  Go to folder where need to make project run
dir              --->>>  get the list of all folders in that directory to move further to working folder.


npx create-react-app fileName  --->>> create basic react file

npm run server   --->>>   To host server.         "server" named from package.json


// *********************************************************************************
// *********************************************************************************
// *********************************************************************************

index.html  -->> SPA(Single Page Application)    as all the tags and libraries are to render on main index.html

// _______  VITE  _____________________________
npm create vite@latest folderName             ||                                                               
package.json                                  ||                                           
react                                         ||                                   
JavaScript                                    ||
cd go to folder                               ||                                       
npm install                                   ||                                       
npm run build                                 ||                      
npm run server                                ||                      
______________________________________________||


// _____  Tailwind  _______________________________
npm install -D tailwindcss postcss autoprefixer   ||   -->> For dependencies                                                            
npx tailwindcss init -p                           ||   -->> For tailwind file create
**** CHANGE content in tailwind.config.js ******  ||
content: [                                        ||
    "./index.html",                               ||  -->> Search content within the index
    "./src/**/*.{js,ts,jsx,tsx}",                 || -->> Search content within the source
  ],                                              ||
********* import to index.css ************        ||
@tailwind base;                                   ||             
@tailwind components;                             ||                     
@tailwind utilities;                              ||                     
__________________________________________________||

// _______  REDUX TOOLKIT with VITE____________
npm create vite@latest folderName             ||                                                               
package.json                                  ||                                           
react                                         ||                                   
JavaScript                                    ||
cd go to folder                               ||                                       
npm install                                   ||      
// ___ install Redux && React-Redux ____      ||
npm install @reduxjs/toolkit                  ||    -->> Redux is a library itself for all
npm install react-redux                       ||          -->> to use redux in react we use React- Redux
npm run server                                ||                      
______________________________________________||


// ______  Blogging Website Project  ___________
npm create vite@latest folderName             ||                                                               
package.json                                  ||                                           
react                                         ||                                   
JavaScript                                    ||
cd go to folder                               ||                                       
npm install @reduxjs/toolkit react-redux      ||    -->> require multiple libraries for Website
react-router-dom appwrite@13.0.2              ||      -->> all these imported file will be added in 
@tinymce/tinymce-react                        ||        -->> "Dependencies" of the package.json
html-react-parser react-hook-form             ||      
npm run server                                ||                      
______________________________________________||