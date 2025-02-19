import { useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Hero Section */}
      <section className="text-center py-16 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold pt-10">File Integrity Checker</h1>
        <p className="mt-3 text-lg text-gray-300">Ensure your files remain secure, unaltered, and authentic.</p>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">Why File Integrity Matters</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-xl">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">🔒 Security</h3>
            <p className="text-gray-600">Prevent unauthorized modifications and data corruption.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">⚡ Automatic Scans</h3>
            <p className="text-gray-600">Our system rechecks file integrity every 24 hours.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">✅ AI-Powered</h3>
            <p className="text-gray-600">Uses advanced AI to detect file tampering and inconsistencies.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">How It Works</h2>
        <div className="space-y-6">
          <div className="p-6 bg-gray-200 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-700">1️⃣ Upload Your File</h3>
            <p className="text-gray-600">Drag and drop or select your file for analysis.</p>
          </div>
          <div className="p-6 bg-gray-200 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-700">2️⃣ AI Verification</h3>
            <p className="text-gray-600">Our AI scans and verifies file integrity.</p>
          </div>
          <div className="p-6 bg-gray-200 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-700">3️⃣ Get Results</h3>
            <p className="text-gray-600">Receive a detailed report on file authenticity.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-semibold text-gray-700">Start Protecting Your Files Today</h2>
        <p className="text-gray-600 mt-3">Ensure your files are secure with real-time integrity checks.</p>
        <button 
        onClick={() => navigate("/FileIntegrity")}
          className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-2xl shadow-lg transition-all duration-300 hover:bg-blue-700 active:scale-95"
        >
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Service;
