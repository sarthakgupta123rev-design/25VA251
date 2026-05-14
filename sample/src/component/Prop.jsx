function Prop({ students }) {
    return (
        <div>
            {students.map((s, index) => (
                <div key={index}>
                    <h3>{s.name}</h3>
                    <p>Roll No: {s.rollno}</p>
                    <p>Course: {s.course}</p>
                </div>
            ))}
        </div>
    );
}

export default Prop;