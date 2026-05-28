// import React, { useRef, useState, useEffect } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { AnimatePresence, motion, useSpring, useScroll, useMotionTemplate, useTransform, useMotionValue } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import {
//   MessageCircle,
//   Globe,
//   Mail,
//   LayoutTemplate,
//   ArrowRight,
//   Users,
//   CheckCircle2,
//   Bell,
//   MoreVertical,
//   Heart,
//   TrendingUp,
//   Zap,
//   BarChart3,
//   Search,
//   Menu,
//   ChevronLeft,
//   Clock,
//   Sparkles,
//   Mic,
//   Paperclip,
//   Smile,
//   Send,
//   PlayCircle
// } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// /* -------------------- DATA -------------------- */

// const features = [
//   {
//     title: "Omnichannel Command",
//     subtitle: "Unified Inbox",
//     description: "Connect WhatsApp, Instagram, and Email into one lethal dashboard. Never miss a lead again.",
//     // We keep specific hex codes for the "glow" effects logic, but UI will use classes
//     color: "#D9FF00",
//     screen: "omni",
//   },
//   {
//     title: "WhatsApp Engine",
//     subtitle: "Official API",
//     description: "Run broadcasts, abandoned cart recovery, and automated support with 98% open rates.",
//     color: "#22C55E", // Updated to match your green theme logic
//     screen: "whatsapp",
//   },
//   {
//     title: "Smart Templates",
//     subtitle: "Launch Fast",
//     description: "Pre-approved, high-conversion templates to launch campaigns in seconds, not hours.",
//     color: "#FF2E93",
//     screen: "templates",
//   },
//   {
//     title: "Live Analytics",
//     subtitle: "Performance",
//     description: "Track response rates, revenue attribution, and velocity in real-time.",
//     color: "#00C2FF",
//     screen: "analytics",
//   },
// ];

// /* ---------------- HELPER COMPONENTS ---------------- */

// function Counter({ value }) {
//   const { current } = useRef(value);
//   const motionValue = useMotionValue(0);
//   const springValue = useSpring(motionValue, { damping: 40, stiffness: 100 });
//   const rounded = useTransform(springValue, (latest) => Math.floor(latest));
//   const ref = useRef(null);

//   useEffect(() => {
//     motionValue.set(value);
//   }, [value, motionValue]);

//   useEffect(() => {
//     return rounded.onChange((v) => {
//       if (ref.current) {
//         ref.current.textContent = v.toLocaleString();
//       }
//     });
//   }, [rounded]);

//   return <span ref={ref} />;
// }

// const TypingIndicator = () => (
//   <div className="flex gap-1 p-2.5 bg-slate-100 dark:bg-[#202c33] w-fit rounded-2xl rounded-tl-none border border-black/5 dark:border-white/5 mb-2 shadow-lg items-center">
//     {[0, 1, 2].map((dot) => (
//       <motion.div
//         key={dot}
//         className="w-1.5 h-1.5 bg-lightMainGreen dark:bg-darkMainGreen rounded-full"
//         animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
//         transition={{ duration: 0.6, repeat: Infinity, delay: dot * 0.15 }}
//       />
//     ))}
//   </div>
// );

// /* ---------------- HIGH-FIDELITY PHONE SCREENS ---------------- */

// const PhoneScreen = ({ type }) => {
//   const { t } = useTranslation();
//   const containerVars = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.08,
//         delayChildren: 0.1
//       }
//     }
//   };

//   const itemVars = {
//     hidden: { opacity: 0, y: 15, scale: 0.9 },
//     show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 150, damping: 12 } }
//   };

//   // 1. Omnichannel Screen
//   if (type === "omni") {
//     return (
//       <motion.div
//         variants={containerVars}
//         initial="hidden"
//         animate="show"
//         className="flex flex-col h-full bg-white dark:bg-[#050505] relative font-sans overflow-hidden transition-colors duration-500"
//       >
//         {/* Glow Effect */}
//         <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[50%] bg-gradient-to-b from-lightMainGreen/10 dark:from-darkMainGreen/10 via-transparent to-transparent pointer-events-none" />

//         {/* Header */}
//         <motion.div variants={itemVars} className="flex justify-between items-end p-4 pt-8 pb-2 z-10 shrink-0">
//           <div>
//             <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tighter leading-none">{t("Inbox")}</h2>
//             <motion.div
//               animate={{ opacity: [0.7, 1, 0.7] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="text-lightMainGreen dark:text-darkMainGreen text-[9px] font-bold uppercase tracking-widest mt-1 flex items-center gap-1.5"
//             >
//               <span className="relative flex h-1.5 w-1.5">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lightMainGreen dark:bg-darkMainGreen opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lightMainGreen dark:bg-darkMainGreen"></span>
//               </span>
//               {t("Syncing")}
//             </motion.div>
//           </div>
//           <div className="w-8 h-8 bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full flex items-center justify-center relative backdrop-blur-md">
//             <Bell size={14} className="text-slate-600 dark:text-white/80" />
//             <div className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white dark:border-black" />
//           </div>
//         </motion.div>

//         {/* Search Bar */}
//         <motion.div variants={itemVars} className="px-4 mb-2 shrink-0">
//           <div className="bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl p-2 flex items-center gap-2 text-slate-400 dark:text-gray-500 text-xs">
//             <Search size={14} />
//             <span>{t("Search...")}</span>
//           </div>
//         </motion.div>

//         {/* Filter Tabs */}
//         <motion.div variants={itemVars} className="flex gap-2 px-4 mb-2 overflow-x-auto no-scrollbar shrink-0">
//           {['All', 'Unread', 'VIP'].map((tab, i) => (
//             <div key={i} className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wide border ${i === 0 ? 'bg-lightMainGreen dark:bg-darkMainGreen text-white dark:text-black border-lightMainGreen dark:border-darkMainGreen' : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-gray-400 border-black/5 dark:border-white/5'}`}>
//               {t(tab)}
//             </div>
//           ))}
//         </motion.div>

//         {/* List Items */}
//         <div className="flex-1 px-4 z-10 overflow-hidden flex flex-col gap-2 pb-4">
//           {[
//             { icon: Zap, color: "text-white dark:text-black", bg: "bg-lightMainGreen dark:bg-darkMainGreen", t: "New Lead Detected!", u: "System Alert", time: "Now", badge: true },
//             { icon: MessageCircle, color: "text-[#25D366]", bg: "bg-[#25D366]/20", t: "Where is my order?", u: "Sarah J.", time: "2m" },
//             { icon: Globe, color: "text-purple-500 dark:text-purple-400", bg: "bg-purple-500/10 dark:bg-purple-500/20", t: "Sub confirmed", u: "Stripe Bot", time: "5m" },
//             { icon: Mail, color: "text-blue-500 dark:text-blue-400", bg: "bg-blue-500/10 dark:bg-blue-500/20", t: "Partnership?", u: "Mike Ross", time: "12m" },
//             { icon: MessageCircle, color: "text-orange-500 dark:text-orange-400", bg: "bg-orange-500/10 dark:bg-orange-500/20", t: "Refund success", u: "Support", time: "1h" },
//             { icon: Mail, color: "text-gray-500 dark:text-gray-400", bg: "bg-gray-500/10 dark:bg-gray-500/20", t: "Meeting notes", u: "Team", time: "2h" },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               variants={itemVars}
//               whileHover={{ scale: 1.02, x: 2 }}
//               className={`flex items-center gap-3 p-2.5 rounded-2xl transition-colors cursor-pointer border border-black/5 dark:border-white/5 ${item.badge ? 'bg-slate-50 dark:bg-white/10' : 'bg-white dark:bg-white/5'} shadow-sm dark:shadow-none`}
//             >
//               <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center ${item.color} shadow-lg shrink-0`}>
//                 <item.icon size={14} strokeWidth={2.5} />
//               </div>
//               <div className="flex-1 min-w-0">
//                 <div className="flex justify-between items-center mb-0.5">
//                   <div className={`text-xs font-bold truncate ${item.badge ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-gray-200'}`}>{t(item.u)}</div>
//                   <div className="text-[9px] text-gray-400 font-medium">{t(item.time)}</div>
//                 </div>
//                 <div className={`text-[10px] truncate ${item.badge ? 'text-slate-600 dark:text-white' : 'text-slate-400 dark:text-gray-400'}`}>{t(item.t)}</div>
//               </div>
//               {item.badge && <div className="w-1.5 h-1.5 bg-lightMainGreen dark:bg-darkMainGreen rounded-full shadow-[0_0_8px_theme('colors.lightMainGreen')] dark:shadow-[0_0_8px_theme('colors.darkMainGreen')]" />}
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     );
//   }

//   // 2. WhatsApp Screen
//   if (type === "whatsapp") {
//     return (
//       <motion.div
//         variants={containerVars} initial="hidden" animate="show"
//         className="flex flex-col h-full bg-[#e5ddd5] dark:bg-[#0b1410] relative font-sans overflow-hidden transition-colors duration-500"
//       >
//         {/* Noise & Pattern */}
//         <div className="absolute inset-0 opacity-[0.08] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none z-0 mix-blend-overlay" />
//         <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-lightMainGreen/10 dark:bg-[#00E676]/10 blur-[80px] pointer-events-none" />

//         {/* Header */}
//         <motion.div variants={itemVars} className="bg-slate-100/90 dark:bg-[#202c33]/80 backdrop-blur-xl p-3 pt-8 flex items-center gap-3 shadow-md dark:shadow-2xl z-20 border-b border-black/5 dark:border-white/5 shrink-0">
//           <ChevronLeft className="text-lightMainGreen dark:text-[#00E676] cursor-pointer" size={20} />

//           <div className="w-9 h-9 relative flex items-center justify-center">
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//               className="absolute inset-0 rounded-full border-[1.5px] border-transparent border-t-lightMainGreen dark:border-t-[#00E676] border-r-lightMainGreen dark:border-r-[#00E676]"
//             />
//             <div className="w-full h-full bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-full flex items-center justify-center border-2 border-[#e5ddd5] dark:border-[#0b1410] relative z-10 overflow-hidden">
//               <Users size={14} className="text-white" />
//             </div>
//             <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-lightMainGreen dark:bg-[#00E676] border-2 border-[#e5ddd5] dark:border-[#0b1410] rounded-full z-20" />
//           </div>

//           <div className="flex-1 cursor-pointer">
//             <div className="text-slate-900 dark:text-white text-sm font-bold leading-tight">{t("Vip Customer")}</div>
//             <div className="text-lightMainGreen dark:text-[#00E676] text-[10px] font-medium tracking-wide flex items-center gap-1.5 h-3 overflow-hidden">
//               <motion.div
//                 animate={{ y: [0, -12, -12, 0] }}
//                 transition={{ times: [0, 0.1, 0.9, 1], duration: 4, repeat: Infinity, repeatDelay: 1 }}
//               >
//                 <div className="h-3 flex items-center">● {t("Online Now")}</div>
//                 <div className="h-3 flex items-center italic text-slate-500 dark:text-white/70">{t("typing...")}</div>
//               </motion.div>
//             </div>
//           </div>
//           <div className="flex gap-3 text-gray-400">
//             <Zap size={18} className="hover:text-lightMainGreen dark:hover:text-[#00E676] transition-colors" />
//             <MoreVertical size={18} />
//           </div>
//         </motion.div>

//         {/* Chat Area */}
//         <div className="flex-1 p-3 relative flex flex-col justify-end gap-2 pb-2 overflow-hidden z-10">
//           {/* WhatsApp BG Pattern for Light Mode */}
//           <div className="absolute inset-0 opacity-[0.4] dark:opacity-[0.04] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat z-[-1]" />

//           <motion.div variants={itemVars} className="flex justify-center mb-4">
//             <span className="bg-white/80 dark:bg-[#1f2c34]/80 backdrop-blur-sm text-slate-600 dark:text-[#8696a0] text-[10px] font-medium py-1 px-3 rounded-lg border border-black/5 dark:border-white/5 shadow-sm">{t("Today")}</span>
//           </motion.div>

//           {/* User Message */}
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0, x: -20 }}
//             animate={{ scale: 1, opacity: 1, x: 0 }}
//             transition={{ type: "spring", stiffness: 200, damping: 15 }}
//             className="self-start relative group max-w-[85%]"
//           >
//             <div className="bg-white dark:bg-[#202c33] text-slate-800 dark:text-white p-3 px-4 rounded-2xl rounded-tl-none text-[13px] border border-black/5 dark:border-white/5 shadow-md leading-snug">
//               {t("Do you have the neon hoodie in Large?")}
//               <div className="text-[9px] text-gray-400 text-right mt-1 opacity-60 flex justify-end gap-1">{t("10:42 AM")}</div>
//             </div>
//             <svg className="absolute top-0 -left-[8px] text-white dark:text-[#202c33] fill-current w-2 h-3" viewBox="0 0 10 10"><path d="M10 0v10L0 0h10z" /></svg>
//           </motion.div>

//           {/* Bot Typing */}
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ delay: 0.6, duration: 0.3 }}
//           >
//             <motion.div animate={{ opacity: 0, height: 0, scale: 0 }} transition={{ delay: 2.2 }}>
//               <TypingIndicator />
//             </motion.div>
//           </motion.div>

//           {/* Bot Response */}
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0, x: 20 }}
//             animate={{ scale: 1, opacity: 1, x: 0 }}
//             transition={{ delay: 2.3, type: "spring", stiffness: 180, damping: 14 }}
//             className="self-end relative max-w-[92%]"
//           >
//             <div className="bg-[#dcf8c6] dark:bg-[#005c4b] text-slate-900 dark:text-white p-1.5 rounded-2xl rounded-tr-none shadow-lg border border-black/5 dark:border-[#00E676]/10 relative overflow-hidden">

//               <div className="px-2 pt-1 pb-1">
//                 <span className="text-[13px]">{t("Yes! We just restocked. 🔥")}</span>
//               </div>

//               {/* HOLO-CARD */}
//               <motion.div
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{ height: "auto", opacity: 1 }}
//                 transition={{ delay: 2.5, duration: 0.4 }}
//                 className="relative bg-white/50 dark:bg-[#004d40]/50 mt-1 rounded-xl overflow-hidden border border-black/5 dark:border-[#00E676]/30 group"
//               >
//                 <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-lightMainGreen/40 dark:via-[#00E676]/40 to-transparent translate-x-[-100%] animate-[shimmer_3s_infinite]" />

//                 <div className="relative z-10 p-3 bg-gradient-to-br from-white to-slate-100 dark:from-[#0b1410] dark:to-[#00251a]">

//                   <div className="flex justify-between items-center mb-3">
//                     <div className="flex items-center gap-1.5">
//                       <div className="w-5 h-5 rounded-full bg-lightMainGreen dark:bg-[#00E676] flex items-center justify-center shadow-[0_0_10px_theme('colors.lightMainGreen')] dark:shadow-[0_0_10px_#00E676]">
//                         <Zap size={10} className="text-white dark:text-black fill-current" />
//                       </div>
//                       <span className="text-lightMainGreen dark:text-[#00E676] text-[10px] font-black uppercase tracking-widest">{t("Flash Deal")}</span>
//                     </div>
//                     <div className="bg-red-500/10 border border-red-500/20 text-red-500 dark:text-red-400 text-[9px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
//                       <Clock size={8} className="animate-pulse" /> {t("11:59 left")}
//                     </div>
//                   </div>

//                   <div className="flex gap-3 mb-3">
//                     <div className="w-12 h-12 bg-black/5 dark:bg-white/5 rounded-lg border border-black/10 dark:border-white/10 flex items-center justify-center shrink-0">
//                       <span className="text-2xl">🧥</span>
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <div className="text-slate-500 dark:text-gray-400 text-[10px]">{t("Neon Cyber Hoodie")}</div>
//                       <div className="flex items-baseline gap-2 mt-0.5">
//                         <span className="text-slate-900 dark:text-white font-bold text-sm">${t("89.00")}</span>
//                         <span className="text-gray-400 text-[10px] line-through decoration-red-500">${t("120.00")}</span>
//                       </div>
//                       <div className="mt-1.5 w-full bg-black/10 dark:bg-white/10 h-1 rounded-full overflow-hidden">
//                         <motion.div
//                           initial={{ width: "100%" }}
//                           animate={{ width: "15%" }}
//                           transition={{ duration: 15, ease: "linear" }}
//                           className="h-full bg-gradient-to-r from-lightMainGreen to-teal-400 dark:from-[#00E676] dark:to-[#00b0ff]"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <motion.button
//                     whileTap={{ scale: 0.96 }}
//                     whileHover={{ scale: 1.02 }}
//                     className="w-full bg-lightMainGreen dark:bg-[#00E676] hover:bg-emerald-600 dark:hover:bg-[#00c853] text-white dark:text-[#0b1410] text-[11px] font-extrabold py-2.5 rounded-lg shadow-lg relative overflow-hidden group/btn"
//                   >
//                     <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 skew-y-12" />
//                     <span className="relative z-10 flex items-center justify-center gap-1.5">
//                       {t("Tap to Claim Offer")} <ArrowRight size={10} strokeWidth={3} />
//                     </span>
//                   </motion.button>
//                 </div>
//               </motion.div>

//               <div className="flex justify-end items-center gap-1 p-1 pr-1.5">
//                 <span className="text-[9px] text-slate-500 dark:text-white/60">{t("10:43 AM")}</span>
//                 <CheckCircle2 size={11} className="text-blue-500 dark:text-[#53bdeb]" />
//               </div>
//             </div>

//             <svg className="absolute top-0 -right-[8px] text-[#dcf8c6] dark:text-[#005c4b] fill-current w-2 h-3" style={{ transform: "scaleX(-1)" }} viewBox="0 0 10 10"><path d="M10 0v10L0 0h10z" /></svg>

//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 3.5, type: "spring", stiffness: 300 }}
//               className="absolute -bottom-2 -left-2 z-20"
//             >
//               <div className="bg-white dark:bg-[#202c33] p-1.5 rounded-full border border-gray-100 dark:border-[#0b1410] shadow-xl relative">
//                 <Heart size={12} className="text-red-500 fill-red-500" />
//                 {[...Array(6)].map((_, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
//                     animate={{ opacity: 0, scale: 1, x: (Math.random() - 0.5) * 20, y: (Math.random() - 0.5) * 20 }}
//                     transition={{ delay: 3.5, duration: 0.6 }}
//                     className="absolute inset-0 m-auto w-1 h-1 bg-red-500 rounded-full"
//                   />
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Input Bar */}
//         <motion.div variants={itemVars} className="p-2 pb-6 bg-[#f0f2f5] dark:bg-[#202c33] border-t border-black/5 dark:border-white/5 flex items-center gap-2 shrink-0 z-20">
//           <div className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer">
//             <Sparkles size={18} className="text-gray-400" />
//           </div>
//           <div className="flex-1 bg-white dark:bg-[#2a3942] rounded-2xl h-9 flex items-center px-3 gap-2 border border-black/5 dark:border-black/20">
//             <span className="text-gray-400 dark:text-gray-500 text-xs">{t("Message...")}</span>
//             <div className="ml-auto flex gap-2">
//               <Paperclip size={16} className="text-gray-400 dark:text-gray-500 rotate-[-45deg]" />
//               <div className="w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-500/20" />
//             </div>
//           </div>
//           <div className="w-9 h-9 bg-lightMainGreen dark:bg-[#00a884] rounded-full flex items-center justify-center shadow-lg">
//             <Mic size={16} className="text-white" />
//           </div>
//         </motion.div>
//       </motion.div>
//     );
//   }

//   // 3. Templates Screen
//   if (type === "templates") {
//     return (
//       <motion.div variants={containerVars} initial="hidden" animate="show" className="flex flex-col h-full bg-white dark:bg-[#050505] p-4 pt-8 relative overflow-hidden font-sans transition-colors duration-500">
//         {/* Header */}
//         <motion.div variants={itemVars} className="mb-4 shrink-0 z-20">
//           <h2 className="text-slate-900 dark:text-white font-bold text-xl">{t("Campaigns")}</h2>
//           <p className="text-slate-500 dark:text-gray-500 text-xs mt-0.5">{t("Select a blueprint to launch")}</p>
//         </motion.div>

//         {/* Animated Background Beam */}
//         <motion.div
//           animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
//           transition={{ duration: 10, repeat: Infinity }}
//           className="absolute -top-10 -right-10 w-[200px] h-[200px] bg-[#FF2E93]/20 blur-[80px] pointer-events-none"
//         />

//         {/* List */}
//         <div className="flex-1 space-y-2 relative z-20 overflow-hidden">
//           {[
//             { t: "Flash Sale", sub: "High Urgency", c: "#FF2E93" },
//             { t: "Newsletter", sub: "Weekly Update", c: "gray" },
//             { t: "Review Request", sub: "Post-Purchase", c: "gray" }
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               variants={itemVars}
//               whileHover={{ scale: 1.02, x: 2 }}
//               whileTap={{ scale: 0.98 }}
//               className={`p-3 rounded-2xl border flex items-center gap-3 relative overflow-hidden group cursor-pointer transition-all duration-300 ${i === 0 ? "bg-[#FF2E93]/10 border-[#FF2E93]/50 shadow-[0_0_20px_rgba(255,46,147,0.1)]" : "bg-slate-50 dark:bg-white/5 border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/20"}`}
//             >
//               {i === 0 && <motion.div layoutId="active-ring" className="absolute inset-0 border border-[#FF2E93] rounded-2xl" />}

//               <div className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-lg transition-colors shrink-0 ${i === 0 ? "bg-[#FF2E93] text-white dark:text-black" : "bg-white dark:bg-white/10 text-gray-400 dark:text-gray-500 group-hover:bg-slate-200 dark:group-hover:bg-white/20 group-hover:text-slate-900 dark:group-hover:text-white"}`}>
//                 <LayoutTemplate size={16} />
//               </div>

//               <div className="space-y-0.5 flex-1 min-w-0">
//                 <div className={`text-xs font-bold truncate ${i === 0 ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-white"}`}>{t(item.t)}</div>
//                 <div className="text-[9px] text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wider">{t(item.sub)}</div>
//               </div>

//               {i === 0 && (
//                 <div className="w-3.5 h-3.5 rounded-full bg-[#FF2E93] flex items-center justify-center shadow-[0_0_8px_#FF2E93]">
//                   <CheckCircle2 size={8} className="text-white dark:text-black" />
//                 </div>
//               )}
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom Button */}
//         <motion.button
//           variants={itemVars}
//           whileHover={{ scale: 1.03 }}
//           whileTap={{ scale: 0.95 }}
//           className="mt-2 w-full bg-gradient-to-r from-[#FF2E93] to-[#ff0f7b] text-white text-xs font-bold py-3.5 rounded-xl shadow-[0_5px_20px_rgba(255,46,147,0.3)] flex items-center justify-center gap-2 relative overflow-hidden group shrink-0"
//         >
//           <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_2s_infinite] pointer-events-none" />
//           <span className="relative z-10">{t("Launch Campaign")}</span>
//           <Zap size={14} className="fill-white relative z-10 group-hover:rotate-12 transition-transform" />
//         </motion.button>
//       </motion.div>
//     );
//   }

//   // 4. Analytics Screen
//   if (type === "analytics") {
//     return (
//       <motion.div variants={containerVars} initial="hidden" animate="show" className="flex flex-col h-full bg-white dark:bg-[#050505] p-4 pt-8 font-sans relative overflow-hidden transition-colors duration-500">

//         <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)] pointer-events-none" />

//         <motion.div variants={itemVars} className="flex items-center justify-between mb-4 shrink-0 z-10">
//           <div>
//             <div className="text-slate-500 dark:text-gray-400 text-[9px] uppercase tracking-widest font-bold mb-1 flex items-center gap-1.5">
//               <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-1.5 bg-[#00C2FF] rounded-full" />
//               Revenue
//             </div>
//             <div className="text-2xl font-black text-slate-900 dark:text-white flex items-end gap-0.5 tracking-tight">
//               <span className="text-[#00C2FF] text-lg">$</span>
//               <Counter value={12405} />
//               <span className="text-sm text-gray-400 dark:text-gray-500 font-medium mb-1.5">.00</span>
//             </div>
//           </div>
//           <div className="bg-[#00C2FF]/10 text-[#00C2FF] p-2 rounded-xl border border-[#00C2FF]/20 shadow-[0_0_15px_rgba(0,194,255,0.1)]">
//             <BarChart3 size={18} />
//           </div>
//         </motion.div>

//         {/* Chart Area */}
//         <motion.div variants={itemVars} className="flex-1 flex items-end gap-2 mb-4 relative z-10 px-1 border-b border-black/5 dark:border-white/5 pb-2">
//           {/* Dashed Lines */}
//           <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 z-0 h-[80%]">
//             {[1, 2, 3].map(line => <div key={line} className="border-t border-black dark:border-white border-dashed w-full" />)}
//           </div>

//           {[35, 60, 45, 80, 55, 95].map((h, i) => (
//             <motion.div
//               key={i}
//               initial={{ height: 0 }}
//               animate={{ height: `${h}%` }}
//               transition={{ duration: 1, delay: 0.3 + (i * 0.1), type: "spring", bounce: 0.3 }}
//               className="flex-1 rounded-t-md relative group cursor-pointer min-w-0"
//             >
//               <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-[#00C2FF]/10 to-[#00C2FF] rounded-t-md opacity-80 group-hover:opacity-100 transition-opacity" />
//               <motion.div
//                 initial={{ opacity: 0, y: 5 }}
//                 animate={{ opacity: 1, y: -20 }}
//                 transition={{ delay: 1.2 + (i * 0.1) }}
//                 className="absolute -top-1 left-1/2 -translate-x-1/2 bg-white dark:bg-[#202c33] border border-black/10 dark:border-white/10 px-1.5 py-0.5 rounded text-[8px] font-bold text-slate-900 dark:text-white shadow-xl pointer-events-none whitespace-nowrap"
//               >
//                 {h}k
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-2 gap-3 shrink-0 z-10">
//           {[
//             { label: "ROI", val: "14.2x", color: "text-[#00C2FF]", bg: "bg-[#00C2FF]", sub: "+2.4%" },
//             { label: "Open Rate", val: "98.5%", color: "text-lightMainGreen dark:text-[#00E676]", bg: "bg-lightMainGreen dark:bg-[#00E676]", sub: "+12%" }
//           ].map((stat, i) => (
//             <motion.div
//               key={i}
//               variants={itemVars}
//               whileHover={{ y: -2 }}
//               className="bg-slate-50 dark:bg-white/5 backdrop-blur-md p-3 rounded-2xl border border-black/5 dark:border-white/5 text-center relative overflow-hidden group"
//             >
//               <div className={`absolute top-0 right-0 w-12 h-12 ${stat.bg} blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity`} />
//               <div className="text-[9px] text-gray-400 dark:text-gray-400 mb-1 font-medium uppercase tracking-wider">{t(stat.label)}</div>
//               <div className={`text-lg font-black ${stat.color} mb-1 leading-none`}>{t(stat.val)}</div>
//               <div className="text-[8px] text-gray-500 bg-white dark:bg-white/5 inline-block px-1.5 py-0.5 rounded-full shadow-sm">{t(stat.sub)}</div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     );
//   }

//   return null;
// };

// /* ---------------- HEADER SECTION ---------------- */

// const HeaderSection = () => {
//   const { t } = useTranslation();
//   const ref = useRef(null);

//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   function handleMouseMove({ currentTarget, clientX, clientY }) {
//     const { left, top } = currentTarget.getBoundingClientRect();
//     mouseX.set(clientX - left);
//     mouseY.set(clientY - top);
//   }

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

//   return (
//     <section
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       className="relative min-h-[90vh] flex flex-col items-center justify-center bg-slate-50 dark:bg-[#050505] overflow-hidden border-b border-black/5 dark:border-white/5 selection:bg-lightMainGreen dark:selection:bg-[#D9FF00] selection:text-white dark:selection:text-black transition-colors duration-500"
//     >
//       {/* --- 1. DYNAMIC BACKGROUND --- */}

//       {/* Grid Pattern */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 dark:opacity-100" />

//       {/* Interactive Spotlight */}
//       <motion.div
//         className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
//         style={{
//           background: useMotionTemplate`
//             radial-gradient(
//               600px circle at ${mouseX}px ${mouseY}px,
//               rgba(34, 197, 94, 0.05),
//               transparent 80%
//             )
//           `,
//         }}
//       />

//       {/* Ambient Colors */}
//       <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-100 dark:bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
//       <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-lightMainGreen/10 dark:bg-[#D9FF00]/10 rounded-full blur-[120px] pointer-events-none" />

//       {/* Noise Grain */}
//       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />


//       {/* --- 2. MAIN CONTENT --- */}
//       <motion.div
//         style={{ y, opacity }}
//         className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center"
//       >

//         {/* Animated Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="mb-8"
//         >
//           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-md shadow-sm dark:shadow-[0_0_20px_-10px_rgba(255,255,255,0.5)] hover:border-lightMainGreen dark:hover:border-[#D9FF00]/50 transition-colors cursor-pointer group">
//             <span className="flex h-2 w-2 relative">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lightMainGreen dark:bg-[#D9FF00] opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-lightMainGreen dark:bg-[#D9FF00]"></span>
//             </span>
//             <span className="text-xs font-medium text-slate-600 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">v2.0 <span className="text-gray-300 dark:text-gray-500 mx-1">|</span> {t("Now Available")}</span>
//             <ArrowRight size={12} className="text-slate-400 dark:text-gray-500 group-hover:text-lightMainGreen dark:group-hover:text-[#D9FF00] group-hover:translate-x-0.5 transition-all" />
//           </div>
//         </motion.div>

//         {/* Hero Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
//           className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-slate-900 dark:text-white mb-6 leading-[0.9]"
//         >
//           {t("Automation ")}<br />
//           <span className="relative inline-block">
//             <span className="absolute -inset-2 bg-gradient-to-r from-emerald-100 via-green-100 to-teal-100 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 opacity-50 dark:opacity-20 blur-2xl rounded-full" />
//             <span className="relative text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-white/40">
//               {t("Reimagined.")}
//             </span>
//           </span>
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//           className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
//         >
//           {t("The platform that fuses")} <span className="text-slate-900 dark:text-white font-medium">{t("WhatsApp, Instagram, and Email")}</span>{(" into one lethal operating system designed for revenue.")}
//         </motion.p>

//         {/* CTA Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
//           className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
//         >
//           <button className="w-full sm:w-auto px-8 py-4 bg-lightMainGreen dark:bg-[#D9FF00] hover:bg-emerald-600 dark:hover:bg-[#b8d900] text-white dark:text-black font-bold rounded-full flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(34,197,94,0.5)] dark:shadow-[0_0_40px_-10px_rgba(217,255,0,0.5)]">
//             <Sparkles size={18} className="fill-white dark:fill-black" />
//             {t("Start Free Trial")}
//           </button>

//           <button className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 font-medium rounded-full flex items-center justify-center gap-2 transition-all backdrop-blur-sm shadow-sm dark:shadow-none">
//             <PlayCircle size={18} />
//             {t("Watch Demo")}
//           </button>
//         </motion.div>

//       </motion.div>

//       {/* --- 3. SCROLL INDICATOR --- */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 1 }}
//         className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
//       >
//         <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 dark:text-gray-600 font-bold">{t("Scroll")}</span>
//         <motion.div
//           animate={{ y: [0, 8, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//           className="w-5 h-8 rounded-full border border-slate-300 dark:border-white/20 flex justify-center pt-1"
//         >
//           <motion.div
//             animate={{ height: [4, 12, 4], opacity: [0.5, 1, 0.5] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//             className="w-0.5 bg-lightMainGreen dark:bg-[#D9FF00] rounded-full"
//           />
//         </motion.div>
//       </motion.div>

//     </section>
//   );
// };

// /* ---------------- MAIN COMPONENT ---------------- */

// export default function PinnedFeatureSection() {
//   const { t } = useTranslation();
//   const sectionRef = useRef(null);
//   const [active, setActive] = useState(0);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       ScrollTrigger.create({
//         trigger: sectionRef.current,
//         start: "top top",
//         end: `+=${features.length * 150}%`,
//         scrub: 0.5,
//         pin: true,
//         anticipatePin: 1,
//         onUpdate: (self) => {
//           const index = Math.min(
//             features.length - 1,
//             Math.floor(self.progress * features.length)
//           );
//           setActive(index);
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="bg-slate-50 dark:bg-black text-slate-900 dark:text-white selection:bg-lightMainGreen/30 dark:selection:bg-[#D9FF00]/30 selection:text-lightMainGreen dark:selection:text-[#D9FF00] transition-colors duration-500">
//       <HeaderSection />

//       <section
//         ref={sectionRef}
//         className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-black transition-colors duration-500"
//       >
//         {/* Global Texture */}
//         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 pointer-events-none mix-blend-overlay z-50" />

//         {/* Dynamic Background Glow */}
//         <motion.div
//           animate={{ backgroundColor: features[active].color }}
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[300px] opacity-10 dark:opacity-15 transition-colors duration-1000 pointer-events-none"
//         />

//         {/* Content Container */}
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 min-h-screen md:h-screen flex items-center py-24 md:py-0">
//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center w-full">

//             {/* TEXT SIDE */}
//             <div className="order-1 lg:col-span-2 relative">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={active}
//                   initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
//                   animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//                   exit={{ opacity: 0, y: -30, filter: "blur(10px)", transition: { duration: 0.3 } }}
//                   transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//                 >
//                   <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-10">
//                     <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 flex items-center justify-center text-slate-900 dark:text-white font-mono text-lg md:text-xl backdrop-blur-xl shadow-2xl relative overflow-hidden group">
//                       <div className="absolute inset-0 bg-gradient-to-tr from-lightMainGreen/10 dark:from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//                       0{active + 1}
//                     </div>
//                     <motion.span
//                       layout
//                       className="text-xs md:text-sm uppercase tracking-[0.3em] font-bold px-4 md:px-5 py-2 rounded-full bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 whitespace-nowrap backdrop-blur-md"
//                       style={{ color: features[active].color, borderColor: `${features[active].color}40` }}
//                     >
//                       {t(features[active].subtitle)}
//                     </motion.span>
//                   </div>

//                   <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 md:mb-8 leading-[1.05] tracking-tight">
//                     {t(features[active].title).split(" ").map((word, i) => (
//                       <span key={i} className="block">{word}</span>
//                     ))}
//                   </h2>

//                   <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 mb-8 md:mb-12 max-w-lg leading-relaxed font-light">
//                     {t(features[active].description)}
//                   </p>

//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="group relative px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-white dark:text-black flex items-center gap-3 overflow-hidden shadow-[0_0_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
//                     style={{ backgroundColor: features[active].color }}
//                   >
//                     <span className="relative z-10 text-base md:text-lg">{t("Get Started")}</span>

//                     {/* rtl:rotate-180 flips the arrow, and rtl:group-hover updates the motion direction */}
//                     <ArrowRight
//                       className="relative z-10 transition-transform duration-300 group-hover:translate-x-2 rtl:rotate-180 rtl:group-hover:-translate-x-2"
//                       size={20}
//                       strokeWidth={3}
//                     />

//                     <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12" />
//                   </motion.button>
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             {/* PHONE SIDE */}
//             <div className="order-2 lg:col-span-3 lg:-mr-40 flex justify-center perspective-1000 relative pt-12 lg:pt-24">

//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-black/5 dark:border-white/5 rounded-full border-dashed opacity-30 pointer-events-none"
//               />

//               <motion.div
//                 initial={{ y: 20, rotateX: 5 }}
//                 animate={{ y: [0, -20, 0], rotateX: [5, 0, 5] }}
//                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//                 className="relative w-[240px] h-[480px] xs:w-[280px] xs:h-[560px] md:w-[320px] md:h-[640px] bg-white dark:bg-[#050505] rounded-[2.5rem] md:rounded-[3.5rem] border-[6px] border-slate-200 dark:border-[#1a1a1a] shadow-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10 z-20 group transition-colors duration-500"
//                 style={{
//                   boxShadow: `0 20px 80px -20px ${features[active].color}30, 0 0 0 2px rgba(128,128,128,0.05)`
//                 }}
//               >
//                 <div className="absolute top-4 md:top-5 left-1/2 -translate-x-1/2 w-24 md:w-32 h-6 md:h-8 bg-slate-100 dark:bg-black rounded-full z-50 flex items-center justify-center space-x-2.5 shadow-lg">
//                   <div className="w-16 md:w-20 h-3 md:h-4 bg-slate-200 dark:bg-gray-900/50 rounded-full flex items-center px-2">
//                     <div className="w-1.5 h-1.5 rounded-full bg-lightMainGreen dark:bg-[#00E676] animate-pulse" />
//                   </div>
//                   <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-[#1a1a1a]" />
//                 </div>

//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={active}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.4 }}
//                     className="h-full w-full bg-white dark:bg-[#0a0a0a]"
//                   >
//                     <PhoneScreen type={features[active].screen} />
//                   </motion.div>
//                 </AnimatePresence>

//                 <div className="absolute inset-0 pointer-events-none rounded-[2.2rem] md:rounded-[3.2rem] border-[3px] border-black/5 dark:border-white/5 z-40" />
//                 <div className="absolute top-0 right-0 w-[80%] h-full bg-gradient-to-l from-white/10 dark:from-white/5 to-transparent skew-x-12 opacity-30 pointer-events-none z-40" />
//               </motion.div>
//             </div>
//           </div>
//         </div>

//          {/* Sidebar Indicators */}
//         <div className="hidden lg:flex absolute end-8 top-1/2 -translate-y-1/2 flex-col gap-8 z-30">
//           {features.map((_, i) => (
//             <div
//               key={i}
//               className="relative flex items-center justify-end group cursor-pointer rtl:flex-row-reverse"
//               onClick={() => setActive(i)} // Added so you can actually click them
//             >
//               {/* Label Text */}
//               <span
//                 className={`absolute end-8 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 
//           ${i === active
//                     ? "opacity-100 translate-x-0"
//                     : "opacity-0 translate-x-4 rtl:-translate-x-4" // Flipped animation for RTL
//                   }`}
//                 style={{ color: features[i].color }}
//               >
//                 {t(features[i].screen)}
//               </span>

//               {/* Circle Indicator */}
//               <motion.div
//                 animate={{
//                   width: i === active ? 20 : 6,
//                   height: i === active ? 20 : 6,
//                   backgroundColor: i === active ? "transparent" : "#888",
//                   borderColor: i === active ? features[i].color : "transparent",
//                   borderWidth: i === active ? 2 : 0,
//                 }}
//                 className="rounded-full transition-all duration-500 relative flex items-center justify-center opacity-50 dark:opacity-100"
//               >
//                 {i === active && (
//                   <div
//                     className="w-1.5 h-1.5 rounded-full"
//                     style={{ backgroundColor: features[i].color }}
//                   />
//                 )}
//               </motion.div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }




































import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { AnimatePresence, motion, useSpring, useScroll, useMotionTemplate, useTransform, useMotionValue } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  MessageCircle,
  Globe,
  Mail,
  LayoutTemplate,
  ArrowRight,
  Users,
  CheckCircle2,
  Bell,
  MoreVertical,
  Heart,
  TrendingUp,
  Zap,
  BarChart3,
  Search,
  Menu,
  ChevronLeft,
  Clock,
  Sparkles,
  Mic,
  Paperclip,
  Smile,
  Send,
  PlayCircle
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* -------------------- DATA -------------------- */

const features = [
  {
    title: "Omnichannel Command",
    subtitle: "Unified Inbox",
    description: "Connect WhatsApp, Instagram, and Email into one lethal dashboard. Never miss a lead again.",
    // We keep specific hex codes for the "glow" effects logic, but UI will use classes
    color: "#D9FF00",
    screen: "omni",
  },
 {
  title: "WhatsApp Engine",
  subtitle: "Official Tech Provider",
  description: "We are an Official WhatsApp Tech Provider, offering direct access to broadcasts and automated support with 98% open rates.",
  color: "#22C55E",
  screen: "whatsapp",
},
  {
    title: "Smart Templates",
    subtitle: "Launch Fast",
    description: "Pre-approved, high-conversion templates to launch campaigns in seconds, not hours.",
    color: "#FF2E93",
    screen: "templates",
  },
  {
    title: "Live Analytics",
    subtitle: "Performance",
    description: "Track response rates, revenue attribution, and velocity in real-time.",
    color: "#00C2FF",
    screen: "analytics",
  },
];

/* ---------------- HELPER COMPONENTS ---------------- */

function Counter({ value }) {
  const { current } = useRef(value);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 40, stiffness: 100 });
  const rounded = useTransform(springValue, (latest) => Math.floor(latest));
  const ref = useRef(null);

  useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);

  useEffect(() => {
    return rounded.onChange((v) => {
      if (ref.current) {
        ref.current.textContent = v.toLocaleString();
      }
    });
  }, [rounded]);

  return <span ref={ref} />;
}

const TypingIndicator = () => (
  <div className="flex gap-1 p-2.5 bg-slate-100 dark:bg-[#202c33] w-fit rounded-2xl rounded-tl-none border border-black/5 dark:border-white/5 mb-2 shadow-lg items-center">
    {[0, 1, 2].map((dot) => (
      <motion.div
        key={dot}
        className="w-1.5 h-1.5 bg-lightMainGreen dark:bg-darkMainGreen rounded-full"
        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: dot * 0.15 }}
      />
    ))}
  </div>
);

/* ---------------- HIGH-FIDELITY PHONE SCREENS ---------------- */

const PhoneScreen = ({ type }) => {
  const { t } = useTranslation();
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 15, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 150, damping: 12 } }
  };

  // 1. Omnichannel Screen
  if (type === "omni") {
    return (
      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="flex flex-col h-full bg-white dark:bg-[#050505] relative font-sans overflow-hidden transition-colors duration-500"
      >
        {/* Glow Effect */}
        <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[50%] bg-gradient-to-b from-lightMainGreen/10 dark:from-darkMainGreen/10 via-transparent to-transparent pointer-events-none" />

        {/* Header */}
        <motion.div variants={itemVars} className="flex justify-between items-end p-4 pt-8 pb-2 z-10 shrink-0">
          <div>
            <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tighter leading-none">{t("Inbox")}</h2>
            <motion.div
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-lightMainGreen dark:text-darkMainGreen text-[9px] font-bold uppercase tracking-widest mt-1 flex items-center gap-1.5"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lightMainGreen dark:bg-darkMainGreen opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lightMainGreen dark:bg-darkMainGreen"></span>
              </span>
              {t("Syncing")}
            </motion.div>
          </div>
          <div className="w-8 h-8 bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full flex items-center justify-center relative backdrop-blur-md">
            <Bell size={14} className="text-slate-600 dark:text-white/80" />
            <div className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white dark:border-black" />
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div variants={itemVars} className="px-4 mb-2 shrink-0">
          <div className="bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl p-2 flex items-center gap-2 text-slate-400 dark:text-gray-500 text-xs">
            <Search size={14} />
            <span>{t("Search...")}</span>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div variants={itemVars} className="flex gap-2 px-4 mb-2 overflow-x-auto no-scrollbar shrink-0">
          {['All', 'Unread', 'VIP'].map((tab, i) => (
            <div key={i} className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wide border ${i === 0 ? 'bg-lightMainGreen dark:bg-darkMainGreen text-white dark:text-black border-lightMainGreen dark:border-darkMainGreen' : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-gray-400 border-black/5 dark:border-white/5'}`}>
              {t(tab)}
            </div>
          ))}
        </motion.div>

        {/* List Items */}
        <div className="flex-1 px-4 z-10 overflow-hidden flex flex-col gap-2 pb-4">
          {[
            { icon: Zap, color: "text-white dark:text-black", bg: "bg-lightMainGreen dark:bg-darkMainGreen", t: "New Lead Detected!", u: "System Alert", time: "Now", badge: true },
            { icon: MessageCircle, color: "text-[#25D366]", bg: "bg-[#25D366]/20", t: "Where is my order?", u: "Sarah J.", time: "2m" },
            { icon: Globe, color: "text-purple-500 dark:text-purple-400", bg: "bg-purple-500/10 dark:bg-purple-500/20", t: "Sub confirmed", u: "Stripe Bot", time: "5m" },
            { icon: Mail, color: "text-blue-500 dark:text-blue-400", bg: "bg-blue-500/10 dark:bg-blue-500/20", t: "Partnership?", u: "Mike Ross", time: "12m" },
            { icon: MessageCircle, color: "text-orange-500 dark:text-orange-400", bg: "bg-orange-500/10 dark:bg-orange-500/20", t: "Refund success", u: "Support", time: "1h" },
            { icon: Mail, color: "text-gray-500 dark:text-gray-400", bg: "bg-gray-500/10 dark:bg-gray-500/20", t: "Meeting notes", u: "Team", time: "2h" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVars}
              whileHover={{ scale: 1.02, x: 2 }}
              className={`flex items-center gap-3 p-2.5 rounded-2xl transition-colors cursor-pointer border border-black/5 dark:border-white/5 ${item.badge ? 'bg-slate-50 dark:bg-white/10' : 'bg-white dark:bg-white/5'} shadow-sm dark:shadow-none`}
            >
              <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center ${item.color} shadow-lg shrink-0`}>
                <item.icon size={14} strokeWidth={2.5} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-0.5">
                  <div className={`text-xs font-bold truncate ${item.badge ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-gray-200'}`}>{t(item.u)}</div>
                  <div className="text-[9px] text-gray-400 font-medium">{t(item.time)}</div>
                </div>
                <div className={`text-[10px] truncate ${item.badge ? 'text-slate-600 dark:text-white' : 'text-slate-400 dark:text-gray-400'}`}>{t(item.t)}</div>
              </div>
              {item.badge && <div className="w-1.5 h-1.5 bg-lightMainGreen dark:bg-darkMainGreen rounded-full shadow-[0_0_8px_theme('colors.lightMainGreen')] dark:shadow-[0_0_8px_theme('colors.darkMainGreen')]" />}
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }

  // 2. WhatsApp Screen
  if (type === "whatsapp") {
    return (
      <motion.div
        variants={containerVars} initial="hidden" animate="show"
        className="flex flex-col h-full bg-[#e5ddd5] dark:bg-[#0b1410] relative font-sans overflow-hidden transition-colors duration-500"
      >
        {/* Noise & Pattern */}
        <div className="absolute inset-0 opacity-[0.08] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none z-0 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-lightMainGreen/10 dark:bg-[#00E676]/10 blur-[80px] pointer-events-none" />

        {/* Header */}
        <motion.div variants={itemVars} className="bg-slate-100/90 dark:bg-[#202c33]/80 backdrop-blur-xl p-3 pt-8 flex items-center gap-3 shadow-md dark:shadow-2xl z-20 border-b border-black/5 dark:border-white/5 shrink-0">
          <ChevronLeft className="text-lightMainGreen dark:text-[#00E676] cursor-pointer" size={20} />

          <div className="w-9 h-9 relative flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-[1.5px] border-transparent border-t-lightMainGreen dark:border-t-[#00E676] border-r-lightMainGreen dark:border-r-[#00E676]"
            />
            <div className="w-full h-full bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-full flex items-center justify-center border-2 border-[#e5ddd5] dark:border-[#0b1410] relative z-10 overflow-hidden">
              <Users size={14} className="text-white" />
            </div>
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-lightMainGreen dark:bg-[#00E676] border-2 border-[#e5ddd5] dark:border-[#0b1410] rounded-full z-20" />
          </div>

          <div className="flex-1 cursor-pointer">
            <div className="text-slate-900 dark:text-white text-sm font-bold leading-tight">{t("Vip Customer")}</div>
            <div className="text-lightMainGreen dark:text-[#00E676] text-[10px] font-medium tracking-wide flex items-center gap-1.5 h-3 overflow-hidden">
              <motion.div
                animate={{ y: [0, -12, -12, 0] }}
                transition={{ times: [0, 0.1, 0.9, 1], duration: 4, repeat: Infinity, repeatDelay: 1 }}
              >
                <div className="h-3 flex items-center">● {t("Online Now")}</div>
                <div className="h-3 flex items-center italic text-slate-500 dark:text-white/70">{t("typing...")}</div>
              </motion.div>
            </div>
          </div>
          <div className="flex gap-3 text-gray-400">
            <Zap size={18} className="hover:text-lightMainGreen dark:hover:text-[#00E676] transition-colors" />
            <MoreVertical size={18} />
          </div>
        </motion.div>

        {/* Chat Area */}
        <div className="flex-1 p-3 relative flex flex-col justify-end gap-2 pb-2 overflow-hidden z-10">
          {/* WhatsApp BG Pattern for Light Mode */}
          <div className="absolute inset-0 opacity-[0.4] dark:opacity-[0.04] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat z-[-1]" />

          <motion.div variants={itemVars} className="flex justify-center mb-4">
            <span className="bg-white/80 dark:bg-[#1f2c34]/80 backdrop-blur-sm text-slate-600 dark:text-[#8696a0] text-[10px] font-medium py-1 px-3 rounded-lg border border-black/5 dark:border-white/5 shadow-sm">{t("Today")}</span>
          </motion.div>

          {/* User Message */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, x: -20 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="self-start relative group max-w-[85%]"
          >
            <div className="bg-white dark:bg-[#202c33] text-slate-800 dark:text-white p-3 px-4 rounded-2xl rounded-tl-none text-[13px] border border-black/5 dark:border-white/5 shadow-md leading-snug">
              {t("Do you have the neon hoodie in Large?")}
              <div className="text-[9px] text-gray-400 text-right mt-1 opacity-60 flex justify-end gap-1">{t("10:42 AM")}</div>
            </div>
            <svg className="absolute top-0 -left-[8px] text-white dark:text-[#202c33] fill-current w-2 h-3" viewBox="0 0 10 10"><path d="M10 0v10L0 0h10z" /></svg>
          </motion.div>

          {/* Bot Typing */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ delay: 0.6, duration: 0.3 }}
          >
            <motion.div animate={{ opacity: 0, height: 0, scale: 0 }} transition={{ delay: 2.2 }}>
              <TypingIndicator />
            </motion.div>
          </motion.div>

          {/* Bot Response */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, x: 20 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ delay: 2.3, type: "spring", stiffness: 180, damping: 14 }}
            className="self-end relative max-w-[92%]"
          >
            <div className="bg-[#dcf8c6] dark:bg-[#005c4b] text-slate-900 dark:text-white p-1.5 rounded-2xl rounded-tr-none shadow-lg border border-black/5 dark:border-[#00E676]/10 relative overflow-hidden">

              <div className="px-2 pt-1 pb-1">
                <span className="text-[13px]">{t("Yes! We just restocked. 🔥")}</span>
              </div>

              {/* HOLO-CARD */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.4 }}
                className="relative bg-white/50 dark:bg-[#004d40]/50 mt-1 rounded-xl overflow-hidden border border-black/5 dark:border-[#00E676]/30 group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-lightMainGreen/40 dark:via-[#00E676]/40 to-transparent translate-x-[-100%] animate-[shimmer_3s_infinite]" />

                <div className="relative z-10 p-3 bg-gradient-to-br from-white to-slate-100 dark:from-[#0b1410] dark:to-[#00251a]">

                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-lightMainGreen dark:bg-[#00E676] flex items-center justify-center shadow-[0_0_10px_theme('colors.lightMainGreen')] dark:shadow-[0_0_10px_#00E676]">
                        <Zap size={10} className="text-white dark:text-black fill-current" />
                      </div>
                      <span className="text-lightMainGreen dark:text-[#00E676] text-[10px] font-black uppercase tracking-widest">{t("Flash Deal")}</span>
                    </div>
                    <div className="bg-red-500/10 border border-red-500/20 text-red-500 dark:text-red-400 text-[9px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                      <Clock size={8} className="animate-pulse" /> {t("11:59 left")}
                    </div>
                  </div>

                  <div className="flex gap-3 mb-3">
                    <div className="w-12 h-12 bg-black/5 dark:bg-white/5 rounded-lg border border-black/10 dark:border-white/10 flex items-center justify-center shrink-0">
                      <span className="text-2xl">🧥</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-slate-500 dark:text-gray-400 text-[10px]">{t("Neon Cyber Hoodie")}</div>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="text-slate-900 dark:text-white font-bold text-sm">${t("89.00")}</span>
                        <span className="text-gray-400 text-[10px] line-through decoration-red-500">${t("120.00")}</span>
                      </div>
                      <div className="mt-1.5 w-full bg-black/10 dark:bg-white/10 h-1 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: "100%" }}
                          animate={{ width: "15%" }}
                          transition={{ duration: 15, ease: "linear" }}
                          className="h-full bg-gradient-to-r from-lightMainGreen to-teal-400 dark:from-[#00E676] dark:to-[#00b0ff]"
                        />
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    whileHover={{ scale: 1.02 }}
                    className="w-full bg-lightMainGreen dark:bg-[#00E676] hover:bg-emerald-600 dark:hover:bg-[#00c853] text-white dark:text-[#0b1410] text-[11px] font-extrabold py-2.5 rounded-lg shadow-lg relative overflow-hidden group/btn"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 skew-y-12" />
                    <span className="relative z-10 flex items-center justify-center gap-1.5">
                      {t("Tap to Claim Offer")} <ArrowRight size={10} strokeWidth={3} />
                    </span>
                  </motion.button>
                </div>
              </motion.div>

              <div className="flex justify-end items-center gap-1 p-1 pr-1.5">
                <span className="text-[9px] text-slate-500 dark:text-white/60">{t("10:43 AM")}</span>
                <CheckCircle2 size={11} className="text-blue-500 dark:text-[#53bdeb]" />
              </div>
            </div>

            <svg className="absolute top-0 -right-[8px] text-[#dcf8c6] dark:text-[#005c4b] fill-current w-2 h-3" style={{ transform: "scaleX(-1)" }} viewBox="0 0 10 10"><path d="M10 0v10L0 0h10z" /></svg>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 3.5, type: "spring", stiffness: 300 }}
              className="absolute -bottom-2 -left-2 z-20"
            >
              <div className="bg-white dark:bg-[#202c33] p-1.5 rounded-full border border-gray-100 dark:border-[#0b1410] shadow-xl relative">
                <Heart size={12} className="text-red-500 fill-red-500" />
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                    animate={{ opacity: 0, scale: 1, x: (Math.random() - 0.5) * 20, y: (Math.random() - 0.5) * 20 }}
                    transition={{ delay: 3.5, duration: 0.6 }}
                    className="absolute inset-0 m-auto w-1 h-1 bg-red-500 rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Input Bar */}
        <motion.div variants={itemVars} className="p-2 pb-6 bg-[#f0f2f5] dark:bg-[#202c33] border-t border-black/5 dark:border-white/5 flex items-center gap-2 shrink-0 z-20">
          <div className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer">
            <Sparkles size={18} className="text-gray-400" />
          </div>
          <div className="flex-1 bg-white dark:bg-[#2a3942] rounded-2xl h-9 flex items-center px-3 gap-2 border border-black/5 dark:border-black/20">
            <span className="text-gray-400 dark:text-gray-500 text-xs">{t("Message...")}</span>
            <div className="ml-auto flex gap-2">
              <Paperclip size={16} className="text-gray-400 dark:text-gray-500 rotate-[-45deg]" />
              <div className="w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-500/20" />
            </div>
          </div>
          <div className="w-9 h-9 bg-lightMainGreen dark:bg-[#00a884] rounded-full flex items-center justify-center shadow-lg">
            <Mic size={16} className="text-white" />
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // 3. Templates Screen
  if (type === "templates") {
    return (
      <motion.div variants={containerVars} initial="hidden" animate="show" className="flex flex-col h-full bg-white dark:bg-[#050505] p-4 pt-8 relative overflow-hidden font-sans transition-colors duration-500">
        {/* Header */}
        <motion.div variants={itemVars} className="mb-4 shrink-0 z-20">
          <h2 className="text-slate-900 dark:text-white font-bold text-xl">{t("Campaigns")}</h2>
          <p className="text-slate-500 dark:text-gray-500 text-xs mt-0.5">{t("Select a blueprint to launch")}</p>
        </motion.div>

        {/* Animated Background Beam */}
        <motion.div
          animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-10 -right-10 w-[200px] h-[200px] bg-[#FF2E93]/20 blur-[80px] pointer-events-none"
        />

        {/* List */}
        <div className="flex-1 space-y-2 relative z-20 overflow-hidden">
          {[
            { t: "Flash Sale", sub: "High Urgency", c: "#FF2E93" },
            { t: "Newsletter", sub: "Weekly Update", c: "gray" },
            { t: "Review Request", sub: "Post-Purchase", c: "gray" }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVars}
              whileHover={{ scale: 1.02, x: 2 }}
              whileTap={{ scale: 0.98 }}
              className={`p-3 rounded-2xl border flex items-center gap-3 relative overflow-hidden group cursor-pointer transition-all duration-300 ${i === 0 ? "bg-[#FF2E93]/10 border-[#FF2E93]/50 shadow-[0_0_20px_rgba(255,46,147,0.1)]" : "bg-slate-50 dark:bg-white/5 border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/20"}`}
            >
              {i === 0 && <motion.div layoutId="active-ring" className="absolute inset-0 border border-[#FF2E93] rounded-2xl" />}

              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-lg transition-colors shrink-0 ${i === 0 ? "bg-[#FF2E93] text-white dark:text-black" : "bg-white dark:bg-white/10 text-gray-400 dark:text-gray-500 group-hover:bg-slate-200 dark:group-hover:bg-white/20 group-hover:text-slate-900 dark:group-hover:text-white"}`}>
                <LayoutTemplate size={16} />
              </div>

              <div className="space-y-0.5 flex-1 min-w-0">
                <div className={`text-xs font-bold truncate ${i === 0 ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-white"}`}>{t(item.t)}</div>
                <div className="text-[9px] text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wider">{t(item.sub)}</div>
              </div>

              {i === 0 && (
                <div className="w-3.5 h-3.5 rounded-full bg-[#FF2E93] flex items-center justify-center shadow-[0_0_8px_#FF2E93]">
                  <CheckCircle2 size={8} className="text-white dark:text-black" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <motion.button
          variants={itemVars}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          className="mt-2 w-full bg-gradient-to-r from-[#FF2E93] to-[#ff0f7b] text-white text-xs font-bold py-3.5 rounded-xl shadow-[0_5px_20px_rgba(255,46,147,0.3)] flex items-center justify-center gap-2 relative overflow-hidden group shrink-0"
        >
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_2s_infinite] pointer-events-none" />
          <span className="relative z-10">{t("Launch Campaign")}</span>
          <Zap size={14} className="fill-white relative z-10 group-hover:rotate-12 transition-transform" />
        </motion.button>
      </motion.div>
    );
  }

  // 4. Analytics Screen
  if (type === "analytics") {
    return (
      <motion.div variants={containerVars} initial="hidden" animate="show" className="flex flex-col h-full bg-white dark:bg-[#050505] p-4 pt-8 font-sans relative overflow-hidden transition-colors duration-500">

        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)] pointer-events-none" />

        <motion.div variants={itemVars} className="flex items-center justify-between mb-4 shrink-0 z-10">
          <div>
            <div className="text-slate-500 dark:text-gray-400 text-[9px] uppercase tracking-widest font-bold mb-1 flex items-center gap-1.5">
              <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-1.5 bg-[#00C2FF] rounded-full" />
              Revenue
            </div>
            <div className="text-2xl font-black text-slate-900 dark:text-white flex items-end gap-0.5 tracking-tight">
              <span className="text-[#00C2FF] text-lg">$</span>
              <Counter value={12405} />
              <span className="text-sm text-gray-400 dark:text-gray-500 font-medium mb-1.5">.00</span>
            </div>
          </div>
          <div className="bg-[#00C2FF]/10 text-[#00C2FF] p-2 rounded-xl border border-[#00C2FF]/20 shadow-[0_0_15px_rgba(0,194,255,0.1)]">
            <BarChart3 size={18} />
          </div>
        </motion.div>

        {/* Chart Area */}
        <motion.div variants={itemVars} className="flex-1 flex items-end gap-2 mb-4 relative z-10 px-1 border-b border-black/5 dark:border-white/5 pb-2">
          {/* Dashed Lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 z-0 h-[80%]">
            {[1, 2, 3].map(line => <div key={line} className="border-t border-black dark:border-white border-dashed w-full" />)}
          </div>

          {[35, 60, 45, 80, 55, 95].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 1, delay: 0.3 + (i * 0.1), type: "spring", bounce: 0.3 }}
              className="flex-1 rounded-t-md relative group cursor-pointer min-w-0"
            >
              <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-[#00C2FF]/10 to-[#00C2FF] rounded-t-md opacity-80 group-hover:opacity-100 transition-opacity" />
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: -20 }}
                transition={{ delay: 1.2 + (i * 0.1) }}
                className="absolute -top-1 left-1/2 -translate-x-1/2 bg-white dark:bg-[#202c33] border border-black/10 dark:border-white/10 px-1.5 py-0.5 rounded text-[8px] font-bold text-slate-900 dark:text-white shadow-xl pointer-events-none whitespace-nowrap"
              >
                {h}k
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 shrink-0 z-10">
          {[
            { label: "ROI", val: "14.2x", color: "text-[#00C2FF]", bg: "bg-[#00C2FF]", sub: "+2.4%" },
            { label: "Open Rate", val: "98.5%", color: "text-lightMainGreen dark:text-[#00E676]", bg: "bg-lightMainGreen dark:bg-[#00E676]", sub: "+12%" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVars}
              whileHover={{ y: -2 }}
              className="bg-slate-50 dark:bg-white/5 backdrop-blur-md p-3 rounded-2xl border border-black/5 dark:border-white/5 text-center relative overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-12 h-12 ${stat.bg} blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity`} />
              <div className="text-[9px] text-gray-400 dark:text-gray-400 mb-1 font-medium uppercase tracking-wider">{t(stat.label)}</div>
              <div className={`text-lg font-black ${stat.color} mb-1 leading-none`}>{t(stat.val)}</div>
              <div className="text-[8px] text-gray-500 bg-white dark:bg-white/5 inline-block px-1.5 py-0.5 rounded-full shadow-sm">{t(stat.sub)}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }

  return null;
};

/* ---------------- HEADER SECTION ---------------- */

const HeaderSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] flex flex-col items-center justify-center bg-slate-50 dark:bg-[#050505] overflow-hidden border-b border-black/5 dark:border-white/5 selection:bg-lightMainGreen dark:selection:bg-[#D9FF00] selection:text-white dark:selection:text-black transition-colors duration-500"
    >
      {/* --- 1. DYNAMIC BACKGROUND --- */}

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 dark:opacity-100" />

      {/* Interactive Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(34, 197, 94, 0.05),
              transparent 80%
            )
          `,
        }}
      />

      {/* Ambient Colors */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-100 dark:bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-lightMainGreen/10 dark:bg-[#D9FF00]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Noise Grain */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />


      {/* --- 2. MAIN CONTENT --- */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center"
      >

        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-md shadow-sm dark:shadow-[0_0_20px_-10px_rgba(255,255,255,0.5)] hover:border-lightMainGreen dark:hover:border-[#D9FF00]/50 transition-colors cursor-pointer group">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lightMainGreen dark:bg-[#D9FF00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lightMainGreen dark:bg-[#D9FF00]"></span>
            </span>
            <span className="text-xs font-medium text-slate-600 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">v2.0 <span className="text-gray-300 dark:text-gray-500 mx-1">|</span> {t("Now Available")}</span>
            <ArrowRight size={12} className="text-slate-400 dark:text-gray-500 group-hover:text-lightMainGreen dark:group-hover:text-[#D9FF00] group-hover:translate-x-0.5 transition-all" />
          </div>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-slate-900 dark:text-white mb-6 leading-[0.9]"
        >
          {t("Automation ")}<br />
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-gradient-to-r from-emerald-100 via-green-100 to-teal-100 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 opacity-50 dark:opacity-20 blur-2xl rounded-full" />
            <span className="relative text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-white/40">
              {t("Reimagined.")}
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t("The platform that fuses")} <span className="text-slate-900 dark:text-white font-medium">{t("WhatsApp, Instagram, and Email")}</span>{(" into one lethal operating system designed for revenue.")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-lightMainGreen dark:bg-[#D9FF00] hover:bg-emerald-600 dark:hover:bg-[#b8d900] text-white dark:text-black font-bold rounded-full flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(34,197,94,0.5)] dark:shadow-[0_0_40px_-10px_rgba(217,255,0,0.5)]">
            <Sparkles size={18} className="fill-white dark:fill-black" />
            {t("Start Free Trial")}
          </button>

          <button className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 font-medium rounded-full flex items-center justify-center gap-2 transition-all backdrop-blur-sm shadow-sm dark:shadow-none">
            <PlayCircle size={18} />
            {t("Watch Demo")}
          </button>
        </motion.div>

      </motion.div>

      {/* --- 3. SCROLL INDICATOR --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 dark:text-gray-600 font-bold">{t("Scroll")}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-slate-300 dark:border-white/20 flex justify-center pt-1"
        >
          <motion.div
            animate={{ height: [4, 12, 4], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-0.5 bg-lightMainGreen dark:bg-[#D9FF00] rounded-full"
          />
        </motion.div>
      </motion.div>

    </section>
  );
};

/* ---------------- MAIN COMPONENT ---------------- */

// --- Assuming features array and PhoneScreen are imported/defined above ---

const AUTO_PLAY_INTERVAL = 5500; // 4 seconds

export default function PinnedFeatureSection() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // 1. Viewport Trigger: Only play when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 } // Starts when 30% of the section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // 2. Faster Auto-Change Logic
  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % features.length);
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isInView, active]); // Reset timer on change to prevent "double jumps"

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen lg:ps-36 flex items-center bg-slate-50 dark:bg-black py-20 overflow-hidden"
    >
      {/* Dynamic Background Glow */}
      <motion.div
        animate={{ backgroundColor: features[active].color }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[200px] opacity-20 pointer-events-none transition-colors duration-700"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* TEXT CONTENT (5 columns) */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div 
                  className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border"
                  style={{ color: features[active].color, borderColor: `${features[active].color}40` }}
                >
                  {t(features[active].subtitle)}
                </div>

                <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight dark:text-white">
                  {t(features[active].title)}
                </h2>

                <p className="text-lg text-slate-500 dark:text-gray-400 mb-8 max-w-md">
                  {t(features[active].description)}
                </p>

                <button 
                  className="px-8 py-4 rounded-full font-bold text-white flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-lg"
                  style={{ backgroundColor: features[active].color }}
                >
                  {t("Get Started")} <ArrowRight size={18} />
                </button>
              </motion.div>
            </AnimatePresence>

            {/* Visual Indicators (Clickable) */}
            <div className="mt-12 flex items-center gap-4">
              {features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="relative h-1.5 flex-1 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden"
                >
                  {i === active && (
                    <motion.div
                      layoutId="progress"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: AUTO_PLAY_INTERVAL / 1000, ease: "linear" }}
                      className="h-full w-full"
                      style={{ backgroundColor: features[active].color }}
                    />
                  )}
                  {i < active && (
                    <div className="h-full w-full opacity-50" style={{ backgroundColor: features[i].color }} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* PHONE DISPLAY (7 columns) */}
          <div className="lg:col-span-7 flex justify-center perspective-1000">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                transition={{ type: "spring", damping: 25, stiffness: 120 }}
                className="relative w-[300px] h-[600px] md:w-[340px] md:h-[680px]"
              >
                {/* Device Frame */}
                <div className="absolute inset-0 rounded-[3rem] border-[8px] border-slate-900 dark:border-[#1a1a1a] bg-black shadow-2xl overflow-hidden shadow-current"
                     style={{ color: `${features[active].color}20` }}>
                  <PhoneScreen type={features[active].screen} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}