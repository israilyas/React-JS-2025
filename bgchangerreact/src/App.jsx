import { useState } from 'react'

function App() {
  const colorList = ["olive", "red", "white", "blue","orange","yellow","pink","gray"]

  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}
    >
      {/* ======== Buttons ===== */}
      <div className='fixed flex flex-wrap justify-center bottom-[48px] inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white text-black px-3 py-2 rounded-lg'>
          {
            colorList.map((btncolor, index) => {
              return (
                <button key={index} onClick={()=>setColor(btncolor)} className='outline-none px-4 rounded-full py-1 shadow-2xl border-2 border-black'
                  style={{ backgroundColor: btncolor }}
                >{btncolor}</button>

              )})

          }


        </div>
      </div>

    </div>
  )
}

export default App
