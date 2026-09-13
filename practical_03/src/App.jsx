import { useState } from 'react'
import './App.css'

function App() {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    course: '',
    age: '',
  })

  const [students, setStudents] = useState([])
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setStudent({
      ...student,
      [name]: value,
    })
  }

  const validateForm = () => {
    const newErrors = {}

    if (student.name.trim() === '') {
      newErrors.name = 'Student name is required.'
    }

    if (student.email.trim() === '') {
      newErrors.email = 'Email is required.'
    } else if (!student.email.includes('@')) {
      newErrors.email = 'Enter a valid email address.'
    }

    if (student.course === '') {
      newErrors.course = 'Please select a course.'
    }

    if (student.age === '') {
      newErrors.age = 'Age is required.'
    } else if (student.age < 17 || student.age > 40) {
      newErrors.age = 'Age must be between 17 and 40.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (validateForm()) {
      const newStudent = {
        id: Date.now(),
        ...student,
      }

      setStudents([...students, newStudent])
      setStudent({
        name: '',
        email: '',
        course: '',
        age: '',
      })
      setErrors({})
      alert('Student registered successfully!')
    }
  }

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id))
  }

  return (
    <div className="app">
      <h1>Student Information System</h1>

      <div className="form-container">
        <h2>Register New Student</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Student Name</label>
            <input
              type="text"
              name="name"
              value={student.name}
              onChange={handleChange}
              placeholder="Enter full name"
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={student.email}
              onChange={handleChange}
              placeholder="Enter email address"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Course</label>
            <select
              name="course"
              value={student.course}
              onChange={handleChange}
            >
              <option value="">Select Course</option>
              <option value="M.Sc. CA & IT">M.Sc. CA & IT</option>
              <option value="B.Sc. CA & IT">B.Sc. CA & IT</option>
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
            </select>
            {errors.course && <p className="error">{errors.course}</p>}
          </div>

          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={student.age}
              onChange={handleChange}
              placeholder="Enter student age"
            />
            {errors.age && <p className="error">{errors.age}</p>}
          </div>

          <button type="submit" className="add-button">
            Save Student
          </button>
        </form>
      </div>

      <div className="student-list">
        <h2>Registered Students Record</h2>

        {students.length === 0 ? (
          <p className="empty-message">No student records found.</p>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Course</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.id}>
                    <td>{s.name}</td>
                    <td>{s.email}</td>
                    <td>{s.course}</td>
                    <td>{s.age}</td>
                    <td>
                      <button
                        className="delete-button"
                        onClick={() => deleteStudent(s.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default App