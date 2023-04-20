const ShowMoreButton =({ loading, onClick, text }) =>{
  let showText = text || "VER MÁS NOTICIAS";
  return (
    <button className={`showMore__button ${loading ? "opacity-50" : ""}`} disabled={loading} onClick={onClick}>
        {loading ? "CARGANDO..." : showText}
    </button>
  );
}

export {ShowMoreButton}