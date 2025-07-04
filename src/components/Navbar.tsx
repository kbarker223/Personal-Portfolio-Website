export default function Navbar() {
  return (
    <nav className="flex justify-center gap-6 py-4 border-b text-lg font-medium sticky top-0 bg-white z-10">
      <a href="#home">Home</a>
      <a href="#projects">Projects</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}
