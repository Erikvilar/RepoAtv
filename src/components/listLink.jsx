
import { Link, useNavigate } from "react-router-dom"

const listLink = ({ listaAtv }) => {
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
                       
                        <ul className="dropdown">

                        <h3 className="dropdown-title">{item.title}</h3>
                       

                            {item.submenu.map((subitem, subindex) => (
                                <li key={subindex}>
                                    <Link to={subitem.link}>{subitem.title}</Link>
                                </li>

                            ))}

                        </ul>
                    </div>
                );


            })}
        </div>
    );
}

export default listLink;