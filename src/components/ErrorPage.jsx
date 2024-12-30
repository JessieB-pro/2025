import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function ErrorPage() {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 5000)
    }, [])

    return (
        <div id='errorPage' className="container">
            <div className="heading">
                <h1>...</h1>
            </div>
        </div>
    )
}
