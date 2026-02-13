export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 px-4 fixed bottom-0 left-0 right-0">
      <div className="max-w-7xl mx-auto border-gray-800 text-center text-sm">
        <p>
          &copy; {year} Devtoolkit
        </p>
      </div>
    </footer>
  );
}
