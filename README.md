# React Quiz App

This is a basic quiz application built using React, focusing on the `useReducer` hook for state management.

## Description

The quiz app consists of several components such as `Header`, `MainContent`, `Loader`, `Error`, `StartScreen`, `Question`, `NextButton`, `Progress`, `FinishScreen`, `Timer`, and `Footer`. These components are utilized to create an interactive quiz experience for users.

## Features

- Fetches quiz data from an API endpoint
- Utilizes the `useReducer` hook for state management
- Displays loading screen while fetching data
- Handles error cases gracefully
- Implements start screen to initiate the quiz
- Displays questions one by one with options
- Tracks user's answers and updates points accordingly
- Provides progress indicator and timer for each question
- Allows navigation between questions
- Presents finish screen with final score and high score

## Installation

1. Clone the repository:
   git clone https://github.com/your_username/quiz-app.git

2. Install dependencies:
   npm install
3. Start the local server:
   npm run json-server
4. Run the application:
   npm start

## Usage

Once the application is running, users can start the quiz by clicking the start button on the start screen. They can navigate through questions using the next button and answer each question within the given time limit. After answering all questions, users will see their final score and high score.

## Technologies Used

- React
- JavaScript (ES6+)
- HTML
- CSS
