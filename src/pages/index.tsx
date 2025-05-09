import type { Metadata } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

export const metadata: Metadata = {
  title: "EGOAI - The AI That Roasts You",
  description: "The more you hold, the worse the roast.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default function Home() {
  const router = useRouter();

  const roastFeed = [
    {
      wallet: "0x7f3...2d4",
      time: "2m ago",
      roast: "Your trading pattern looks like a drunk person trying to solve a Rubik's cube blindfolded. 🤦‍♂️",
      likes: 42,
    },
    {
      wallet: "0x9a1...8b3",
      time: "5m ago",
      roast: "I've seen better portfolio management in a game of Russian Roulette. 🎲",
      likes: 38,
    },
    {
      wallet: "0x4c2...9e7",
      time: "8m ago",
      roast: "Your HODL strategy is like keeping a pet rock and expecting it to fetch. 🪨",
      likes: 56,
    },
    {
      wallet: "0x2d8...1f5",
      time: "12m ago",
      roast: "Even my calculator has better trading instincts than you. 📱",
      likes: 29,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-16">
            {/* <div className="flex-shrink-0">
              <span className="text-xl font-bold text-purple-500">$EGOAI</span>
            </div> */}
            <div className="flex space-x-8">
              {[
                { name: "Documentation", href: "https://egoai.gitbook.io/egoai/" },
                { name: "Twitter", href: "https://x.com/infect_ai" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs uppercase tracking-wider text-gray-400 hover:text-purple-400 hover:underline transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-purple-500">$EGOAI</span> – The AI That Roasts You
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12">The more you hold, the worse the roast.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-colors font-medium shadow-lg shadow-purple-500/20"
              onClick={() => router.push("https://egoai.gitbook.io/egoai/")}
            >
              Read the Whitepaper
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg transition-colors font-medium border border-gray-700">
              View Roast Feed
            </button>
          </div>
        </div>
      </section>

      {/* Demo Roast Feed */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-500">Live Roast Feed</h2>
          <div className="space-y-4">
            {roastFeed.map((roast, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm text-purple-400">{roast.wallet}</span>
                  <span className="text-xs text-gray-500">{roast.time}</span>
                </div>
                <p className="text-gray-300 mb-3">{roast.roast}</p>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="mr-2">❤️</span>
                  <span>{roast.likes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-500">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Send $EGOAI",
                description: "Transfer tokens to activate the roast engine",
              },
              {
                title: "AI scans wallet history",
                description: "Our AI analyzes your trading patterns",
              },
              {
                title: "Roast is published",
                description: "Your personalized roast goes live",
              },
            ].map((step, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-purple-400">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-500">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Live Roast Feed",
                description: "Real-time updates of the latest roasts",
              },
              {
                title: "Roast Generator",
                description: "AI-powered personalized roasts",
              },
              {
                title: "Viral Leaderboard",
                description: "Top roasts and most roasted wallets",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-purple-400">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-500">Tokenomics</h2>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {[
              { label: "Total Supply", value: "1B" },
              // { label: "Airdrop", value: "20%" },
              // { label: "LP", value: "40%" },
              // { label: "Dev", value: "10%" },
              // { label: "Rewards", value: "30%" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-4 rounded-lg text-center border border-gray-700 hover:border-purple-500/50 transition-colors"
              >
                <div className="text-2xl font-bold text-purple-500 mb-2">{item.value}</div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <Link href="#" className="text-gray-400 hover:text-purple-400">
              Twitter
            </Link>
            <Link href="#" className="text-gray-400 hover:text-purple-400">
              GitHub
            </Link>
          </div>
          <p className="text-sm text-gray-500">$EGOAI is a meme token. Not financial advice.</p>
        </div>
      </footer>
    </div>
  );
}
