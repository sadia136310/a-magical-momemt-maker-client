import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - A Magical Moment Maker`;
    }, [title])
};

export default useTitle;