 **Project Overview: AI-Powered FAQ Chatbot – AgriBot**
 
This project is an AI-driven FAQ chatbot designed to assist users — particularly farmers — by answering queries related to agriculture, organic farming, Jivamrut, pest control, and soil health.

**🛠️ Tech Stack**

Frontend: React.js

Backend: Node.js + Express

AI Integration: OpenAI GPT-3.5 API

HTTP Client: Axios

Styling: Custom CSS

Environment Management: dotenv

**🔧 Features & Technical Highlights**

Real-time Chat UI using React functional components and useState for state management.

Express Backend API (/api/chat) to receive user input and respond using OpenAI.

OpenAI GPT-3.5 API Integration for dynamic and intelligent natural language responses.

Keyword Matching Logic as a lightweight fallback method for known FAQ responses.

Error Handling to gracefully manage failed API calls and provide fallback messages.

CORS Support and structured JSON communication between client and server.

Feedback Mechanism (👍/👎) for evaluating AI responses (planned for future iterations).

Responsive UI with Contextual Styling — includes a farmer-themed background and styled message bubbles for user and bot messages.

**How to Run Locally**

Frontend:

cd client
npm install
npm start

Backend:

cd server
npm install
node index.js

.env File (in server directory):

env

OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxx



