import { useParams } from "react-router-dom"

export function Search() {
    const {title} = useParams();
    return (
        <>
            <h1>Search! || {title}</h1>
        </>
    )
};