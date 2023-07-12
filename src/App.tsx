import { Header, Toolbar, Constructor, Resultbar } from '@/components';

export function App() {
  return (
    <>
      <Header />

      <div className="layout">
        <Toolbar />
        <Constructor />
        <Resultbar />
      </div>
    </>
  );
}
