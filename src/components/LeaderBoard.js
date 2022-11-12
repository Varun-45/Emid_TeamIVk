import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import "./Leaderboard.css"


const LeaderBoard = () => {
    const dados = [

        {
            id: 1,
            name: 'Shubham',
            image: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',

            age: 19,
            score: 8,
        },
        {
            id: 1,
            name: 'Varun',
            image: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',

            age: 19,
            score: 80,
        },
        {
            id: 1,
            name: 'Bhavya',
            image: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',

            age: 20,
            score: 90,
        },
        {
            id: 1,
            name: 'Laura',
            image: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',

            age: 2,
            score: 70,
        },
        {
            id: 1,
            name: 'Pratik',
            image: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',

            age: 2,
            score: 70,
        },
        {
            id: 1,
            name: 'Pranjal',
            image: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',

            age: 21,
            score: 60,
        }
    ];
    return (
        <div className="container1">
            <div className="topLeadersList">
                {dados.map((leader, index) => (
                    <div className="leader" key={leader.id}>
                        {index + 1 <= 3 && (
                            <div className="containerImage">
                                <img className="image" loading="lazy" src={leader.image} />
                                <div className="crown">
                                    <svg
                                        id="crown1"
                                        fill="#0f74b5"
                                        data-name="Layer 1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 100 50"
                                    >
                                        <polygon
                                            className="cls-1"
                                            points="12.7 50 87.5 50 100 0 75 25 50 0 25.6 25 0 0 12.7 50"
                                        />
                                    </svg>
                                </div>
                                <div className="leaderName">{leader.name}</div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="playerslist">
                <div className="table">
                    <div>#</div>

                    <div>Name</div>



                    <div style={{ marginLeft: "10rem" }}>
                        Age
                    </div>

                    <div style={{ marginLeft: "10rem" }}>
                        Score
                    </div>

                </div>
                <div className="list">
                    {dados.map((leader, index) => (
                        <div className="player" key={leader.id}>
                            <span> {index + 1}</span>
                            <div className="user">
                                <img className="image" src={leader.image} />
                                <span> {leader.name} </span>
                            </div>

                            <span style={{ marginLeft: "10rem" }}> {leader.age} </span>
                            <span style={{ marginLeft: "10rem" }}> {leader.score} </span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}



export default LeaderBoard