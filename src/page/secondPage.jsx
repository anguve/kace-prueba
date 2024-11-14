import NavbarComponent from '../components/navbar';

export default function FirstPage() {
  return (
    <div className="bg-red-500 text-white p-4">
      <NavbarComponent />
      <h1 className="text-3xl font-bold">SecondPage</h1>
    </div>
  );
}
