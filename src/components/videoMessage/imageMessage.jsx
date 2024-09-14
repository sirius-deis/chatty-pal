const ImageMessage = ({message, isOwn}) => {
  return <div>
    <img src={message.imageURL} alt={message.imageURL} />
    <p>{message.message}</p>
  </div>
}

export default ImageMessage;