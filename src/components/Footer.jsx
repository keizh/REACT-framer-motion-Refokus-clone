function Footer() {
  const footer_options = [
    "Privacy Policy",
    "Cookie Policy",
    "Impressum",
    "Terms",
  ];
  return (
    <div className="w-full">
      <footer className="max-w-screen-xl mx-auto flex gap-[1.5rem] pt-[1rem]  pb-[3rem] text-base text-zinc-500">
        {footer_options.map((option, index) => (
          <span key={index}>{option}</span>
        ))}
      </footer>
    </div>
  );
}

export default Footer;
