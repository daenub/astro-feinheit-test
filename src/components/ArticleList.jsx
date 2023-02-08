import {h} from "preact"
import {useState} from "preact/hooks"
import "../styles/article-list.css"

export function ArticleList({articles}) {
    const [searchTerm, setSearchTerm] = useState("")

    const filteredArticles = articles.filter(article => article.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)

    return (
        <>  
            <div class="search">
            <label class="search__label" htmlFor="input-search">Artikel suchen</label><br></br>
            <input class="search__input" type="search" name="search" id="input-search" value={searchTerm} onInput={(e) => setSearchTerm(e.target.value)} />
            </div>
            <ul class="article-list">
                {filteredArticles.map(article => <li class="article"><a class="article__link" href={article.url}>{article.title}</a></li>)}
            </ul>
        </>
    )
}
