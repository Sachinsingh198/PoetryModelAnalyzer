
import './App.css'
import {Sparkles} from "lucide-react";
import {motion, AnimatePresence} from 'framer-motion';

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
            <div className="min-h-screen flex items-center justify-center bg-slate-900">
                <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-8 sm:p-12">
                    {/*Step 3: The Header Layer */}
                    <div className="flex flex-col items-center mb-10">
                        {/*Icon in a glowing circle*/}
                        <div className="p-3 bg-white/10 rounded-full mb-4 shadow-[0_-_15px_rgba(255, 255, 255, 0.1)]">
                            <Sparkles className="w-8 h-8 text-rose-300"></Sparkles>
                        </div>
                        {/*Main Title */}
                        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight font-serif mb-3">
                            Rooh-e-Kalam
                        </h1>
                        {/*Premium Tagline */}
                        <p className="text-slate-300 text-xs sm:text-sm font-light tracking-[0.3em] uppercase">
                            Discover the soul of your poetry
                        </p>
                        {/*The Input Layer*/}
                        <div className="relative group w-full mb-8 mt-5">
                            <textarea
                                className="w-full h-48 sm:h-56 p-6 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-lg sm:text-xl font-serif leading-relaxed resize-none focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-white/30 transition-all duration-300"
                                placeholder="Kuch lafz yahan bikharaiye..."
                            />
                        </div>

                        {/*button */}
                        <motion.button
                            whileHover={{scale: 1.02}}
                            whileTap={{scale: 0.98}}
                            className="w-full py-4 px-6 bg-rose-400 text-slate-900 rounded-2xl font-bold text-lg tracking-wide shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all flex items-center justify-center gap-3 cursor-pointer "
                        >
                            <Sparkles className="w-5 h-5"/>
                            Analyze Emotion
                        </motion.button>

                        {/*Step 6 : The Result layer (Vibe Check) */}
                        <AnimatePresence>
                            {emotion != "Neutral" && (
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
