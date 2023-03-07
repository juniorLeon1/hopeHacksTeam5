# SpeakEasy!

### Description
Welcome to our language translator application! In today's connected world, communication is key, and our app is designed to help you break down language barriers and connect with people from all around the world. With our powerful translation technology, you can translate text from one language to another in just seconds. Whether you're traveling, studying, or working with people from different countries, our app has accurate and efficient translation. Please explore the amazing features our app has to offer and start communicating with the world.

### Getting started
To get you started with our application you will need to follow the instructions listed below:

1: Clone the repository or download the source code
2: Open the terminal and navigate to the project folder you just cloned
3: Run 'npm install (dependency name)' to download the dependencies located in our package.json file
4: Run 'nodemon app.js' in your terminal to make the application go live on your local port 2000
5: Open up your browser and in a new tab type in localhost:2000

If you followed these instructions it should take you to a page that looks something like the image below:

![Home page of our application](/public/Images/readmeSample1.png)

### Usage
The SpeakEasy! application is very user friendly and easy to use. All you have to do to see our translating app work is type a text you want translated into the left text area and hit the "Translate Text!" button below it. You will then see the translated text in the text area to the right.

Some steps are actually required to change the languages and they are listed below:
- Open your text editor and navigate to the "allLanguages.js" file found in the utils folder
- You can see all of the languages you can translate between and their symbols
- Learn the symbols that are equated to each language you want to translate between
- Navigate to the "app.js" file
- Locate the call_api function and scroll down until you find the body key inside of the options variable
[body key location](/public/Images/fromAndToLocation.png)
- Change the english symbol, 'en', to the language symbol you want to translate from
- Change the spanish symbol, 'es', to the language symbol you want to translate to
- Go back to your localhost:2000 on your browser and refresh the page
- Follow the instructions listed directly below the "Usage" subheading

### Credits

### Contact
If you have any questions or concerns about 'SpeakEasy!', please reachout to any of our contributors via email!
leon71314@gmail.com
breyoung24@icloud.com
rodriguezsalas2001@gmail.com
MIGUELS EMAIL HERE ****************


Technologies we used:
- npm handlebars
- npm express
- npm request
- npm nodemon