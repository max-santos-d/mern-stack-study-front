export function Card({news}) {
    return (
        <>
            <section>                
                <h2>{news.title}</h2>
                <p>{news.text}</p>
                <img src={news.banner} alt="Imagem" />
                <i className="bi bi-heart"></i>
                <span>{news.likes}</span>
                <i className="bi bi-chat"></i>
                <span>{news.comments}</span>
            </section>
        </>
    );
};