const Dashboard = ({user}) => {
    return (
        <div>
            {user === "Dana" ? (
            <h2>Welcome here, {user}</h2>) : ( <h2>Oh, you must be new one here {user}</h2>)
            }
            </div>
         
        
    );
};
 
export default Dashboard;