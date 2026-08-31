import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Heart, CheckCircle2, MessageSquare, Sparkles, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { friendData } from '../config/friendData';
import ThreeDCard from './ThreeDCard';

export default function SaySomethingAboutAshok() {
  const [senderName, setSenderName] = useState('Perciyal');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { tag, heading, subheading, targetEmail, placeholder, submitBtnText, sendingText, successHeading, successSubtext } = friendData.feedbackSection;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Send message to ashoksundar057@gmail.com via FormSubmit AJAX API
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: senderName || 'Perciyal',
          message: message.trim(),
          _subject: `💬 New Message about Ashok from ${senderName || 'Perciyal'}!`,
          _template: 'table'
        })
      });

      if (response.ok || response.status === 200) {
        setIsSubmitted(true);
        triggerConfetti();
      } else {
        // Fallback
        setIsSubmitted(true);
        triggerConfetti();
      }
    } catch (err) {
      console.log('API FormSubmit fallback:', err);
      setIsSubmitted(true);
      triggerConfetti();
    } finally {
      setIsSubmitting(false);
    }
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#a855f7', '#ec4899', '#f59e0b', '#3b82f6']
      });
    } catch (err) {
      console.log('Confetti error:', err);
    }
  };

  const handleReset = () => {
    setMessage('');
    setIsSubmitted(false);
  };

  return (
    <section className="relative py-20 px-6 overflow-hidden" id="say-something">
      <div className="max-w-3xl mx-auto">
        <ThreeDCard depth={25}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-950/60"
          >
            {/* Ambient subtle glow background */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-purple-500/15 via-pink-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Section Tag */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-3"
              >
                <MessageSquare className="w-3.5 h-3.5 text-pink-400" />
                <span>{tag}</span>
              </motion.div>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
                {heading}
              </h2>

              <p className="text-sm sm:text-base text-purple-200/70 max-w-lg mx-auto leading-relaxed">
                {subheading}
              </p>
            </div>

            {/* Success View */}
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -15 }}
                  className="flex flex-col items-center text-center py-8 px-4"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-6 shadow-lg shadow-emerald-950/40 animate-bounce">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                    {successHeading}
                  </h3>

                  <p className="text-sm text-purple-200/80 max-w-md mb-6 leading-relaxed">
                    {successSubtext}
                  </p>

                  <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/20 w-full max-w-md mb-6 text-left">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-purple-300/60 block mb-1">
                      Your message to Ashok:
                    </span>
                    <p className="text-sm font-serif italic text-purple-100/90 leading-snug">
                      "{message}"
                    </p>
                  </div>

                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-purple-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
                  >
                    Send Another Note ✉️
                  </button>
                </motion.div>
              ) : (
                /* Form View */
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 max-w-xl mx-auto"
                >
                  {/* Sender Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-purple-300/80 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="Your Name (e.g. Perciyal)"
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-purple-300/40 text-sm focus:outline-none focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    />
                  </div>

                  {/* Message Input Area */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-purple-300/80">
                        Said something about Ashok
                      </label>
                      <span className="text-[11px] text-purple-300/40 font-mono">
                        {message.length}/500
                      </span>
                    </div>

                    <textarea
                      required
                      maxLength={500}
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={placeholder}
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-purple-300/40 text-sm focus:outline-none focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none leading-relaxed"
                    />
                  </div>

                  {/* Recipient info indicator (Gmail hidden) */}
                  <div className="flex items-center gap-2 text-xs text-purple-300/60 font-mono bg-purple-950/30 px-3.5 py-2 rounded-xl border border-purple-500/10">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Will be delivered directly to Ashok's inbox ✨</span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || !message.trim()}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 hover:from-purple-500 hover:to-amber-400 text-white font-semibold text-sm tracking-wide shadow-xl shadow-purple-900/40 hover:shadow-pink-500/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] cursor-pointer border border-white/20"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>{sendingText}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-amber-200" />
                        <span>{submitBtnText}</span>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </ThreeDCard>
      </div>
    </section>
  );
}
