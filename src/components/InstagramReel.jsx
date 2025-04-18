const InstagramReel = () => {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/reel/DITrONUTj-Z/"
        data-instgrm-version="14"
        style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}
      ></blockquote>
    </div>
  );
};
