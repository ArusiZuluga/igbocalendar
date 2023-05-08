import React from "react";

export default function Calculator(){
    function Calculator(){
        const Igbo_Days = ["Eke", "Orie", "Afor", "Nkwo"]
        var baseDay = new Date("1930-01-01")
        var today = baseDay.getDay()
    
        for (i = today; i <= 6;){
            if (i === 0 || i === 4){
                var IgboDay = Igbo_Days[0]
                return IgboDay
            }
            else if (i === 1 || i === 5){
                var IgboDay = Igbo_Days[1]
                return IgboDay
            }
            else if (i === 2 || i === 6){
                var IgboDay = Igbo_Days[2]
                return IgboDay
            }
            else if (i === 3){
                var IgboDay = Igbo_Days[3]
                return IgboDay
            }
            else{
                return " Invalid Date"
            }
        }
    
    }
    
}