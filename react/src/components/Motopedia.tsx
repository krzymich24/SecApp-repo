export function Motopedia() {
  return (
    <>
      <div className="dropdown dropdown-hover">
        <label tabIndex={0} className="btn m-1">Menu</label>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href={"/#/home"}>Home</a></li>
          <li><a href={"/#/home/forum"}>Forum</a></li>
          <li><a href={"/#/home/chat"}>Chat</a></li>
          <li><a href={"/#/home/mycars"}>MyCars</a></li>
          <li><a href={"/#/home/motopedia"}>Motopedia</a></li>
          <li><a href={"/#/home/about"}>About</a></li>
          <li><a href={"/#/home/contact"}>Contact</a></li>
        </ul>
      </div>
    </>
  );
}
