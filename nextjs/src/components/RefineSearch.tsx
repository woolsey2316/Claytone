import React from 'react'

function RefineSearch() {
  return ( 
    <div className="mb-30px">
      <div id="filter">
        <h3 className="py-[15px] px-[20px] text-lg text-left uppercase relative font-medium leading-5 rounded-t bg-coral text-white">Refine Search</h3>
        {/* filter box */}
        <div className="py-30px px-[20px] rounded-b bg-nearWhite">
          <div className="mb-[25px]">
            <a className="text-black2 mb-[12px] mt-[-4px] font-medium"></a>
            <div className="border-none relative">
              <div id="filter-group-1">
                <div className="my-[6px] relative">
                  <label className="capitalize text-grey2 min-h-[20px] pl-[20px] cursor-pointer inline-block">
                    <input className="absolute ml-[-20px] mt-1" type="checkbox" name="filter[]" value="3">
                    </input>
                    Black
                  </label>
                </div>
                <div className="my-[6px] relative">
                  <label className="capitalize text-grey2 min-h-[20px] pl-[20px] cursor-pointer inline-block">
                    <input className="absolute ml-[-20px] mt-1" type="checkbox" name="filter[]" value="2">
                    </input>
                    Blue
                  </label>
                </div>
                <div className="my-[6px] relative">
                  <label className="capitalize text-grey2 min-h-[20px] pl-[20px] cursor-pointer inline-block">
                    <input className="absolute ml-[-20px] mt-1" type="checkbox" name="filter[]" value="1">
                    </input>
                    Red
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}

export default RefineSearch;