import React, { useState } from "react";

function NewTransaction() {
    const [transactionName, setTransactionName] = useState("");
    const [amount, setAmount] = useState("");

    const handleAddTransaction = () => {
        console.log("Transaction Name:", transactionName);
        console.log("Amount:", amount);
    };

    return (
        <div style={styles.container}>
            <div style={styles.section}>
                <div style={styles.inputGroup}>
                    <label htmlFor="transactionName" style={styles.label}>Transaction Name</label>
                    <input
                        type="text"
                        id="transactionName"
                        placeholder="Type an answer"
                        value={transactionName}
                        onChange={(e) => setTransactionName(e.target.value)}
                        style={styles.input}
                    />
                </div>
            </div>

            <div style={styles.section}>
                <div style={styles.inputGroup}>
                    <label htmlFor="amount" style={styles.label}>Amount</label>
                    <input
                        type="text"
                        id="amount"
                        placeholder="$0.00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        style={styles.input}
                    />
                </div>
            </div>

            <div style={styles.section}>
                <button style={styles.button} onClick={handleAddTransaction}>
                    Add
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
    }
};

export default NewTransaction;
