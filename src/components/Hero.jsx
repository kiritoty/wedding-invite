import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import herobg from '../assets/hero.png'

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#f8f7f3]">
      {/* 背景图片：建议使用一张色调柔和的新人合照 */}
      <div className="absolute inset-0 z-0">
        <img
        //   src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069" 
            src={herobg}
          alt="Wedding Background"
          className="h-full w-full object-cover opacity-80 object-[47%_80%]"
        />
        {/* 蒙层：让文字更清晰，韩系风常用淡淡的米白色或灰色蒙层 */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* 内容层 */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        //   transition={{ duration: 1.5, ease: "easeOut" }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }} // 使用自定义贝塞尔曲线，更丝滑
          className="text-center"
        >
          <span className="text-ml tracking-[0.3em] uppercase mb-4 block font-light">
            Our Wedding Day
          </span>
          

          <div className="flex flex-col items-center justify-center gap-8 mb-12">
            <div className="flex items-center justify-center gap-6 text-white">
                
                {/* 三个字的名字：保持正常较小的字间距 */}
                <span className="font-chinese text-3xl md:text-4xl font-extralight tracking-[0.1em]">
                王宵烽
                </span>

                {/* 中间的 & 符号：利用 opacity 弱化，起到视觉分割作用 */}
                <span className="font-serif-en text-xl italic opacity-70 mt-1 text-white">&</span>

                {/* 两个字的名字：通过增加 tracking (字间距) 来拉长它的视觉长度，对齐三个字 */}
                <span className="font-chinese text-3xl md:text-4xl font-extralight tracking-[0.6em] mr-[-0.6em]">
                时瑞
                </span>
                
            </div>

            {/* 辅助对齐线：在名字下方加一根极细的线，能从视觉上“锁死”中轴线 */}
            <div className="h-[0.5px] w-24 bg-slate-300"></div>
            </div>

          
          <p className="text-xl tracking-[0.2em] font-extralight italic">
            2026 . 04 . 25
          </p>
        </motion.div>

        {/* 底部向下滑动提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center"
        >
          <span className="text-xs tracking-widest mb-2 uppercase opacity-80">开启序幕</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={20} strokeWidth={1} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

