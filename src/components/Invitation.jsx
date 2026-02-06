import { motion } from "framer-motion";

const Invitation = () => {
  return (
    <section className="py-28 bg-[#f2f0ea] px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="max-w-md mx-auto"
      >
        {/* 顶部小装饰 */}
        <div className="flex justify-center items-center gap-4 mb-10 opacity-30">
          <div className="h-[0.5px] w-12 bg-slate-800"></div>
          <span className="text-[10px] tracking-[0.5em] font-serif-en uppercase">Invitation</span>
          <div className="h-[0.5px] w-12 bg-slate-800"></div>
        </div>

        {/* 核心邀约词 */}
        <div className="space-y-8 mb-16">
          <h2 className="font-chinese text-2xl font-extralight tracking-[0.3em] leading-relaxed text-slate-800">
            诚挚邀请您<br />
            参加我们的婚礼仪式
          </h2>
          
          <p className="font-chinese text-sm font-extralight leading-loose text-slate-500 tracking-widest">
            因为有你们的见证与祝福<br />
            这个特殊的日子将变得更加圆满<br />
            在这个充满爱与温暖的时刻<br />
            期待与您分享我们的喜悦
          </p>
        </div>

        {/* 姓名对齐处理 (3 vs 2) */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-baseline justify-center gap-6 text-slate-700">
            {/* 3个字的名字 */}
            <div className="flex flex-col items-center">
              <span className="font-serif-en text-[10px] tracking-[0.3em] text-slate-400 mb-2 uppercase italic">Groom</span>
              <span className="font-chinese text-2xl font-extralight tracking-[0.1em]">王宵烽</span>
            </div>

            <span className="font-serif-en text-lg italic opacity-30 font-light">&</span>

            {/* 2个字的名字，通过字间距平衡视觉 */}
            <div className="flex flex-col items-center">
              <span className="font-serif-en text-[10px] tracking-[0.3em] text-slate-400 mb-2 uppercase italic">Bride</span>
              <span className="font-chinese text-2xl font-extralight tracking-[0.6em] mr-[-0.6em]">时瑞</span>
            </div>
          </div>

          <div className="mt-10">
            <p className="font-chinese text-xs font-extralight text-slate-400 tracking-[0.4em]">
              同父母一道 · 敬邀
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Invitation;