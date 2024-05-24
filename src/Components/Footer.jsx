const Footer = () => {
  return (
    <>
      <footer className="bg-[orange] text-black" >
        <div className="h-auto max-w-4xl p-4 grid gap-4 grid-cols-3">
          <div>
            <p className="text-xl font-bold pb-1">Get to know us</p>
            <ul>
              <li className="p-1 pl-3">About us</li>
              <li className="p-1 pl-3">Careers</li>
              <li className="p-1 pl-3">Blog</li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-bold pb-1">Contact us</p>
            <ul>
              <li className="p-1 pl-3">Facebook</li>
              <li className="p-1 pl-3">Instagram</li>
              <li className="p-1 pl-3">Twitter</li>
              <li className="p-1 pl-3">Linked In</li>
            </ul>
          </div>
          <div>
            <p className="text-2xl font-bold pb-1">Ecom.</p>
            <p className="pt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              quam voluptate eius blanditiis commodi, ex vel adipisci dicta
              vitae deserunt. Omnis accusamus magnam eligendi,
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
