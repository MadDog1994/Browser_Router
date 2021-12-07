import female from '../сontacts/assets/female.png'
import male from '../сontacts/assets/male.png'
import anonymous from '../сontacts/assets/anonymous.png'
import "../сontacts/DataContacts.css";

function Contact(props) {
    const { firstName, lastName, phone, gender } = props;

    function setGender(gender) {
        if (gender === "male") return male
        else if (gender === "female") return female
        else if(!gender) return anonymous
    }
    return (
        <div className='contacts'>
            <p className="p-style">Name: {firstName} {lastName} </p>
            <p className="p-style">Phone: {phone}</p>
            <img src={setGender(gender)} alt="#" className="img-style"/>
        </div>
    )
}

export default Contact;