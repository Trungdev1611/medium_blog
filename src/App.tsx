import "./App.css";
import { BsPencilSquare, BsBell } from "react-icons/bs";
function App() {
  return (
    <>
      <header>
        <div className="flex justify-between px-8 py-2 shadow-sm border-b border-slate-200">
          <div className="flex gap-6 place-items-center">
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968885.png"
                alt="logo"
                width={50}
                height={"auto"}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Search medium"
                className="rounded-md outline-none border-gray-300 border p-1 min-w-[250px]"
              />
            </div>
          </div>
          <div className="flex gap-6 place-items-center">
            <span className="text-[20px] text-gray-600">
              <BsPencilSquare />
            </span>
            <span className="text-[20px] text-gray-600">
              <BsBell />
            </span>
            <img
              src="https://img.freepik.com/free-photo/close-up-happy-brunette-girl-white-t-shirt-laughing-smiling-carefree-camera_1258-19129.jpg"
              alt=""
              className="object-cover rounded-[50%] w-[40px] h-[40px]"
            />
          </div>
        </div>
      </header>
      <main className="max-w-[1200px] mx-auto flex">
        {/* cột trái */}
        <div className="flex flex-col p-4 border-b border-r border-gray-200 gap-8">
          {/* item cột trái */}
          <div className="flex gap-3 border-b  border-salte-200 pb-2">
            <div className=" flex flex-col gap-3">
              <div className="flex gap-3 author  items-center">
                <img
                  src="https://www.shutterstock.com/image-photo/headshot-portrait-happy-ginger-girl-260nw-623804987.jpg"
                  alt=""
                  className="h-[30px] w-[30px] rounded-[50%]"
                />
                <div>FardaKarimov in Level Up Coding ·May 11</div>
              </div>
              <h2 className="text-lg font-semibold">The filter method creates a shallow copy of a p</h2>
              <div className="text-slate-500 line-clamp-2">If you’ve never heard of PostCSS or are wondering how it’s different from tools like Sass, read our guide on using PostCSS as your preprocessor for an introduction.
              If you’ve never heard of PostCSS or are wondering how it’s different from tools like Sass, read our guide on using PostCSS as your preprocessor for an introduction.
              </div>
            </div>
            <div>
            <img
                  src="https://www.shutterstock.com/image-photo/headshot-portrait-happy-ginger-girl-260nw-623804987.jpg"
                  alt=""
                />   
            </div>
          </div>

          <div className="flex gap-3 border-b border-salte-200 pb-2">
            <div className=" flex flex-col gap-3">
              <div className="flex gap-3 author  items-center">
                <img
                  src="https://www.shutterstock.com/image-photo/headshot-portrait-happy-ginger-girl-260nw-623804987.jpg"
                  alt=""
                  className="h-[30px] w-[30px] rounded-[50%]"
                />
                <div>FardaKarimov in Level Up Coding ·May 11</div>
              </div>
              <h2 className="text-lg font-semibold">The filter method creates a shallow copy of a p</h2>
              <div className="text-slate-500 line-clamp-2">If you’ve never heard of PostCSS or are wondering how it’s different from tools like Sass, read our guide on using PostCSS as your preprocessor for an introduction.
              If you’ve never heard of PostCSS or are wondering how it’s different from tools like Sass, read our guide on using PostCSS as your preprocessor for an introduction.
              </div>
            </div>
            <div>
            <img
                  src="https://www.shutterstock.com/image-photo/headshot-portrait-happy-ginger-girl-260nw-623804987.jpg"
                  alt=""
                />   
            </div>
          </div>
          
          <div className="flex gap-3  border-salte-200 pb-2">
            <div className=" flex flex-col gap-3">
              <div className="flex gap-3 author  items-center">
                <img
                  src="https://www.shutterstock.com/image-photo/headshot-portrait-happy-ginger-girl-260nw-623804987.jpg"
                  alt=""
                  className="h-[30px] w-[30px] rounded-[50%]"
                />
                <div>FardaKarimov in Level Up Coding ·May 11</div>
              </div>
              <h2 className="text-lg font-semibold">The filter method creates a shallow copy of a p</h2>
              <div className="text-slate-500 line-clamp-2">If you’ve never heard of PostCSS or are wondering how it’s different from tools like Sass, read our guide on using PostCSS as your preprocessor for an introduction.
              If you’ve never heard of PostCSS or are wondering how it’s different from tools like Sass, read our guide on using PostCSS as your preprocessor for an introduction.
              </div>
            </div>
            <div>
            <img
                  src="https://www.shutterstock.com/image-photo/headshot-portrait-happy-ginger-girl-260nw-623804987.jpg"
                  alt=""
                />   
            </div>
          </div>
        </div>

        {/* cột phải */}
        <div>phải</div>
      </main>
    </>
  );
}

export default App;
