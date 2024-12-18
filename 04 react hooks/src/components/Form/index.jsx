import React from 'react'

const Form = ({students , setStudents}) => {
  const [studentName, setStudentName] = useState("");
  const [gpa, setGpa] = useState(0);
  const [faculty, setFaculty] = useState("");
  const handleAddStudent = (e) => {
    e.preventDefault();
    const studensArr = {
      studentName,
      gpa,
      faculty
    }
    setStudents([...students, studensArr]);
    setStudentName("");
      setFaculty("");
      setGpa(0);
  }
  return (
    <form onSubmit={handleAddStudent}>
      <fieldset>
        <legend>students Form</legend>
        <input type="text" placeholder='stname'  onChange={(e) => {
              setStudentName(e.target.value.trim());
            }}/>
        <input type="number" placeholder='gpa' onChange={(e) => {
              setGpa(e.target.value);
            }}/>
        <input type="Speciality" placeholder='gpa' onChange={(e) => {
              setFaculty(e.target.value.trim());
            }}/>
        <button type='submit'>Add</button>
      </fieldset>
    </form>
  )
}

export default Form