import React, { useEffect } from "react";
import { motion } from "framer-motion";
function navInstaReel(e){
  console.log(e);
//   video=e.
// window.location.href=""
}
const reels = [
  {
    title: "Wedding Decor Highlights",
    videoUrl: "https://media-hosting.imagekit.io/371166b1754c4968/reel2.mp4?Expires=1839692014&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=by0CGYDbCrW0WMakezsZFw63qHqlB8s2Sbz5LTEC-~Qq4MGr1jpTTVrE5w6HZh7BWBCEOxjuUcIArqW877HqVOkdiel1onlDjaCqibrIGC~Hps0Sh-3SgP1Db3aoqJHBdl7r576jyS1LNPMggXK8B~HQDZPaUaoBcyw-xhBJCT~RY-U~LZBzCRjmVuYXqrwj3liluO1V78ncvmBIbFCe0xUDngJIOZJQKIqgQOhTrfl65TTPGjzo~78lIUfIFOlg3NzPOdw8glOGgBXBmVGdTlI3g2lMZ8ql47Zry~asSaYlCxa1Kbl7SrgU7Sl-Th8QX9aW487Ean52HLUuQqeniQ__",
    instaUrl:"https://www.instagram.com/reel/DGdYG43N0FO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "Birthday Bash Vibes",
    videoUrl: "https://media-hosting.imagekit.io/e1523530807d4724/reel1.mp4?Expires=1839691643&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=o~YfNA3ThQv8KXAzP7d-xgvnNK9YkY1ddxAHufQ~dEJE3JVR8eQ07shINf9Xs0YbgKdYJ6HHA2AZGXd5LXjcNYvHbK1xE9aSANh94pOSq9XaJSne1tYe2jP8AqVklR5ZO33d25zjokQi3r1GxiKM33tFm2H1FZXi7FPNRDUS3PO3BIoxIoIWz9PYbK4dowA201gUGtmCN4g34bERrcppYZWX9ObLahYxWM9AEz7VKiz8VKfAnETdanpXcLw8UnNjdJAa0t-ABVdpgxhVpS32yw6SnwKG5hv3ZAkQ7GcT~rwyKODn7p9EoRlBLeAJu60cBUEPOPOJ9mjaHFiIT6HiqA__",
    instaUrl:"https://www.instagram.com/reel/DIZT_4lzlmN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "Corporate Gala Snapshots",
    videoUrl: "https://media-hosting.imagekit.io/77f16091bfac4ac4/reel3.mp4?Expires=1839692215&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Mr1QnZuj5jnYADyEZIu3y1paOXv34sBlQ08l9Vb1SQPLJlVcm0M5xQlIV0SWFj6oybycQLS6kg4vC3JYEXvQh4woruV1xCwY1a7cLrtKh2E52PPEAlW2iPWbgE6P0WHmX7UETLsXl-zmHg8Ttaf0OT5D42bxfR8QJUNiKC5Y0rp8sZXnetAbESKDqi-fX4XsvSv6cBJlOetjbQ46Buywf3ocSaZ1AA0cpuxvoUQH26uCJU4K1yg2JigGtRTqfOlnG1VqOw1wbId8tC~18TkuUlD2yyTiN-33VQQdfxL7Z6yzDuxLsBb5N571QYIIPOgG11LHhG9G6khPjbhLMg76rg__",
    instUrl:"https://www.instagram.com/reel/DGTJmIuTzdK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "Wedding Glimpse",
    videoUrl: "https://media-hosting.imagekit.io/2524923913d24833/reel4.mp4?Expires=1839692228&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kjIL~zw6tM3pyvJU9mhdi~i3tO4QPa3HzoDTnOtMrvCaa3z4v7k0ZpSFb4lbSpE-~OdkoOeAoycIKBwJ8s7fxyx31V8n8OYWqRQNoYq4Jtj1j2rJumhpVQ23QzFPmimMX9D7qkH9T2O0rwWlyGZsz7kXgKiVu4J7wX-jFkBkGRoPZnQafG9WHCG6i~AQV-AUE6cR1XaVc5z9y79h3tgmpn1u~J~CQdwtMN3fwuMRAn9rtlrE9Hbu57RpIzLNimr36~CJ6gvYuZPCg-M6M66T~eTK4esA540AAWX0kpQyYG-1dozFp5kungSICpnQh6OxGHYOjTLgp3paiIxEgfFqDA__",
    instaUrl:"https://www.instagram.com/reel/DIZT_4lzlmN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "Stage Entry Vibe",
    videoUrl: "https://media-hosting.imagekit.io/f015139e9fce40ec/reel5.mp4?Expires=1839692235&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=HWGBovXOScgzYkQRXkPVa-yATtt91JX1V513atE1TTFUEKWDff6vGFAk--t3ZIZbwz2KVW~OS1opXCg6KnS5-WyXEjcIltO8Ue~sd8Wopyz1Rek4XpCXqcZqY~N14wYghzRCTR9iXLcy-e2vpTYIHp63NXdS3mJz3eR~kqMP3Kt54utCtZksMyXwqEvNbmPGYLevFvA8s7XX39QM8iA4zaPKVLdlUrqrnRe7ox5sn2ars8IV3MFYX~uOWwKCXvQESHnJb7-nxLF~rWiE1kx278fJ-H8yyp5KumHBB0TgS8iAT3ezfS6yKkv44q8rS273g0T5wJoc4HOQIw3G-hMW6Q__",
    instaUrl:"https://www.instagram.com/reel/DGBQAKUzuTr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "Decor Timelapse",
    videoUrl: "https://media-hosting.imagekit.io/a43c4ecea6a148f1/reel6.mp4?Expires=1839692244&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=tZJv2pNLDqy1C3JcTe8WggvxdDKOd7LtqBA-Vk8pUwsb9mi4VC9KJMRhUrEWcLYEZL0TkVxd51pRj44t3Pw4NOmiys4fRCRaR8hEEJ6syL9C46gcsMqIslSC5tZPSWLaCbFubWLj6rNJvt-KOf430vSsj6zRa-4zDfnE5TD~50Ia9wP4YEKhdZjmqkPyPkcK2gc9vPbBODuWgc3cRZj2cwfxZwJJ7VMeGH3tnDAz71Dk0B~F3QTEZL2be-Jlcm-K11zXvEB-rrIGjMXXy2qhviMuTBNCSlMVKd3eNlqNp1PNzqO2EzYiuPig~C7U7ngu5-5t6qI24CboBOEn-GC1IA__",
    instaUrl:"https://www.instagram.com/reel/DGFaZ1Hx3Xj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
];


const InstagramReel = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.instgrm) window.instgrm.Embeds.process();
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="px-4 py-16 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-14">🔥 Trending Reels</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {reels.map((reel, index) => (
          <ReelCard key={index} videoUrl={reel.videoUrl} title={reel.title} index={index} />
        ))}
      </div>
    </div>
  );
};

const ReelCard = ({ videoUrl, title, index }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center justify-start"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* <div
        className="w-full max-w-xs mx-auto"
        dangerouslySetInnerHTML={{
          __html: `
            <blockquote 
              class="instagram-media"
              data-instgrm-permalink="${videoUrl}" 
              data-instgrm-version="14"
              style="margin: 0 auto; width: 100%; border-radius: 12px;">
            </blockquote>`,
        }}
      /> */}
      <video
  controls
  autoPlay
  onClick={()=>navInstaReel(index)}
  muted
  playsInline
  className="w-full rounded-xl shadow-lg"
>
  <source
    src={videoUrl}
    type="video/mp4"
  />
  Your browser does not support the video tag.
</video>
      <h3 className="text-lg font-semibold mt-4 text-center">{title}</h3>
    </motion.div>
  );
};

export default InstagramReel;
