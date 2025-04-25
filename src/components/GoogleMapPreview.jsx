const GoogleMapPreview = () => {
  return (
    <>
    <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-lg border">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7498.583540648979!2d75.02900714118576!3d29.534591759564375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1745499499170!5m2!1sen!2sin" width="600" height="450" className="border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
      </>
  );
};

export default GoogleMapPreview;
