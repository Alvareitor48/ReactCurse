export function TwitterFollowCard({userName, name, isFollowing}){
    
    return(
        <article className="article1">
            <header className="article1__header">
                <img src={`https://unavatar.io/${userName}`}></img>
                <div className="article1__header-div">
                    <strong>{name}</strong>
                    <span className="article1__header-div-span">@alvr_may</span>
                </div>
            </header>
            
            <aside className="article1__aside">
                <button className="article__aside-button">
                    Seguir
                </button>
            </aside>
        </article>
    )
}