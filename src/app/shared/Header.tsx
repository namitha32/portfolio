import Link from "next/link";

export default function Header() {
  const menus = [
    {
      name: "Resume  |",
      path: "/resume",
    },
    {
      name: "Projects  |",
      path: "/projects",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      <nav className="flex items-center justify-between p-4 bg-gray-50 text-white shadow-lg">

        <div className="flex items-center gap-1 text-black">
         <a href="/"><h1 className="text-2xl font-bold">Namitha</h1>
          <span className="text-sm text-black">designer</span></a> 
        </div>

       
        <div className="flex space-x-4 text-black">
          {menus.map((menu) => (
            <Link
              key={menu.name} 
              href={menu.path}
              className="text-lg  hover:text-blue-400 transition-colors duration-200"
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}