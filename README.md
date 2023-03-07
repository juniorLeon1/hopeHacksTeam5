# SpeakEasy!

## Description
Welcome to our language translator application! In today's connected world, communication is key, and our app is designed to help you break down language barriers and connect with people from all around the world. With our powerful translation technology, you can translate text from one language to another in just seconds. Whether you're traveling, studying, or working with people from different countries, our app has accurate and efficient translation. Please explore the amazing features our app has to offer and start communicating with the world.

## Getting started
To get you started with our application you will need to follow the instructions listed below:

1. Clone the repository or download the source code
2. Open the terminal and navigate to the project folder you just cloned
3. Run 'npm install (dependency name)' to download the dependencies located in our package.json file
4. Run 'nodemon app.js' in your terminal to make the application go live on your local port 2000
5. Open up your browser and in a new tab type in localhost:2000

If you followed these instructions it should take you to a page that looks something like the image below:

![Home page of our application](/public/Images/readmeSample1.png)

## Usage
The SpeakEasy! application is very user friendly and easy to use. All you have to do to see our translating app work is type a text you want translated into the left text area and hit the "Translate Text!" button below it. You will then see the translated text in the text area to the right.

### Some steps are actually required to change the languages and they are listed below:
1. Open your text editor and navigate to the "allLanguages.js" file found in the utils folder
2. You can see all of the languages you can translate between and their symbols
3. Learn the symbols that are equated to each language you want to translate between
4. Navigate to the "app.js" file
5. Locate the call_api function and scroll down until you find the body key inside of the options variable
![body key location](/public/Images/fromAndToLocation.png)
6. Change the english symbol, 'en', to the language symbol you want to translate from
7. Change the spanish symbol, 'es', to the language symbol you want to translate to
8. Go back to your localhost:2000 on your browser and refresh the page
9. Follow the instructions listed directly below the "Usage" subheading

### !!DISCLAIMER!!
The API we used has a 50 request limit per day. To get around this we got four API keys so that in total we had 200 requests to play with. If your SpeakEasy! app does not load try switching between API keys. We listed each key under a variable so you must switch out the variable where it is asking for the API key in the app.js file.

![API Key Switching](/public/Images/APIs.png)

## Credits
### Technologies we used:
- VScode text editor
- Git + Github
- Node.js
- CSS
- JavaScript
- Handlebars
- npm body-parser
- npm express
- npm express-handlebars
- npm request
- npm nodemon
- npm dotenv
- npm mysql2

| Contributor | GitHub Username |
| ----------- | ----------- |
| Junior Leon | juniorLeon1 |
| Alvaro Rodriguez-Salas | arodsalas |
| Breana Young | BreCode13 |
| Miguel Urdaneta | murdanetaos |


## Contact
If you have any questions or concerns about 'SpeakEasy!', please reachout to any of our contributors via the following emails:
- leon71314@gmail.com
- breyoung24@icloud.com
- rodriguezsalas2001@gmail.com
- miguelurd10@gmail.com