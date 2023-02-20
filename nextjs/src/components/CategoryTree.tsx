import React from 'react';

import { ShowChildrenButtons } from '@/components/nav/ShowChildrenButtons';

type CategoryTreeProps = {
  category: string;
  subCategories: Record<string, Record<string, null> | null> | null;
  calls: number;
};
/*
  CategoryTree calls recursively like a family tree data structure would need to be rendered.
  every child category may be a parent of more categories 
  eg.
  SHOP                - Parent = CategoryTree
    Handmade Pottery  - Parent and child = CategoryTree
      Creamer           child = CategoryTree
*/
function CategoryTree({
  category,
  subCategories,
  calls, // number of function calls this recursive function component makes
}: CategoryTreeProps) {
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
      {/* show mobile nav sub categories here if any */}
      {subCategories ? (
        <ul className={`${showChildren ? "max-h-50" : "max-h-0"} mx-2.5 transition-all duration-700 overflow-hidden`}>
          {Object.entries(subCategories).map(([k, v]) => {
            return (
              <CategoryTree
                key={k}
                category={k}
                subCategories={v}
                calls={++calls}
              />
            );
          })}
        </ul>
      ) : null}
    </li>
  );
}

export { CategoryTree };
