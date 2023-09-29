import AnimatedWhiteIconbutton from '@/components/button/AnimatedWhiteIconButton'
import React, { useState } from 'react'
import { Tooltip } from 'react-tooltip'
import { GridIcon } from '@/components/svg/GridIcon';
import { ListIcon } from '@/components/svg/ListIcon';
type View = 'list' | 'grid';
type Props = {
  view: View
  setView: React.Dispatch<React.SetStateAction<View>>
}
export function DisplayOptions({ view, setView }: Props) {
  const tooltipStyles = { backgroundColor: "rgb(0, 0, 0)", color: "#fff", padding: '3px 8px' }
  const [selected, setSelected] = useState<string>('Default')
  return (
    <div className="py-2.5 px-5 mb-[30px] bg-nearWhite rounded-[5px] grid grid-cols-12">
      <div className="px-15px col-span-5 sm:col-span-3">
        <div className="relative inline-block align-middle">
          <AnimatedWhiteIconbutton
            onClick={() => setView('grid')}
            active={view === 'grid'}
            data-tooltip-id="view-type"
            data-tooltip-content="Grid View">
              <GridIcon active={view === 'grid'}/>
          </AnimatedWhiteIconbutton>
          <AnimatedWhiteIconbutton
            onClick={() => setView('list')}
            active={view === 'list'}
            data-tooltip-id="view-type"
            data-tooltip-content="List View">
              <ListIcon active={view === 'list'}/>
          </AnimatedWhiteIconbutton>
          <Tooltip id="view-type" className="opacity-100" style={tooltipStyles} />
        </div>
      </div>
      <div className="px-15px col-span-12 sm:col-span-9 text-right">
        <div className="inline-block align-top py-[2px]">
          <div className="px-[5px] inline-block">
            <label className="text-sm my-[8px] inline-block">Sort By:</label>
          </div>
          <div className="relative inline-block box-border">
            <select id="input-sort" className="py-1 pr-[25px] pl-2.5 rounded-[5px] border-grey3 text-grey2 text-sm leading-[20px] h-9">
              <option>Default</option>
              <option>Name (A - Z)</option>
              <option>Name (Z - A)</option>
              <option>Price (Low &gt; High)</option>
              <option>Price (High &gt; Low)</option>
              <option>Rating (Highest)</option>
              <option>Rating (Lowest)</option>
              <option>Model (A - Z)</option>
              <option>Model (Z - A)</option>
            </select>
          </div>
        </div>
        <div className="py-[2px] pl-5 inline-block align-top">
          <div className="float-left inline-block align-top">
            <div className="text-right">
              <label className="my-[8px] px-[5px] text-sm inline-block">Show:</label>
            </div>
          </div>
          <div className="float-left">
            <select id="input-limit" className="py-1 pr-[25px] pl-2.5 rounded-[5px] border-grey3 text-grey2 text-sm leading-[20px] h-9">
              <option>9</option>
              <option>25</option>
              <option>50</option>
              <option>75</option>
              <option>100</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}