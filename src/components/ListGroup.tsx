import React from "react";
 


function ListGroup() {
    const cities:string[]=["colombo",
        "kandy",
        "Galle",
        "jagffna ",
    ];
        
    const fname:any[]=["shanika", "sureka", "dinithi","kamala"];
    
    const item:string[]=[];
    const items:string[]=["ball","bat","pen"];

    const HandleEvent=(event :React.MouseEvent)=>{
        console.log(event);
    }

    return (<>
        <div>
            <ul className="list-group">
                {/* //condition sttement */}
                {item.length=== 0 ? <p>this array is empty</p> : <p>this array is null</p>}

                {items.length=== 0 ? <p>this array is empty </p> : <p> this array has items</p>}
                   

                   
                {cities.map((city )=>(
                <li className="list-group-item">{city}</li>
                ))}


            {/* <li className="list-group-item disabled" aria-disabled="true">A disabled item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li> */}
            </ul>
        </div>

        

        <ul className="list-group ">
            {fname.map((name)=>(
                 <li className="list-group-item">{name}</li>
            ))}
        </ul>
<p>hiii</p>

        <ul className="list-group">
            {cities.length===0 && cities.map((city)=>(
                <li className="list-group-item">{city}  </li>
            ))}
        </ul>


        {/* <ul className="list-group">
            {cities.length !==0 && cities.map((city,index)=>(
                <li key={index}className="list-group-item">{city + " "+index}   </li>
            ))}
        </ul>

         */}
        <ul className="list-group">
            {cities.length !==0 && cities.map((city,index)=>(
                <li key={index}className="list-group-item" onClick={(event)=>console.log(event.timeStamp)}>{city + " "+index}   </li>
            ))}
{/* 
function */}
            {items.length !==0 && items.map((item,index)=>(
                <li key={index}className="list-group-item" onClick={(HandleEvent)}>{item + " "+index}   </li>
            ))}


{cities.length !==0 && cities.map((city,index)=>(
                <li key={index}className="list-group-item" onClick={(HandleEvent)}>{city + " "+index}   </li>
            ))}
        </ul>


        </>
    )
}

export default ListGroup;