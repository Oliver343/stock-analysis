import Logo from "./Logo";

export default function Header() {
    return(
        <div className="header">
            <div className="headerLeft">
                <Logo />
                <p className="headerItem">HeaderLeft</p>
            </div>
            <div className="headerRight">
                <p className="headerItem">HeaderRight</p>
            </div>
        </div>
    )
}