import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Documentation = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const documentationSections = [
    { 
      id: "how-it-works", 
      title: "How File Integrity Checking Works", 
      content: "When a file is uploaded, we generate a SHA-256 hash and store it in Supabase. Every 24 hours, we check if the file's hash has changed, ensuring no unauthorized modifications have occurred."
    },
    { 
      id: "build-api", 
      title: "Building a File Integrity API", 
      content: "To build a real API, you can use Node.js and Express. Below is an example of how to implement SHA-256 hashing for file verification.",
      code: `const express = require("express");
const crypto = require("crypto");
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(cors());

// Multer for file uploads
const upload = multer({ dest: "uploads/" });

// Function to generate SHA-256 hash
const generateFileHash = (fileBuffer) => {
  return crypto.createHash("sha256").update(fileBuffer).digest("hex");
};

// API to check file integrity
app.post("/check-file", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const fileHash = generateFileHash(req.file.buffer);
  res.json({ status: "Valid", hash: fileHash });
});

app.listen(5000, () => console.log("Server running on port 5000"));`
    }
  ];

  const filteredSections = documentationSections.filter(section => 
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    section.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (section.code && section.code.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <h1 className="text-4xl font-bold mt-14">File Integrity Checker Documentation</h1>
        <p className="mt-3 text-lg">Learn how to implement secure file integrity checks using hashing and Supabase.</p>
      </section>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto mt-8 px-4">
        <input 
          type="text" 
          placeholder="🔍 Search documentation..." 
          className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Sidebar + Main Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 py-12 px-6">
        
        {/* Sidebar */}
        <aside className="md:w-1/4 bg-white p-4 shadow-md rounded-lg h-fit sticky top-6">
          <h2 className="text-xl font-semibold mb-4">📖 Table of Contents</h2>
          <ul className="space-y-3 text-blue-600">
            {filteredSections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="hover:underline">{section.title}</a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="md:w-3/4 space-y-12">
          {filteredSections.length > 0 ? (
            filteredSections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2 className="text-3xl font-semibold">{section.title}</h2>
                <p className="mt-2 text-gray-600">{section.content}</p>
                {section.code && (
                  <div className="mt-4">
                    <SyntaxHighlighter language="javascript" style={docco}>
                      {section.code}
                    </SyntaxHighlighter>
                  </div>
                )}
              </section>
            ))
          ) : (
            <p className="text-gray-600 text-center">No matching results found.</p>
          )}

          {/* Call to Action */}
          <section className="text-center py-12">
            <h2 className="text-3xl font-semibold">Start Using File Integrity Checker</h2>
            <p className="text-gray-600 mt-3">Ensure the security of your files with our powerful API.</p>
            <button 
              onClick={() => navigate("/FileIntegrity")}
              className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-2xl shadow-lg transition-all duration-300 hover:bg-blue-700 active:scale-95"
            >
              Get Started
            </button>
          </section>

        </main>
      </div>
    </div>
  );
};

export default Documentation;
