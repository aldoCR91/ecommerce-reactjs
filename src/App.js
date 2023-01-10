import Header from './components/header/Header';
import Banner from './components/banner/Banner';

function App() {
  return (
    <>
      <Header />

      <main className='max-w-screen-2xl mx-auto'>
      {/* Banner */}
      <Banner />
      {/* Product Feed */}
      </main>
    </>
  );
}

export default App;
