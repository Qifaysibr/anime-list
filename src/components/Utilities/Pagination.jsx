const Pagination = ({page, lastPage, setPage}) => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    const handleNextPage = () => { 
        setPage((prevState) => prevState + 1)
        scrollToTop()
     }
    const handlePrevPage = () => { 
        setPage((prevState) => prevState - 1)
        scrollToTop()
     }
    return(
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-orange text-2xl">
            <button onClick={handlePrevPage} disabled={page === 1} className="transition-all hover:text-amber-200">Prev</button>
            <p>{page} / {lastPage}</p>
            <button onClick={handleNextPage} disabled={page === lastPage} className="transition-all hover:text-amber-200">Next</button>
        </div>
    )
}

export default Pagination