import React from 'react'

const Pages = () =>{
  const Home = {
    name:"Home",
    isDropDown:true,
    children:['item','item2','item3','item4']
  }
  const Pages = {
    name:"Pages",
    isDropDown:true,
    children:['Notitem','Notitem2','Notitem3','Notitem4']
  }
  const Blog = {
    name:"Blog",
    isDropDown:true,
    children:['Notitem','Notitem2','Notitem3','Notitem4']
  }
  const Portfolio = {
    name:"Portfolio",
    isDropDown:true,
    children:['Notitem','Notitem2','Notitem3','Notitem4']
  }
  const Shop = {
    name:"Shop",
    isDropDown:true,
    children:['Notitem','Notitem2','Notitem3','Notitem4']
  }
  const Contact = {
    name:"Contact",
    isDropDown:false,
  }
  return (
    <>
      <ListItems info={Home} /> 
      <ListItems info={Pages} />      
      <ListItems info={Blog} />      
      <ListItems info={Portfolio} />      
      <ListItems info={Shop} />      
      <ListItems info={Contact} />      
    </>
  )

}

const ListItems = ({info}) =>{
  return (
    <>
      <li className="dropdown flex flex-wrap content-center group inline-block relative dropdown h-full cursor-pointer">
        <a href="#" className="flex justify-start ml-6">
          <div className="static ">
            <div className="dd-font font-bold text-base relative tracking-wider z-10 mb-0.5 px-1" style={{margin: "0.13rem"}}>
              {info.name}
            </div>
            <div className={`-mt-3 static`} style={{height:"100%"}}>
              <div className={`underline`}></div>
            </div>
          </div>
          {info.isDropDown
          ?<span>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-4 text-gray-500 absolute flex content-center flex-wrap`} fill="none" viewBox="3 -7 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-6 6-6-6" />
            </svg> 
          </span>
          :""
          }
        </a>
        {info.isDropDown
        ?<ul class="top-0 w-48 bg-white shadow px-6 py-8 rounded-lg .dd-menu absolute" >
           {info.children.map(children => <li class="py-1" key={children}><a class="font-bold text-base mb-2 cursor-pointer">{children}</a></li>)}
          </ul> 
        :""
        }     
      </li>

    </> 
 )
}

export default Pages