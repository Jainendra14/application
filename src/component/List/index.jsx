import React from "react";

const users=[
    {
        name:"jain",
        age:21
    },
    {
        name:"amit",
        age:32
    },
    {
        name:"jolli",
        age:26

    },
    {
        name:"happy",
        age:33
    }
]

const List=()=>{
    return(
        <section>
            {users.map((user)=>(
                <div>
                    <p>{user.name}</p>
                    <p>{user.age}</p>
                </div>
            ))
        
            }

        </section>
    );
};

export default List
