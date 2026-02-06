import { motion } from "framer-motion";
import Wedding from '../assets/wedding.jpeg' 
import Engage from '../assets/engage.jpg'
import TokyoTower from '../assets/tokyotower.jpg'
import Meetup from '../assets/meetup.jpg'

const storyData = [
  {
    id: 1,
    title: "遇见",
    eng: "The First Meet",
    desc: "那是疫情时的一段偶然，你闯入了我的世界，从此一切都变得不同。",
    image: Meetup, 
    pos: "left"
  },
  {
    id: 2,
    title: "相恋",
    eng: "The Season",
    desc: "平凡的日子里，因为有你，连风都变得温柔。",
    image: TokyoTower,
    pos: "right"
  },
  {
    id: 3,
    title: "携手",
    eng: "The Engagement",
    desc: "此后长路，携手同学",
    image: Engage,
    pos: "left"
  },
  {
    id: 4,
    title: "永恒",
    eng: "The Vow",
    desc: "往后余生，请多指教。",
    image: Wedding,
    pos: "right"
  }
];

const Story = () => {
  return (
    <section className="py-28 bg-[#f2f0ea]">
      {/* 标题 */}
      <div className="flex flex-col items-center mb-24">
        <h2 className="font-chinese text-2xl font-extralight tracking-[0.5em] text-slate-800">
          我们的故事
        </h2>
        <div className="h-[0.5px] w-12 bg-slate-300 mt-4"></div>
      </div>

      <div className="space-y-40 px-8">
        {storyData.map((item) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5 }}
            className={`flex flex-col ${item.pos === 'left' ? 'items-start' : 'items-end'}`}
          >
            {/* 照片容器 */}
            <div className="relative w-[75%] aspect-[3/4] shadow-sm border-[8px] border-white">
              <img 
                src={item.image} 
                className="w-full h-full object-cover saturate-[0.8]" 
                style={{ objectPosition: 'center 20%' }} // 如果人脸靠上，可以微调
              />
              
              {/* 文字浮层：这里使用 absolute 偏移营造非对称感 */}
              <div className={`absolute -bottom-16 ${item.pos === 'left' ? '-right-10 text-right' : '-left-10 text-left'} w-56`}>
                <p className="font-serif-en text-[10px] tracking-[0.4em] text-slate-400 uppercase mb-2">
                  {item.eng}
                </p>
                <h3 className="font-chinese text-xl font-extralight tracking-[0.3em] text-slate-800 mb-3">
                  {item.title}
                </h3>
                <p className="font-chinese text-xs leading-relaxed text-slate-500 font-extralight tracking-wider">
                  {item.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Story;