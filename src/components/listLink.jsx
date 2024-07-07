
import {  useNavigate} from "react-router-dom"

const listLink = ({ listaAtv}) => {
    const navigate = useNavigate();

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
       navigate(selectedValue); 
    };

    return (
        <div>
            {listaAtv.map((item, index) => {
                    return (
                        <div key={index} className="select">
                           
                            <select name=""
                            onChange={handleSelectChange}
                            id="" >
                                <option className="title-default" value="/">{item.title}</option>
                           
                                {item.submenu.map((subitem, subindex) => (
                                
                                   <option key={subindex} value={subitem.link}>{subitem.title}</option>
                                ))}
                          
                            </select>
                        </div>
                    );
                
               
            })}
        </div>
    ) ;
}

export default listLink;