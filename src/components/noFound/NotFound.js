import './notFound.css'

const NotFound = (props) => {
  return (
    <div className="notFoundContainer">
      <div className="message">
        <p>
          {props.error?.data
            ? props.error?.data?.message
            : "We're sorry, but the data you requested is currently unavailable. Please try again later or contact customer support for assistance."}
        </p>
      </div>
    </div>
  )
}

export default NotFound
