import React from 'react';

import { ShowChildrenButtons } from '@/components/nav/ShowChildrenButtons';

type MobileNavCategoryProps = {
  category: string;
  subCategories: Record<string, Record<string, null> | null> | null;
  calls: number;
};
/*
  MobileNavCategory calls recursively like a family tree data structure would need to be rendered
  every child category may be a parent of more categories 
  eg.
  SHOP                - Parent = MobileNavCategory
    Handmade Pottery  - Parent and child = MobileNavCategory
      Creamer           child = MobileNavCategory
*/
function MobileNavCategory({
  category,
  subCategories,
  calls, // number of function calls this recursive function component makes
}: MobileNavCategoryProps) {
  const [showChildren, setShowChildren] = React.useState(false);
  return (
    <li>
      <div className='flex justify-between py-1.5'>
        {/* link is uppercase if top level in container; if child link, it is lowercase */}
        <a
          className={`${
            calls === 0 ? 'uppercase ' : ''
          }font-jost text-sm font-medium`}
          href={`/${category}`}
        >
          {category}
        </a>
        {subCategories ? (
          // + and - buttons to show descendents
          <ShowChildrenButtons
            showChildren={showChildren}
            setShowChildren={setShowChildren}
          ></ShowChildrenButtons>
        ) : null}
      </div>
      {/* show mobile nav sub categories here if any*/}
      {subCategories && showChildren ? (
        <div className='mx-2.5'>
          {Object.entries(subCategories).map(([k, v]) => {
            return (
              <MobileNavCategory
                key={k}
                category={k}
                subCategories={v}
                calls={++calls}
              />
            );
          })}
        </div>
      ) : null}
    </li>
  );
}

export { MobileNavCategory };
