import React from 'react';

export default function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
    <div style={{height: '50px'}}>
    { props.alertText && <div className={`alert alert-${props.alertText.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alertText.type)}</strong> {props.alertText.message}
    </div>}
    </div>
  );
}
