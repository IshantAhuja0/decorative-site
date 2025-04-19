// WhatsAppButton.jsx
const FloatingWhatsapp = (props) => {
  return (
    <a
      href={`https://wa.me/91${props.whatsapp}`} // Replace with your number
      target="_blank"
      rel="noopener noreferrer"
className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center animate-bounce hover:scale-110 transition-transform duration-300"
      title="Chat with us on WhatsApp"
    >
      <img
        src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png"
        alt="WhatsApp"
        className="w-7 h-7"
      />
    </a>
  );
};

export default FloatingWhatsapp;
