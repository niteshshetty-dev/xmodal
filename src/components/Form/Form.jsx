import styles from "./Form.module.css";

export default function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    const phone = e.target.phone.value;
    const dob = e.target.dob.value;
    const phoneRegex = /^\d{10}$/;
    if (phone && !phoneRegex.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    }
    if (dob && new Date(dob) > new Date()) {
      alert("Invalid date of birth. Please enter a valid date of birth.");
    }
  }
  return (
    <>
      <div className={styles.formContainer}>
        <h1>Fill details</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" placeholder="Username" id="username" required />
          <label htmlFor="email">Email Address:</label>
          <input type="email" placeholder="Email" id="email" required />
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" placeholder="Phone Number" id="phone" required />
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" placeholder="Date of Birth" id="dob" required />
          <div>
            <button type="submit" className={styles["submit-button"]}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
