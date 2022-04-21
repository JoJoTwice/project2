import { useLocation } from "react-router-dom";
import styled from "styled-components"
import { DateFilter } from "./DateFilter/DateFilter";
import { NavItem } from "./NavItem";
import { ActiveNavLink, NavLink } from "./NavLink";
import { SearchForm } from "./SearchForm";

const NavBarDiv = styled.div`

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    background-color: rgba(233, 16, 246, 0.5);

    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    z-index: 10;
`

export const NavBar = () => {
    
    const navEntries = [
        { url: "/", name: "ToDo" },
        { url: "/completed", name: "Completed" },
        { url: "/all", name: "All" },
        
    ]
    
    let pathname = useLocation().pathname;
    
    return (
        <>
            <NavBarDiv>
                <DateFilter />
                {navEntries.map((entry, index) => {
                    return (
                             <NavItem key={index}>
                                 {entry.url === pathname ? <ActiveNavLink to={entry.url}>{entry.name}</ActiveNavLink> :
                                                            <NavLink to={entry.url}>{entry.name}</NavLink>}
                            </NavItem> 
                    );
                })}
                <SearchForm />
            </NavBarDiv>
        </>
    );
}