
import './App.css'
import {Loader2, Sparkles} from "lucide-react";
import {motion, AnimatePresence} from 'framer-motion';
import {useState} from "react";

function App() {
    // const emotion = "Romantic";

    // React States
    const [poem, setPoem] = useState('');
    const [emotion, setEmotion] = useState('Neutral');
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    // 2. Dynamic Background Gradients
    const themeGradients = {
        Neutral: 'from-slate-900 via-slate-800 to-slate-900',
        Romantic: 'from-rose-900 via-pink-900 to-purple-900',
        Melancholic: 'from-slate-900 via-blue-900 to-indigo-900',
        Inspiring: 'from-orange-900 via-amber-900 to-yellow-900',
        Devotional: 'from-amber-900 via-orange-900 to-red-900',
    };

    // 3. Fake API Call
    const analyzePoetry = () => {
        if (!poem.trim()) return;

        setIsAnalyzing(true);
        setEmotion("Neutral");

        setTimeout(() => {
            const emotionsList = ['Romantic', 'Melancholic', 'Inspiring', 'Devotional'];
            const randomEmotion = emotionsList[Math.floor(Math.random() * emotionsList.length)];

            setEmotion(randomEmotion);
            setIsAnalyzing(false);
        }, 2000);
    };

    return (
        <>
            <div className={`min-h-screen flex items-center justify-center p-4 transition-all duration-1000 ease-in-out bg-gradient-to-br ${themeGradients[emotion]}`}>
                <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-8 sm:p-12">

                    <div className="flex flex-col items-center mb-10">
                        {/* 1. Header Area */}
                        <div className="p-3 bg-white/10 rounded-full mb-4 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                            <Sparkles className="w-8 h-8 text-rose-300" />
                        </div>

                        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight font-serif mb-3">
                            Rooh-e-Kalam
                        </h1>

                        <p className="text-slate-300 text-xs sm:text-sm font-light tracking-[0.3em] uppercase text-center">
                            Discover the soul of your poetry
                        </p>

                        {/* 2. Text Area (FIXED: Classes wapas add ki hain) */}
                        <div className="relative group w-full mb-8 mt-8">
                            <textarea
                                className="w-full h-48 sm:h-56 p-6 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-lg sm:text-xl font-serif leading-relaxed resize-none focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-white/30 transition-all duration-300"
                                placeholder="Kuch lafz yahan bikhairiye..."
                                value={poem}
                                onChange={(e) => setPoem(e.target.value)}
                            />
                        </div>

                        {/* 3. Button (FIXED: onClick aur Button Text) */}
                        <motion.button
                            whileHover={{scale: 1.02}}
                            whileTap={{scale: 0.98}}
                            onClick={analyzePoetry} // <-- Yahan brackets hatae hain
                            disabled={isAnalyzing || !poem.trim()}
                            className="w-full py-4 px-6 bg-white text-slate-900 rounded-2xl font-bold text-lg tracking-wide shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isAnalyzing ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin"/>
                                    Mehssoos kar raha hoon...
                                </>
                            ) : (
                                <>
                                    <Sparkles className="w-5 h-5" />
                                    Analyze Emotion {/* <-- Text wapas add kiya */}
                                </>
                            )}
                        </motion.button>

                        {/* 4. Result Area */}
                        <AnimatePresence>
                            {emotion !== "Neutral" && !isAnalyzing && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                                    className="mt-10 text-center"
                                >
                                    <p className="text-white/60 text-sm uppercase tracking-[0.3em] mb-2">
                                        The Vibe Is
                                    </p>
                                    <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-300 tracking-widest drop-shadow-lg">
                                        {emotion.toUpperCase()}
                                    </h2>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </>
    )
}


export default App;
