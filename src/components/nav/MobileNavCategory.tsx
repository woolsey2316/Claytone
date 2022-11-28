import React from 'react';

type MobileNavCategoryProps = {
  category: string;
  subCategories: object | null;
};
function MobileNavCategory({
  category,
  subCategories,
}: MobileNavCategoryProps) {
  const [showChildren, setShowChildren] = React.useState(false);

  const showChildrenOptions: React.MouseEventHandler<HTMLButtonElement> = (
    _e
  ) => {
    setShowChildren(true);
  };
  const hideChildrenOptions: React.MouseEventHandler<HTMLButtonElement> = (
    _e
  ) => {
    setShowChildren(false);
  };
  return (
    <li>
      <div style={{ display: 'flex' }}>
        <p>{category}</p>
        {subCategories ? (
          showChildren ? (
            <button onClick={hideChildrenOptions}>-</button>
          ) : (
            <button onClick={showChildrenOptions}>+</button>
          )
        ) : null}
      </div>
      {/* show mobile nav sub categories here if any*/}
      {subCategories && showChildren ? (
        <div style={{ margin: '0 5px 0 10px' }}>
          {Object.entries(subCategories).map(([k, v]) => {
            return <MobileNavCategory key={k} category={k} subCategories={v} />;
          })}
        </div>
      ) : null}
    </li>
  );
}

export { MobileNavCategory };
