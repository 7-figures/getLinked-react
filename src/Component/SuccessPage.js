import React from 'react'

function SuccessPage() {
    return (

            <div class=" success ">
                <div className='d-flex'>
                <div style={{ width: "174.617px", height: "174.617px", }}><img src="./images/successfully-done-5108472-4288033 1.png" /></div>
                <div style={{ width: "184.924px", height: "184.924px", }}> <img src="./images/successful-man-3025713-2526911 1.png" /></div>
                </div>
                <div><p style={{
                    textAlign: "center", fontFamily: 'Montserrat', color: "#FFF", fontSize: "16px", fontStyle: "normal",
                    fontWeight: "600"
                }}> Congratulations<br />
                    you have successfully<br />
                    Registered!</p></div>
                <p style={{
                    textAlign: "center", fontFamily: 'Montserrat', color: "#FFF", fontSize: "12px", fontStyle: "normal",
                    fontWeight: "500"
                }}>Yes, it was easy and you did it!<br />
                    check your mail box for next step</p>
                <div class="btn reg"><a href="index.html">Go back</a></div>
            </div>
        
    )
}

export default SuccessPage