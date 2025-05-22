
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Twitter, Send } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const mockChartData = [
  { name: "Day 1", price: 1 },
  { name: "Day 2", price: 3 },
  { name: "Day 3", price: 7 },
  { name: "Day 4", price: 15 },
  { name: "Day 5", price: 30 },
  { name: "Day 6", price: 50 },
  { name: "Day 7", price: 90 },
];

export default function ZUZACOIN() {
  useEffect(() => {
    document.title = "ZUZACOIN ($ZUZU) - Meme the Future";
  }, []);

  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4 text-white text-sm">
          <a href="#hero" className="hover:text-pink-500">Home</a>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-pink-500">About</a>
            <a href="#chart" className="hover:text-pink-500">Chart</a>
            <a href="#tokenomics" className="hover:text-pink-500">Tokenomics</a>
            <a href="#story" className="hover:text-pink-500">Story</a>
            <a href="#roadmap" className="hover:text-pink-500">Roadmap</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="flex flex-col items-center justify-center text-center py-32 px-4">
        <motion.img
          src="https://zuzucoin1.github.io/zuzacoin/logo.png  "
          alt="ZUZACOIN Logo"
          className="w-40 h-40 mb-6 rounded-xl shadow-xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          ZUZACOIN ($ZUZU)
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-xl text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          The most stylish meme token on Solana. Join the $ZUZU movement — where irony meets velocity.
        </motion.p>
        <motion.div
          className="flex gap-4 justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
        >
          <Button
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 text-lg rounded-2xl shadow-xl"
            onClick={() => setShowPopup(true)}
          >
            Join Now
          </Button>
          <a href="https://t.me/ZuzaCoinCommunity  " target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="bg-white text-black border-white">
              <Send className="mr-2 h-4 w-4" /> Telegram
            </Button>
          </a>
          <a href="https://x.com/ZuzaCoin_SOL  " target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="bg-white text-black border-white">
              <Twitter className="mr-2 h-4 w-4" /> Twitter
            </Button>
          </a>
        </motion.div>

        {showPopup && (
          <div className="mt-6 bg-gray-800 text-white p-6 rounded-xl shadow-xl border border-pink-500 animate-pulse">
            <p className="text-lg font-semibold">Coming Soon... Stay Tuned!</p>
          </div>
        )}
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-black text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About the Token
        </motion.h2>
        <p className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed">
          ZUZACOIN ($ZUZU) is a meme token inspired by the legendary story of a woman named Zuza, who panicked and sold 0.2 ETH — crashing the entire market.
          It’s more than a token — it’s a symbol of crypto emotion and irony. Now it’s rising from the ashes on Solana, the fastest chain for true degen energy.
        </p>
      </section>

      {/* Chart Section */}
      <section id="chart" className="py-20 px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Growth Chart
        </motion.h2>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-xl max-w-4xl mx-auto">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockChartData}>
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Line type="monotone" dataKey="price" stroke="#ec4899" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="py-20 px-6 bg-black text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Tokenomics</h2>
        <div className="max-w-2xl mx-auto text-gray-300 text-lg">
          <table className="w-full text-left border-collapse border border-gray-700">
            <tbody>
              <tr><td className="p-2 border border-gray-700">Ticker</td><td className="p-2 border border-gray-700">$ZUZU</td></tr>
              <tr><td className="p-2 border border-gray-700">Network</td><td className="p-2 border border-gray-700">Solana</td></tr>
              <tr><td className="p-2 border border-gray-700">Platform</td><td className="p-2 border border-gray-700">Pump.fun</td></tr>
              <tr><td className="p-2 border border-gray-700">Total Supply</td><td className="p-2 border border-gray-700">1,000,000,000 $ZUZU</td></tr>
              <tr><td className="p-2 border border-gray-700">Taxes</td><td className="p-2 border border-gray-700">0% Buy / 0% Sell</td></tr>
              <tr><td className="p-2 border border-gray-700">Dev wallet</td><td className="p-2 border border-gray-700">None — 100% to the community!</td></tr>
              <tr><td className="p-2 border border-gray-700">Explorer</td><td className="p-2 border border-gray-700"><a className="text-pink-500 underline" href="https://solscan.io/token/9VsETvfy2RnhbzxB8B9JtGncxzKnKL2MSFMF7TzSppq4  " target="_blank" rel="noopener noreferrer">View on Solscan</a></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Zuza Story */}
      <section id="story" className="py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">The Zuza Story</h2>
        <p className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed">
          One day, an ordinary woman named Zuza sold her crypto in a panic, triggering a market-wide crash. Since then, traders anxiously ask, “Is it Zuza again?”
          We created this token in her honor — a reminder that in crypto, emotion moves markets. Now, $ZUZU is back — this time on Solana, where memes move faster.
        </p>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-20 px-6 bg-black text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Roadmap</h2>
        <div className="max-w-4xl mx-auto text-gray-300 text-lg space-y-4">
          <p>Phase 1: Launch on Pump.fun and grow community</p>
          <p>Phase 2: Memes, viral marketing, and listings</p>
          <p>Phase 3: CEX listings, NFT integration, and Zuzaverse teaser</p>
          <p>Phase 4: Surprise burn events, partnerships, and global recognition</p>
        </div>
      </section>
    </div>
  );
}
