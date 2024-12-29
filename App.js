const parent = React.createElement("div", {id:"parent"}, 
    React.createElement("div", {id:"child"},[
        React.createElement("h1",{}, "I am h1 tag"),
        React.createElement("p",{}, "I am p tag"),
    ]
),
React.createElement("div", {id:"child2"},[
    React.createElement("h1",{}, "I am h1 tag"),
    React.createElement("p",{}, "I am p tag"),
]
),
)


// const heading = React.createElement("h1", {id:"heading"}, "Hello from yogi");
console.log(parent);

const root  = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);