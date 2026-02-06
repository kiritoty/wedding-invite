import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Calendar } from "lucide-react";
import MiniCalendar from "./MiniCalandar";

const Location = () => {
  const weddingDate = "2026-04-25T18:00:00"; // 设置你的婚礼时间
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // 倒计时逻辑
  useEffect(() => {
    const timer = setInterval(() => {
      const difference = +new Date(weddingDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [weddingDate]);

  // 地图跳转逻辑（高德地图示例）
  const handleMapClick = () => {
    // 这里替换成你酒店的经纬度和名称
    const address = "南京香格里拉酒店";
    const url = `https://uri.amap.com/marker?position=118.78257041934722,32.07825632218033&name=${address}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-24 bg-[#f2f0ea] px-8 text-center text-slate-800">
      {/* 倒计时板块 */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mb-20"
      >
        <p className="font-serif-en text-[10px] tracking-[0.5em] text-slate-400 uppercase mb-8">
          Countdown
        </p>
        <div className="flex justify-center gap-6 font-serif-en">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <span className="text-3xl font-light text-slate-700">{value.toString().padStart(2, '0')}</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 mt-2">{unit}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 时间地点详细信息 */}
      <div className="space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          <Calendar size={20} strokeWidth={1} className="text-slate-400 mb-4" />
          <h3 className="font-chinese text-lg font-extralight tracking-widest mb-2">婚礼时间</h3>
          <p className="font-serif-en text-sm tracking-widest text-slate-500">2026.04.25 18:00 PM</p>
          <p className="font-chinese text-xs text-slate-400 mt-1 font-extralight">农历三月初九</p>
        </motion.div>

        <MiniCalendar />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          <MapPin size={20} strokeWidth={1} className="text-slate-400 mb-4" />
          <h3 className="font-chinese text-lg font-extralight tracking-widest mb-2">婚礼地点</h3>
          <p className="font-chinese text-sm tracking-wider text-slate-500">南京香格里拉 · 三楼</p>
          <p className="font-chinese text-sm tracking-wider text-slate-500">清凉 · 栖霞 宴会厅</p>
          <p className="font-chinese text-xs text-slate-400 mt-1 font-extralight">南京市鼓楼区中央路  329号</p>
          
          <button 
            onClick={handleMapClick}
            className="mt-6 px-6 py-2 border border-slate-200 rounded-full text-xs font-chinese tracking-widest text-slate-500 hover:bg-white transition-colors"
          >
            查看地图导航
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          <Phone size={20} strokeWidth={1} className="text-slate-400 mb-4" />
          <h3 className="font-chinese text-lg font-extralight tracking-widest mb-2">联系新人</h3>
          <div className="flex gap-4">
            <a href="tel:13800138000" className="text-xs font-serif-en tracking-widest text-slate-500 underline underline-offset-4 opacity-70">
              CALL GROOM
            </a>
            <a href="tel:13800138000" className="text-xs font-serif-en tracking-widest text-slate-500 underline underline-offset-4 opacity-70">
              CALL BRIDE
            </a>
          </div>
        </motion.div>
      </div>

      {/* 结尾标语 */}
      <div className="mt-32 opacity-20">
        <p className="font-chinese text-[10px] tracking-[1em] font-light">期待您的光临</p>
      </div>
    </section>
  );
};

export default Location;