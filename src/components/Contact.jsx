

const Contact = () => {
  return (
    <div className="main_contact">
        <div><h1>Contact</h1></div>
        <div className="contact">
            <li><button className="buttons_in_contact" onClick={()=> window.open("https://github.com/muraliaari/", "_blank")}><img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" style={{width:"180px"}} alt="" /></button></li>
            <li><button className="buttons_in_contact" onClick={()=> window.open("https://www.linkedin.com/in/murali-aari-6b1046bb/", "_blank")}><img src="https://pbs.twimg.com/profile_images/1508518003184349187/1KQYoqPY_400x400.png" alt="" /></button></li>
            <li><a className="anchor" onClick={()=> window.open("https://mail.google.com/mail/?view=cm&fs=1&to=kunashaari@gmail.com&su=SUBJECT&body=BODY&bcc=kunashaari@gmail.com", "_blank")}>kunashaari@gmail.com</a></li>
        </div>
    </div>
  )
}

export default Contact