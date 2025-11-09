"use client";

import React from 'react';
import { Trophy, Wallet, Phone, CreditCard } from 'lucide-react';

// --- MOCK UI COMPONENT DEFINITIONS (To fix Module Not Found errors) ---

// 1. Mock Button component
const Button = ({ className, children, ...props }) => (
  <button
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 ${className}`}
    {...props}
  >
    {children}
  </button>
);

// 2. Mock Card component
const Card = ({ className, children, ...props }) => (
  <div
    className={`rounded-xl border bg-card text-card-foreground shadow ${className}`}
    {...props}
  >
    {children}
  </div>
);

// 3. Mock CardContent component
const CardContent = ({ className, children, ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

// --- MAIN PAGE COMPONENT ---

// Fixed: Removed the ': JSX.Element' type annotation to clear the 'Cannot find namespace JSX' error.
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white font-inter">
      
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-900/60 shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4 text-yellow-400 tracking-tight">Tournify</h1>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Join esports tournaments and win real cash rewards 💰
        </p>
        <Button className="bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition duration-300 shadow-xl transform hover:scale-105">
          Get Started
        </Button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            icon: <Trophy className="h-10 w-10 text-yellow-400" />,
            title: 'Play Tournaments',
            desc: 'Join Free Fire, BGMI, and more game tournaments daily.',
          },
          {
            icon: <Wallet className="h-10 w-10 text-yellow-400" />,
            title: 'Win Rewards',
            desc: 'Earn cash prizes, coins, and ranks for every win.',
          },
          {
            icon: <CreditCard className="h-10 w-10 text-yellow-400" />,
            title: 'Secure Payments',
            desc: 'Instant withdrawals via UPI, Paytm, and Razorpay.',
          },
        ].map((item, i) => (
          <Card
            key={i}
            className="bg-gray-900 border border-gray-800 text-center rounded-2xl shadow-2xl hover:border-yellow-400/50 transition duration-300"
          >
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-base">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Upcoming Tournaments Section */}
      <section className="bg-gray-900 py-16 text-center border-t border-b border-gray-800">
        <h2 className="text-4xl font-bold mb-10 text-yellow-400">🎮 Upcoming Tournaments</h2>
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { name: 'Free Fire Squad Battle', date: 'Nov 12, 2025', prize: '₹1,000' },
            { name: 'BGMI Classic Cup', date: 'Nov 15, 2025', prize: '₹2,000' },
            { name: 'Valorant Rush', date: 'Nov 20, 2025', prize: '₹1,500' },
          ].map((t, i) => (
            <Card key={i} className="bg-gray-800 border border-gray-700 p-6 rounded-xl hover:shadow-yellow-400/30 shadow-lg transition duration-300">
              <h3 className="text-2xl font-semibold mb-2 text-white">{t.name}</h3>
              <p className="text-gray-400 mt-2">📅 {t.date}</p>
              <p className="text-yellow-400 font-extrabold text-xl mt-4">
                🏆 Prize: {t.prize}
              </p>
              <Button className="bg-yellow-400 text-black font-semibold mt-6 px-6 py-2 rounded-full hover:bg-yellow-300 transform hover:scale-105">
                Join Now
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Login/Register Section */}
      <section className="py-20 px-6 text-center bg-indigo-900/30">
        <h2 className="text-4xl font-bold mb-8 text-white">🔐 Login / Register</h2>
        <div className="max-w-md mx-auto bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-2xl">
          <Phone className="h-10 w-10 text-yellow-400 mx-auto mb-4" />
          <p className="text-gray-300 mb-6 text-lg">Enter your mobile number to receive OTP</p>
          <input
            type="text"
            placeholder="Enter Mobile Number"
            className="w-full p-4 rounded-xl bg-gray-800 text-gray-100 border border-gray-700 mb-6 placeholder-gray-500 text-center focus:border-yellow-400 transition"
          />
          <Button className="w-full bg-yellow-400 text-black font-bold py-4 rounded-xl hover:bg-yellow-300 transform hover:scale-[1.02]">
            Send OTP
          </Button>
        </div>
      </section>

      {/* Payment Section */}
      <section className="bg-gray-950 py-16 text-center">
        <h2 className="text-4xl font-bold mb-8 text-yellow-400">💳 Payment Methods</h2>
        <div className="max-w-3xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {['UPI', 'Paytm', 'Razorpay'].map((method, i) => (
            <Card key={i} className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">{method}</h3>
              <p className="text-gray-400">Instant and secure transactions</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 py-16 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">📞 Contact Us</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8 text-lg">
          Have questions or feedback? Reach out to our support team for help with tournaments, prizes, or account setup.
        </p>
        <Button className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition duration-300 shadow-lg">
          Email Support
        </Button>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-950 border-t border-gray-800 text-center">
        <p className="text-gray-400 text-base">© {new Date().getFullYear()} Tournify. All rights reserved.</p>
        <p className="text-gray-500 text-sm mt-1">Made by Sahil Dawood 🐺</p>
      </footer>
    </div>
  );
}