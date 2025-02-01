import React, { useState } from "react";

function NewGoal() {
    const [goalName, setGoalName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [status, setStatus] = useState('');

    const handleAddGoal = () => {
        console.log('Goal Name:', goalName);
        console.log('Due Date:', dueDate);
        console.log('Status:', status);
    };

    return (
        <div style={styles.container}>
            <div style={styles.section}>
                <div style={styles.inputGroup}>
                    <label htmlFor="goalName" style={styles.label}>Goal Name</label>
                    <input
                        type="text"
                        id="goalName"
                        placeholder="Save$,2000 Every month"
                        value={goalName}
                        onChange={(e) => setGoalName(e.target.value)}
                        style={styles.input}
                    />
                </div>
            </div>

            <div style={styles.section}>
                <div style={styles.inputGroup}>
                    <label htmlFor="dueDate" style={styles.label}>Due Date</label>
                    <input
                        type="text"
                        placeholder="select a date"
                        id="dueDate"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        style={styles.input}
                    />
                </div>
            </div>

            <div style={styles.section}>
                <label style={styles.label}>Status</label>
                <div style={styles.statusGroup}>
                    <input
                        type="radio"
                        name="status"
                        value="done"
                        checked={status === 'done'}
                        onChange={() => setStatus('done')}
                        style={styles.radioInput} 
                    />
                    <button style={styles.doneBtn}>
                        <i className="fas fa-check-circle" style={styles.finish}>Done</i>
                    </button>

                    <button style={styles.pendingBtn}>
                        <i className="fas fa-clock">Pending</i>
                    </button>
                    <input
                        type="radio"
                        name="status"
                        value="pending"
                        checked={status === 'pending'}
                        onChange={() => setStatus('pending')}
                        style={styles.radioInput} 
                    />
                </div>
            </div>

            <div style={styles.section}>
                <button style={styles.button} onClick={handleAddGoal}>
                    Add Goal
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        width: '450px',
        margin: '50px auto',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
    },
    section: {
        marginBottom: '20px',
    },
    inputGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        fontWeight: 'bold',
        marginBottom: '5px',
        fontSize: '14px',
        color: '#333',
    },
    input: {
        width: '100%',
        padding: '12px 15px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        backgroundColor: '#f9f6f6',
        fontSize: '14px',
        color: '#333',
        outline: 'none',
        transition: 'all 0.3s ease',
    },
    statusGroup: {
        display: 'flex',
        gap: '10px',
        marginTop: '10px',
    },
    doneBtn: {
        backgroundColor: 'white',
        color: '#a6a4a4',
        borderColor: '#a6a4a4',
        width: '190px',
        padding: '8px 15px',
        borderRadius: '8px',
    },
    pendingBtn: {
        backgroundColor: '#fff',
        color: '#4a90e2',
        borderColor: '#4a90e2',
        width: '190px',
        padding: '8px 15px',
        borderRadius: '8px',
    },
    finish: {
        margin: '0',
        marginTop: '5px',
        marginLeft: '20px',
    },
    button: {
        width: '100px',
        padding: '10px 8px',
        backgroundColor: '#0ea5e9',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '13px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        marginLeft: '310px',
        marginBottom: '-20px',
    },
    radioInput: {
        display: 'none', 
    }
};

export default NewGoal;
