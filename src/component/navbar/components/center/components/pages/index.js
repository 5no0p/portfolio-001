import React from 'react'

const Pages = () =>{
  const Home = {
    name:"Home",
    isDropDown:true,
    children:[
      {
        isNested:false,
        data:"item"
      },
      {
        isNested:true,
        data:"item",
        nest:["nest1","nest2","nest3"]
      },
      {
        isNested:true,
        data:"item",
        nest:["nest","nest1"]
      }
    ]
  }
  const Pages = {
    name:"Pages",
    isDropDown:true,
    children:[
      {
        isNested:false,
        data:"item"
      },
      {
        isNested:true,
        data:"item",
        nest:["nest1","nest2","nest3"]
      },
      {
        isNested:true,
        data:"item",
        nest:["nest","nest1"]
      }
    ]
  }
  const Blog = {
    name:"Blog",
    isDropDown:true,
    children:[
      {
        isNested:false,
        data:"item"
      },
      {
        isNested:true,
        data:"item",
        nest:["nest1","nest2","nest3"]
      },
      {
        isNested:true,
        data:"item",
        nest:["nest","nest1"]
      }
    ]
  }
  const Portfolio = {
    name:"Portfolio",
    isDropDown:true,
    children:[
      {
        isNested:false,
        data:"item"
      },
      {
        isNested:true,
        data:"item",
        nest:["nest1","nest2","nest3"]
      },
      {
        isNested:true,
        data:"item",
        nest:["nest","nest1"]
      }
    ]
  }
  const Shop = {
    name:"Shop",
    isDropDown:true,
    children:[
      {
        isNested:false,
        data:"item"
      },
      {
        isNested:true,
        data:"itemNest",
        nest:["nest1","nest2","nest3"]
      },
      {
        isNested:true,
        data:"itemNest",
        nest:["nest","nest1"]
      }
    ]
  }
  const Contact = {
    name:"Contacts",
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
        <a href="#" className="flex justify-start">
          <div className="static ">
            <div className="nab-prim dd-font block font-bold text-base relative tracking-wider z-10 mb-0.5 px-1" style={{margin: "0.13rem"}}>
              {info.name}
            </div>
            <div className={`-mt-4 static`} style={{height:"100%"}}>
              <div className={`underline`}></div>
            </div>
          </div>
          {info.isDropDown
          ?<span>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-4 text-gray-500 absolute flex content-center flex-wrap`} fill="none" viewBox="3 -12 26 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-6 6-6-6" />
            </svg> 
          </span>
          :""
          }
        </a>
        {info.isDropDown
        ?<ul class="top-0 w-48 bg-white px-6 py-3 rounded-lg .dd-menu absolute" >
           {info.children.map(children =>
            <li class="py-1 relative" key={`${info.name}_${children.data}`}>
            <a class="font-bold text-base mb-2 cursor-pointer flex justify-between">
            <div className="static">
              <div className="dd-font font-bold text-base relative tracking-wider z-10 mb-0.5 px-1" style={{margin: "0.13rem"}}>
                {children.data}
              </div>
              <div className={`-mt-3 static`} style={{height:"100%"}}>
                <div className={`underline`}></div>
              </div>
            </div>
            {children.isNested
            ?<span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-4 text-gray-500 absolute flex content-center flex-wrap" fill="none" viewBox="0 -7 26 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            </span>
            :""  
            }
            </a>{children.isNested
            ?<NestItems items={children.nest}/>
            :""
            }</li>
            )}
          </ul>
        :""
  
        }     
      </li>

    </> 
 )
}

const NestItems = ({items}) => {
  
  return (
    <>
      <ul class="top-0 w-48 bg-white px-6 py-3 rounded-lg .dd-menu absolute" >
           {items.map(children => <li class="py-1" key={children}><a class="font-bold text-base mb-2 cursor-pointer flex justify-between">
            <div className="static">
              <div className="dd-font font-bold text-base relative tracking-wider z-10 mb-0.5 px-1" style={{margin: "0.13rem"}}>
                {children}
              </div>
              <div className={`-mt-3 static`} style={{height:"100%"}}>
                <div className={`underline`}></div>
              </div>
            </div></a></li>)}
          </ul>
    </>
  )

}

export default Pages