import React from 'react'

function ProgressBar({bgcolor, completed}) {

    const containerStyles = {
        height: 20,
        width: '70%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out',
      }
    
      const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
      }


    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${completed}%`}</span>
            </div>
        </div>
  )
}

export default ProgressBar