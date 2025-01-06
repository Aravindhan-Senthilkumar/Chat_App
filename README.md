# ChatApp

ChatApp is a simple messaging application built with React Native, utilizing Firebase Authentication for user login and sign-up functionality. The project is designed with a clean and modular structure, ensuring easy navigation and scalability.

## 📺 Project Demo

https://youtu.be/AftPdP03cUg

Click the link above mentioned to watch the full demo on YouTube!
## Features
- User authentication (Login & Sign-up) with Firebase Authentication.
- Interactive and responsive UI components.
- Organized and modular project structure.
- Easy customization using constants for colors, fonts, and dimensions.

## Project Structure
The project is organized as follows:

```
├── Components
│   ├── ChatScreenHeader.js
│   ├── ContactScreenFlatList.js
│   ├── ContactScreenHeader.js
│   ├── HomeFlatList.js
│   ├── InputComponent.js
│   ├── LoginHeader.js
│   ├── MessageSection.js
├── Constants
│   ├── colors.js
│   ├── dimensions.js
│   ├── fonts.js
├── data
│   ├── ScreenBackground.jpg
│   ├── userData.js
├── screens
│   ├── ChatScreen.js
│   ├── ContactScreen.js
│   ├── HomeScreen.js
│   ├── LoginScreen.js
│   ├── RegisterScreen.js
├── services
│   ├── firebaseAuth.js
```

### Description of Key Folders and Files

#### Components
This folder contains reusable UI components such as headers, input fields, and message sections.

#### Constants
Holds configuration files for styling (e.g., colors, fonts, dimensions) to ensure consistency throughout the app.

#### data
Contains static data and assets, including sample user data and background images.

#### screens
Includes all the main screens of the application, such as Chat, Contact, Login, Register, and Home screens.

#### services
Handles external integrations. Currently, it includes `firebaseAuth.js`, which manages Firebase Authentication operations.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd ChatApp
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up Firebase:
   - Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
   - Enable Firebase Authentication and configure the project.
   - Download the `google-services.json` (for Android) or `GoogleService-Info.plist` (for iOS) and place it in the appropriate directory.
   - Update the Firebase configuration in `firebaseAuth.js`.

5. Run the app:
   ```bash
   npx react-native run-android  # For Android
   npx react-native run-ios     # For iOS
   ```

## Technologies Used
- **React Native**: For building cross-platform mobile applications.
- **Firebase Authentication**: For secure and seamless user authentication.

## Future Enhancements
- Adding real-time chat functionality using Firebase Firestore.
- Implementing user profile management.
- Adding push notifications for new messages.

## License
This project is open-source and available under the [MIT License](LICENSE).

---
Feel free to contribute to this project by submitting issues or pull requests!
