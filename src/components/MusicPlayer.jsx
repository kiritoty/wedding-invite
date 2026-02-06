import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Music2 } from "lucide-react"; // 使用细线条图标

const MusicPlayer = ({ url }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // 处理自动播放的兼容性逻辑
 useEffect(() => {
  const audio = audioRef.current;

  // 播放函数
  const playAudio = () => {
    audio.play()
      .then(() => setIsPlaying(true))
      .catch((err) => console.log("播放仍被拦截:", err));
  };

  // 1. 针对微信：利用微信桥接
  const handleWechat = () => {
    if (window.WeixinJSBridge) {
      window.WeixinJSBridge.invoke("getNetworkType", {}, playAudio);
    }
  };
  document.addEventListener("WeixinJSBridgeReady", handleWechat);

  // 2. 针对普通浏览器：用户只要有任何交互动作就播放
  // 婚礼请帖用户肯定会“往下滑动”，这就是最好的触发点
  const handleInteraction = () => {
    playAudio();
    // 成功播放后移除监听，避免重复执行
    window.removeEventListener("touchstart", handleInteraction);
    window.removeEventListener("click", handleInteraction);
    window.removeEventListener("scroll", handleInteraction);
  };

  window.addEventListener("touchstart", handleInteraction);
  window.addEventListener("click", handleInteraction);
  window.addEventListener("scroll", handleInteraction); // 加上滑动监听

  return () => {
    document.removeEventListener("WeixinJSBridgeReady", handleWechat);
    window.removeEventListener("touchstart", handleInteraction);
    window.removeEventListener("click", handleInteraction);
    window.removeEventListener("scroll", handleInteraction);
  };
}, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-6 right-6 z-[100]">
      <audio ref={audioRef} src={url} loop />
      
      <motion.button
        onClick={togglePlay}
        className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-sm"
        whileTap={{ scale: 0.9 }}
      >
        {/* 旋转动画：当播放时图标持续旋转 */}
        <motion.div
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="text-slate-500"
        >
          <Music size={18} strokeWidth={1.5} />
        </motion.div>

        {/* 动态音谱线（可选，增加仪式感） */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute -bottom-1 flex gap-[2px]"
            >
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{ height: [4, 10, 4] }}
                  transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.2 }}
                  className="w-[1.5px] bg-wedding-gold/60"
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default MusicPlayer;