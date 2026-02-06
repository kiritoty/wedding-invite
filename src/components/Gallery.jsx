import { motion } from "framer-motion";
import Happy from '../assets/happy.jpg'
import Happy1 from '../assets/happy1.jpg'
import Happy2 from '../assets/happy2.jpg'
import Happy3 from '../assets/happy3.jpg'
import Happy4 from '../assets/happy4.jpg'

const galleryImages = [
  { id: 1, src: Happy2, size: 'large' },  // 占满一行或较高
  { id: 2, src: Happy1, size: 'small' },  // 较矮
  { id: 3, src: Happy, size: 'medium' }, // 中等
  { id: 4, src: Happy3, size: 'small' },
  { id: 5, src: Happy4, size: 'medium' },
];

const Gallery = () => {
  return (
    <section className="py-24 bg-[#f2f0ea]">
      {/* 标题部分 */}
      <div className="text-center mb-16 px-6">
        <p className="font-serif-en text-[10px] tracking-[0.5em] text-slate-400 uppercase mb-3">
          Gallery
        </p>
        <h2 className="font-chinese text-2xl font-extralight tracking-[0.4em] text-slate-800 italic">
          捕捉美好瞬间
        </h2>
      </div>

      {/* 瀑布流网格 */}
      <div className="px-4 grid grid-cols-2 gap-3 auto-rows-[100px]">
        {galleryImages.map((img, index) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className={`relative overflow-hidden bg-slate-100 ${
              // 根据配置调整照片跨越的行数，形成错落感
              index % 3 === 0 ? "row-span-3" : "row-span-2"
            }`}
          >
            <img
              src={img.src}
              alt="Wedding"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 saturate-[0.9]"
            />
          </motion.div>
        ))}
      </div>

      {/* 底部点缀文字 */}
      <div className="mt-16 text-center">
        <p className="font-chinese text-[10px] tracking-[0.3em] text-slate-300 font-extralight">
          Every moment with you is a gift.
        </p>
      </div>
    </section>
  );
};

export default Gallery;