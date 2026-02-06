import { motion } from "framer-motion";

const MiniCalendar = () => {
  // 设置婚礼的具体日期
  const weddingYear = 2026;
  const weddingMonth = 4;
  const weddingDay = 25;

  // 获取该月第一天是周几 (0是周日)
  const firstDayOfMonth = new Date(weddingYear, weddingMonth - 1, 1).getDay();
  // 获取该月总天数
  const daysInMonth = new Date(weddingYear, weddingMonth, 0).getDate();

  // 生成日历数组（包含前面的空白格）
  const days = Array.from({ length: firstDayOfMonth }, () => null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div className="w-full max-w-[280px] mx-auto mt-8 p-4 bg-white/50 rounded-2xl">
      {/* 月份标题 */}
      <div className="font-serif-en text-lg tracking-[0.3em] mb-6 text-slate-700 font-extralight italic">
        四月 2026
      </div>

      {/* 星期表头 */}
      <div className="grid grid-cols-7 mb-4">
        {weekdays.map((d, i) => (
          <span key={i} className="text-[10px] text-slate-400 font-light">
            {d}
          </span>
        ))}
      </div>

      {/* 日期网格 */}
      <div className="grid grid-cols-7 gap-y-3">
        {days.map((day, index) => (
          <div key={index} className="relative flex items-center justify-center h-8">
            {day && (
              <>
                {/* 核心：如果是婚礼当天，画一个圈 */}
                {day === weddingDay && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                    className="absolute w-8 h-8 border border-wedding-gold/60 rounded-full bg-wedding-gold/5"
                  />
                )}
                <span className={`text-sm font-serif-en ${
                  day === weddingDay ? "text-slate-900 font-medium" : "text-slate-500 font-light"
                }`}>
                  {day}
                </span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniCalendar;