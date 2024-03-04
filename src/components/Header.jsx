import Logo from "./Logo";

export default function Header() {
    return(
        <div className="header">
            <div className="headerLeft">
                <Logo />
                <input  className="searchBar headerItem" type="text" placeholder="Search ticker symbol or stock name. (Ex: AAPL)" />
                <button className="buttonMain headerItem">Search</button>
            </div>
            <div className="headerRight">
                <p className="headerItem">HeaderRight</p>
            </div>
        </div>
    )
}