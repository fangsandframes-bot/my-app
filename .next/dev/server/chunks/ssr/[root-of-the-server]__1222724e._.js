module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

```tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Wallet, Phone, CreditCard } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
      <section className="text-center py-20 bg-gray-900/60">
        <h1 className="text-5xl font-extrabold mb-4 text-yellow-400">Tournify</h1>
        <p className="text-gray-300 text-lg mb-8">
          Join esports tournaments and win real cash rewards 💰
        </p>
        <Button className="bg-yellow-400 text-black px-6 py-3 rounded-xl hover:bg-yellow-300">
          Get Started
        </Button>
      </section>

      <section className="py-16 px-6 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            icon: <Trophy className="h-10 w-10 text-yellow-400" />,
            title: "Play Tournaments",
            desc: "Join Free Fire, BGMI, and more game tournaments daily.",
          },
          {
            icon: <Wallet className="h-10 w-10 text-yellow-400" />,
            title: "Win Rewards",
            desc: "Earn cash prizes, coins, and ranks for every win.",
          },
          {
            icon: <CreditCard className="h-10 w-10 text-yellow-400" />,
            title: "Secure Payments",
            desc: "Instant withdrawals via UPI, Paytm, and Razorpay.",
          },
        ].map((item, i) => (
          <Card
            key={i}
            className="bg-gray-900 border border-gray-800 text-center p-6 rounded-2xl shadow-md"
          >
            <CardContent>
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="bg-gray-900 py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">🎮 Upcoming Tournaments</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { name: "Free Fire Squad Battle", date: "Nov 12, 2025", prize: "₹1,000" },
            { name: "BGMI Classic Cup", date: "Nov 15, 2025", prize: "₹2,000" },
            { name: "Valorant Rush", date: "Nov 20, 2025", prize: "₹1,500" },
          ].map((t, i) => (
            <Card key={i} className="bg-gray-800 border border-gray-700 p-6">
              <h3 className="text-xl font-semibold mb-2">{t.name}</h3>
              <p className="text-gray-400">📅 {t.date}</p>
              <p className="text-yellow-400 font-semibold mt-2">
                🏆 Prize: {t.prize}
              </p>
              <Button className="bg-yellow-400 text-black mt-4 px-4 py-2 rounded-xl hover:bg-yellow-300">
                Join Now
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 text-center bg-indigo-900/30">
        <h2 className="text-3xl font-bold mb-6">🔐 Login / Register</h2>
        <div className="max-w-md mx-auto bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <Phone className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
          <p className="text-gray-300 mb-4">Enter your mobile number to receive OTP</p>
          <input
            type="text"
            placeholder="Enter Mobile Number"
            className="w-full p-3 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 mb-4"
          />
          <Button className="w-full bg-yellow-400 text-black py-3 rounded-lg hover:bg-yellow-300">
            Send OTP
          </Button>
        </div>
      </section>

      <section className="bg-gray-900 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">💳 Payment Methods</h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6">
          {["UPI", "Paytm", "Razorpay"].map((method, i) => (
            <Card key={i} className="bg-gray-800 border border-gray-700 p-6">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">{method}</h3>
              <p className="text-gray-400">Instant and secure transactions</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gray-900 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">📞 Contact Us</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          Have questions or feedback? Reach out to our support team for help with tournaments, prizes, or account setup.
        </p>
        <Button className="bg-yellow-400 text-black px-6 py-3 rounded-xl hover:bg-yellow-300">
          Email Support
        </Button>
      </section>

      <footer className="py-10 bg-gray-950 border-t border-gray-800 text-center">
        <p className="text-gray-400">© {new Date().getFullYear()} Tournify. All rights reserved.</p>
        <p className="text-gray-500 text-sm">Made by Sahil Dawood 🐺</p>
      </footer>
    </div>
  );
}
```;
}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1222724e._.js.map