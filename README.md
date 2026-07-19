# 💬 ChatSphere

A real-time room-based chat application built with **Next.js**, **TypeScript**, **Express**, **WebSockets**, and **MongoDB**. Users can join chat rooms, exchange messages instantly, and view previous conversations stored in the database.

---

## 🚀 Features

- 🔐 Join chat rooms with a username
- ⚡ Real-time messaging using WebSockets
- 💾 Persistent message storage with MongoDB
- 📜 Load previous messages when joining a room
- 🕒 Message timestamps
- 🎨 Modern responsive UI with Tailwind CSS
- 🌙 Dark theme interface
- ⌨️ Press Enter to send messages
- 📱 Mobile-friendly layout

---

## 🛠️ Tech Stack

### Frontend

- Next.js 15
- React
- TypeScript
- Tailwind CSS

### Backend

- Express.js
- WebSocket (`ws`)
- TypeScript

### Database

- MongoDB
- Mongoose

---

## 📂 Project Structure

```
ChatSphere
│
├── client
│   ├── app
│   ├── components
│   ├── hooks
│   ├── lib
│   └── types
│
└── server
    ├── config
    ├── controllers
    ├── models
    ├── routes
    ├── types
    ├── websocket
    └── index.ts
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/ChatSphere.git
```

```bash
cd ChatSphere
```

---

### 2. Install Frontend Dependencies

```bash
cd client
npm install
```

---

### 3. Install Backend Dependencies

```bash
cd ../server
npm install
```

---

## 🔑 Environment Variables

### Backend (`server/.env`)

```env
PORT=8080
MONGODB_URI=mongodb://127.0.0.1:27017/chatsphere
```

---

### Frontend (`client/.env.local`)

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_WS_URL=ws://localhost:8080
```

---

## ▶️ Running the Project

### Start the Backend

```bash
cd server
npm run dev
```

---

### Start the Frontend

```bash
cd client
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 📡 WebSocket Protocol

### Join Room

```json
{
  "type": "join",
  "payload": {
    "username": "Mayur",
    "room": "general"
  }
}
```

---

### Send Message

```json
{
  "type": "chat",
  "payload": {
    "message": "Hello World"
  }
}
```

---

## 🎯 Future Improvements

- JWT Authentication
- Online User Presence
- Typing Indicators
- Emoji Reactions
- Image & File Sharing
- Read Receipts
- Private Messaging
- Redis Pub/Sub
- Docker Support
- Deployment on Vercel & Render
- End-to-End Encryption

---

## 📚 What I Learned

- Building real-time applications with WebSockets
- Managing room-based communication
- Designing REST APIs with Express
- MongoDB data modeling using Mongoose
- TypeScript in both frontend and backend
- State management with React Hooks
- Integrating Next.js with an external backend

---

## 👨‍💻 Author

**Mayur Janjire**

- GitHub: https://github.com/mayuxdev

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.