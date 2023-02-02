import React from "react";

function formatExperience(json) {
    return <div>
        {
            json.map(function (job, _) {
                return <div>
                    <div><b>{job.employer}</b> - {job.position}</div>
                    <div>{job.period}</div>
                    <ul>
                        {job.points.map(function (text, _) {
                            return <li>- {text}</li>
                        })}
                    </ul>
                    <div><br></br><br></br></div>
                </div>
            })
        }
    </div>
}

function formatProfile(json) {
    return <div>
        <div>{json}<br></br><br></br></div>
        <img className="p-2 rounded-[16px]" src={require('../photo.png') } />
    </div>
}

function formatContent(content_id, json) {
    switch (content_id) {
        case "Profile":
            return formatProfile(json)
        case "Experience":
            return formatExperience(json)
        default:
            return <div>Dingleberry</div>
    }
}


function Content(props) {

    const [content, setContent] = React.useState(null)

    const getData = async () => {
        let response = await fetch('resume_data.json')
        let json = await response.json()
        let content = formatContent(props.content_id, json[props.content_id])
        setContent(content)
    }

    React.useEffect(() => {getData()}, [props.content_id])

    return (
        <div className="p-6 w-full">
            <div className="p-8 rounded-[32px] text-white bg-gray-700 leading-loose">
                <div className="text-xl">{props.content_id}<br></br><br></br></div>
                {content}
            </div>
        </div>
    )
}

export default Content