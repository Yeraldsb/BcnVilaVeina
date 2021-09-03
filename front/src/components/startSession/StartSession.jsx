import React, {useState} from "react";
import "./startSession.css";
import Typical from 'react-typical'


export const StartSession = () => {
    return (
        <div className="typical">
            <p>Benvinguts a Vilaveïna {' '}

                <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        'Solidaritat',
                        1000,
                        'Veïnat',
                        1000,
                        'Igualtat',
                        1000,
                        'Col·lectivitat',
                        1000,
                        'Proximitat',
                        1000,
                    ]}
                />
            </p>
        </div>


    )
}