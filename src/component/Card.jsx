


export const Card = ({ children, className }) => {
  return (
    <div className={`${className}  py-7 px-24 hover:scale-110 rounded-md`}>
      {children}
    </div>
  );
};

function Img({ children }) {
  return <div className="pb-5 w-14">{children}</div>;
}

function Text({ children }) {
  return (
    <>
      <div className="text-base md:text-medium font-medium pb-1">{children}</div>
    </>
  );
}

function Item({ children }) {
  return (
    <>
      <div className="text-lowest pb-1">{children}</div>
    </>
  );
}
function Any({ children }) {
  return <>{children}</>;
}

Card.Img = Img;
Card.Text = Text;
Card.Item = Item;
Card.Any = Any;
