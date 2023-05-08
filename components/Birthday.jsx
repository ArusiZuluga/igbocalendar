import React from "react";

export default function BirthdayInput(){
    return <div id="bdate">
        <form action="/App.js" method="post">
            <label htmlFor="igboday"> CONVERT DATE TO IGBO DAY</label>
            <input type="date" name="Enter Date" id="igboday" />
            <button type="submit" id="ibbut">CONVERT</button>
        </form>
    </div>
}