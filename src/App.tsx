import "./App.css";

function App() {

  return (
    <>
      <header>
        <div className="flex justify-between px-8 py-2 shadow-sm border-b border-slate-200">
            <div className="flex gap-4 place-items-center">
              <div>
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968885.png" alt="logo" width={50} height={"auto"}/>
              </div>
              <div>
                <input type="text" placeholder="Search medium"/>
              </div>
            </div>
            <div className="flex gap-4 place-items-center">
                <span>Write</span>
                <span>Notification</span>
                <span>Avartar</span>
            </div>
        </div>
      </header>
    </>
  );
}

export default App;
